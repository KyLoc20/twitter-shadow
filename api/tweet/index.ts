import { Tweet, User } from "@/stores/tweet/model";
import LocalStorageManager from "../localstorage";
import { mockAPI } from "../base";
export { getTweetList, postCreateTweet, deleteTweet, postUpdateTweet };
type TTweet = Tweet;
type TNewTweet = Omit<
  TTweet,
  "id" | "timestamp" | "retweets" | "replies" | "likes"
>;
type TUpdateTweet = Omit<
  TTweet,
  "timestamp" | "retweets" | "replies" | "likes"
>;
const getTweetList = mockAPI<() => Tweet[]>(() => {
  const lsm = new LocalStorageManager();
  return lsm.tweets;
});

const postCreateTweet = mockAPI<(tweet: TNewTweet) => number>(
  (tweet: TNewTweet) => {
    const lsm = new LocalStorageManager();
    let id = lsm.availableTid;
    let { content, user } = tweet;
    lsm.addNewTweet(_genTweet(id, content, user));
    lsm.save();
    return id;
  }
);
const deleteTweet = mockAPI<(tid: number) => number>((tid: number) => {
  const lsm = new LocalStorageManager();
  lsm.deleteTweet(tid);
  lsm.save();
  return tid;
});
const postUpdateTweet = mockAPI<(tweet: TUpdateTweet) => number>(
  (tweet: TUpdateTweet) => {
    const lsm = new LocalStorageManager();
    let { id, content, user } = tweet;
    lsm.updateTweet(_genTweet(id, content, user));
    lsm.save();
    return id;
  }
);
const _genTweet = (id: number, content: string, user: User): TTweet => ({
  id,
  content,
  user,
  timestamp: "Just now",
  replies: 0,
  likes: 0,
  retweets: 0,
});
