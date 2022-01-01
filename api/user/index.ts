import { mockAPI, APIResponse } from "../base";
import { User } from "@/stores/user/model";
import LocalStorageManager from "../localstorage";
export {
  getCheckUsernameForLogin,
  getCheckUsernameForRegister,
  postLogin,
  postRegister,
  postCheckLoginSession,
};
//todo Response
//todo Model
const getCheckUsernameForLogin = mockAPI<(username: string) => boolean>(
  (username: string) => {
    //must be existing
    const lsm = new LocalStorageManager();
    return lsm.checkUsernameExisting(username);
  }
);
const getCheckUsernameForRegister = mockAPI<(username: string) => boolean>(
  (username: string) => {
    //must not be existing
    const lsm = new LocalStorageManager();
    return !lsm.checkUsernameExisting(username);
  }
);
const postCheckLoginSession = mockAPI<
  (username: string, auth: string, expired: number) => APIResponse<User>
>((username: string, auth: string, expired: number) => {
  //must not be existing
  const lsm = new LocalStorageManager();
  return lsm.checkUserLoginSession(username, auth, expired);
});
const postLogin = mockAPI<
  (username: string, password: string) => APIResponse<User>
>((username: string, password: string) => {
  const lsm = new LocalStorageManager();
  return lsm.login(username, password);
});
const postRegister = mockAPI<(username: string, password: string) => boolean>(
  (username: string, password: string) => {
    return true;
  }
);
