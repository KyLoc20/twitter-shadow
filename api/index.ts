import { SomeTweets } from "@/stores/tweet/data.test";
import { Tweet } from "@/stores/tweet/model";
import { pick } from "@/utils/helpers";
const INIT_TID = 10;
const INIT_TWEETS = SomeTweets;
function fetchTweetList() {
  return new Promise<Tweet[]>((resolve, reject) => {
    //mock network delay
    setTimeout(() => {
      const ls = window.localStorage;
      const tweets = ls.getItem("tweets");
      let availableTweets: Tweet[];
      if (tweets == null) availableTweets = INIT_TWEETS;
      else availableTweets = JSON.parse(tweets);
      resolve(availableTweets);
    }, 500);
  });
}
type TTweet = Tweet;
type TNewTweet = Omit<
  TTweet,
  "id" | "timestamp" | "retweets" | "replies" | "likes"
>;

class LocalStorageManager {
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
    if (tweetsFromLocal == null) tweets = INIT_TWEETS;
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
function postCreateTweet(tweet: TNewTweet) {
  return new Promise<number>((resolve, reject) => {
    //mock network delay
    setTimeout(() => {
      const lsm = new LocalStorageManager();
      let id = lsm.availableTid;
      let { content, user } = tweet;
      let newTweet: TTweet = {
        id,
        content,
        user,
        timestamp: "Just now",
        replies: 0,
        likes: 0,
        retweets: 0,
      };
      lsm.addNewTweet(newTweet);
      lsm.save();
      resolve(id);
    }, 500);
  });
}
function deleteTweet(tid: number) {
  return new Promise<number>((resolve, reject) => {
    //mock network delay
    setTimeout(() => {
      const lsm = new LocalStorageManager();
      lsm.deleteTweet(tid);
      lsm.save();
      resolve(tid);
    }, 500);
  });
}
function postUpdateTweet(tweet: TNewTweet) {
  return new Promise<number>((resolve, reject) => {
    //mock network delay
    setTimeout(() => {
      const lsm = new LocalStorageManager();
      let id = lsm.availableTid;
      let { content, user } = tweet;
      let newTweet: Tweet = {
        id,
        content,
        user,
        timestamp: "Just now",
        replies: 0,
        likes: 0,
        retweets: 0,
      };
      lsm.updateTweet(newTweet);
      lsm.save();
      resolve(id);
    }, 500);
  });
}
export { fetchTweetList, postCreateTweet, deleteTweet, postUpdateTweet };
