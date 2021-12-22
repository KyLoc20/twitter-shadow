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
}
function postNewTweet(tweet: TNewTweet) {
  return new Promise<number>((resolve, reject) => {
    //mock network delay
    setTimeout(() => {
      const lsm = new LocalStorageManager();
      let id = lsm.availableTid;
      let { content, user } = tweet;
      let timestamp = "Just now";
      let replies = 0;
      let likes = 0;
      let retweets = 0;
      lsm.addNewTweet({
        id,
        content,
        user,
        timestamp,
        replies,
        likes,
        retweets,
      });
      lsm.save();
      resolve(id);
    }, 500);
  });
}
export { fetchTweetList, postNewTweet };
