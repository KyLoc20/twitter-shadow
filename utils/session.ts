import API from "@/api/index";
import { User } from "@/stores/user/model";
/*
    Local Session Manager
    How to acquire the stored info of Login info in order to init UserStore?
    1. LocalSessionManager.session() -> Get [Session] from localStorage
    2. Session.check() -> Send a request, Make sure the session to be authentic and not expired
        -> passed go to 3
        -> not passed go to 4
    3. Request returns info about the logged-in user -> Dispatch ActionTypes.Login with it
    4. Dispatch ActionTypes.Login with Tourist
*/
export { NEVER_EXPIRE };
export default class LocalSessionManager {
  private static _instance: LocalSessionManager;
  _session: TSession = DEFAULT_SESSION; //not expired default
  isLoaded: boolean = false;
  constructor() {
    if (LocalSessionManager._instance) return LocalSessionManager._instance;
    else LocalSessionManager._instance = this;
  }
  session() {
    this._synchronize();
    return new Session(
      this._session.username,
      this._session.auth,
      this._session.expire
    );
  }
  update(username: string, auth: string, expire: number) {
    this._session = { username, auth, expire };
    this._save();
  }
  _save() {
    localStorage.setItem("_session", JSON.stringify(this._session));
  }
  _synchronize() {
    //load from localStorage
    if (this.isLoaded) return;
    let unsafeSession = localStorage.getItem("_session");
    if (unsafeSession != null) {
      this._session = JSON.parse(unsafeSession);
    } else {
      this._session = DEFAULT_SESSION;
      this._save();
    }
    this.isLoaded = true;
  }
}
class Session {
  _username: string;
  _auth: string;
  _expire: number;
  constructor(username: string, auth: string, expire: number) {
    this._username = username;
    this._auth = auth;
    this._expire = expire;
  }
  get isExpired() {
    return this._expire < Date.now();
  }
  check() {
    //Session.check() -> Send a request, Make sure the session to be authentic and not expired
    console.log("check start");
    return new Promise<User>((resolve, reject: (msg: string) => void) => {
      if (this.isExpired) reject("Session Expired!");
      else {
        console.log("check before post");
        API.User.postCheckLoginSession(
          this._username,
          this._auth,
          this._expire
        ).then((res) => {
          console.log("check post returned");
          if (res.good && res.result != null) resolve(res.result);
          else reject("Session Invalid!");
        });
      }
    });
  }
}
type TSession = {
  username: string;
  auth: string;
  expire: number; //timestamp
};
const NEVER_EXPIRE = new Date(2100, 1, 1);
const DEFAULT_SESSION: TSession = {
  username: "#empty",
  auth: "",
  expire: NEVER_EXPIRE.valueOf(),
};
