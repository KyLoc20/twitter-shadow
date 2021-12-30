import { Tweet } from "@/stores/tweet";
import { User } from "@/stores/user";
import { getSomeTweets } from "@/stores/tweet/data.test";
import { getSomeUsers } from "@/stores/user/data.test";
export default class LocalStorageManager {
  ls: Storage;
  _tweets: TTweet[];
  isTweetsLoaded: boolean;
  constructor() {
    this.ls = window.localStorage;
    this.isTweetsLoaded = false;
    this._tweets = [];
  }

  get tweets() {
    this._synchronize();
    return this._tweets;
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
  save() {
    this._synchronize();
    //saving tweets
    this.ls.setItem("tweets", JSON.stringify(this.tweets));
  }
  _loadTweets() {
    const tweetsFromLocal = this.ls.getItem("tweets");
    let tweets: Tweet[];
    if (tweetsFromLocal == null) tweets = getSomeTweets();
    //todo checker
    else tweets = JSON.parse(tweetsFromLocal);
    this._tweets = tweets;
    this.isTweetsLoaded = true;
  }
  _synchronize() {
    if (!this.isTweetsLoaded) this._loadTweets();
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
