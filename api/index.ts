import { SomeTweets } from "@/stores/tweet/data.test";
import { Tweet } from "@/stores/tweet/model";
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
function postNewTweet(content: string) {
  return new Promise<number>((resolve, reject) => {
    //mock network delay
    setTimeout(() => {
      const ls = window.localStorage;
      const tid = ls.getItem("tid");
      let availableTid: number;
      if (tid == null) availableTid = INIT_TID;
      else availableTid = parseInt(tid) + 1;
      ls.setItem("tid", availableTid.toString());
      resolve(availableTid);
    }, 500);
  });
}
export { fetchTweetList, postNewTweet };
