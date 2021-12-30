import { Tweet } from "@/stores/tweet";
import { User } from "@/stores/user";
import { getSomeTweets } from "@/stores/tweet/data.test";
import { getSomeUsers } from "@/stores/user/data.test";
//server mocking
export default class LocalStorageManager {
  ls: Storage;
  _tweets: TTweet[];
  _users: TUser[];
  isTweetsLoaded: boolean = false;
  isUsersLoaded: boolean = false;
  constructor() {
    this.ls = window.localStorage;
    this._tweets = [];
    this._users = [];
  }

  get tweets() {
    this._synchronize();
    return this._tweets;
  }
  get users() {
    this._synchronize();
    return this._users;
  }
  get availableTid() {
    let v: number;
    const tidFromLocal = this.ls.getItem("tid");
    if (tidFromLocal == null) v = INIT_TID;
    else v = parseInt(tidFromLocal) + 1;
    this.ls.setItem("tid", v.toString());
    return v;
  }
  addNewTweet(tweet: TTweet) {
    this.tweets.push(tweet);
  }

  deleteTweet(id: number) {
    let index = this._searchTweet(id);
    if (index >= 0) {
      this.tweets.splice(index, 1);
      return true;
    } else return false;
  }
  updateTweet(tweet: TTweet) {
    let index = this._searchTweet(tweet.id);
    if (index >= 0) this.tweets.splice(index, 1, tweet);
    else this.tweets.push(tweet);
    return true;
  }
  checkUsernameExisting(username: string) {
    return this.users.some((user) => user.username.trim() === username.trim());
  }
  save() {
    this._synchronize();
    //saving tweets
    this.ls.setItem("tweets", JSON.stringify(this.tweets));
    //saving users
    this.ls.setItem("users", JSON.stringify(this.users));
  }
  _loadTweets() {
    const tweetsFromLocal = this.ls.getItem("tweets");
    let tweets: TTweet[];
    if (tweetsFromLocal == null) tweets = getSomeTweets();
    //todo checker
    else tweets = JSON.parse(tweetsFromLocal);
    this._tweets = tweets;
    this.isTweetsLoaded = true;
  }
  _loadUsers() {
    const usersFromLocal = this.ls.getItem("users");
    let users: TUser[];
    if (usersFromLocal == null) users = getSomeUsers();
    //todo checker
    else users = JSON.parse(usersFromLocal);
    this._users = users;
    this.isUsersLoaded = true;
  }
  _synchronize() {
    if (!this.isTweetsLoaded) this._loadTweets();
    if (!this.isUsersLoaded) this._loadUsers();
  }
  _searchTweet(id: number) {
    let cur: number = -1;
    for (let i = 0; i < this.tweets.length; i++) {
      let tweet = this.tweets[i];
      if (tweet.id === id) {
        cur = i;
        break;
      }
    }
    return cur;
  }
}
const INIT_TID = 10;
type TTweet = Tweet;
type TUser = User;
