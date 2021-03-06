import { Tweet } from "@/stores/tweet";
import { User } from "@/stores/user";
import { getSomeTweets } from "@/stores/tweet/data.test";
import { getSomeUsers, getSomeAuth } from "@/stores/user/data.test";
import {
  APIResponse,
  succeed as succeedResponse,
  fail as failResponse,
} from "./base";
//server mocking
//todo [username: string]: string is not safe use Map instead
type AuthMap = {
  [username: string]: string | undefined;
};
type UnsafeTweet = Omit<Tweet, "timestamp"> & { timestamp: string };
export default class LocalStorageManager {
  ls: Storage;
  _tweets: TTweet[];
  _users: TUser[];
  _auth: AuthMap;
  isTweetsLoaded: boolean = false;
  isUsersLoaded: boolean = false;
  isAuthLoaded: boolean = false;
  constructor() {
    this.ls = window.localStorage;
    this._tweets = [];
    this._users = [];
    this._auth = {};
    this._synchronize();
  }
  get auth() {
    this._synchronize();
    return this._auth;
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
  getUser(username: string) {
    let user = this.users.find((user) => user.username === username);
    if (user != null) {
      return succeedResponse<User>(user);
    } else return failResponse<User>();
  }
  updateTweet(tweet: TTweet) {
    let index = this._searchTweet(tweet.id);
    let updatedTweet: TTweet = tweet;
    if (index >= 0) {
      //update the content only
      updatedTweet = { ...this.tweets[index], content: tweet.content };
      this.tweets.splice(index, 1, updatedTweet);
    } else this.tweets.push(tweet);
    return updatedTweet;
  }
  checkUsernameExisting(username: string) {
    return this.users.some((user) => user.username.trim() === username.trim());
  }
  checkUserLoginSession(
    username: string,
    auth: string,
    expired: number
  ): APIResponse<User> {
    let user = this.users.find((user) => user.username === username);
    if (user != null) {
      //todo check auth
      //todo check expired
      return succeedResponse<User>(user);
    } else return failResponse<User>();
  }
  login(username: string, password: string): APIResponse<User> {
    let authenticPassword = this.auth[username];
    if (authenticPassword == null) return failResponse<User>();
    else if (authenticPassword !== password) return failResponse<User>();
    else {
      let user = this.users.find((user) => user.username === username);
      if (user != null) return succeedResponse<User>(user);
      else return failResponse<User>();
    }
  }
  register(username: string, password: string): APIResponse<User> {
    let newUser: User = {
      username,
      nickname: upperFirst(removePrefix(username)), //auto generated
      avatarUrl: "/avatars/newuser1.jpg",
      coverUrl: "/covers/newuser.jpg",
      auth: {},
      stats: {
        location: "Earth",
        link: "github.com/KyLoc20", //https://github.com/KyLoc20
        whenJoined: "Just now",
        biography: `Welcome to Twitter Shadow, ${upperFirst(
          removePrefix(username)
        )}`,
        followings: 123456,
        followers: 654321,
      },
    };
    this.users.push(newUser);
    this.auth[username] = password;
    this.save();
    return succeedResponse<User>(newUser);
  }
  save() {
    this._synchronize();
    //saving tweets
    this.ls.setItem("tweets", JSON.stringify(this.tweets));
    //saving users
    this.ls.setItem("users", JSON.stringify(this.users));
    //saving auth
    this.ls.setItem("auth", JSON.stringify(this.auth));
  }
  _loadTweets() {
    const parseTweetsWithDate = (strTweets: string): Tweet[] => {
      const objTweets: UnsafeTweet[] = JSON.parse(strTweets);
      return objTweets.map((tweet: UnsafeTweet) => ({
        ...tweet,
        timestamp: new Date(tweet.timestamp),
      }));
    };
    const tweetsFromLocal = this.ls.getItem("tweets");
    let tweets: TTweet[];
    if (tweetsFromLocal == null) tweets = getSomeTweets();
    //todo checker
    //todo deep Date parse
    else tweets = parseTweetsWithDate(tweetsFromLocal);
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
  _loadAuth() {
    const authFromLocal = this.ls.getItem("auth");
    let auth: AuthMap;
    if (authFromLocal == null) auth = getSomeAuth();
    //todo checker
    else auth = JSON.parse(authFromLocal);
    this._auth = auth;
    this.isAuthLoaded = true;
  }
  _synchronize() {
    if (!this.isTweetsLoaded) this._loadTweets();
    if (!this.isUsersLoaded) this._loadUsers();
    if (!this.isAuthLoaded) this._loadAuth();
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
const removePrefix = (str: string) =>
  str.startsWith("@") ? str.slice(1) : str;
const upperFirst = (str: string) =>
  str.length > 1 ? str[0].toUpperCase() + str.slice(1) : str[0].toUpperCase();
