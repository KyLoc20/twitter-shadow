import { User, Tweet, Statistics, TweetState } from "./model";
const User1: User = {
  id: 1,
  nickname: "Elon Musk",
  username: "@elonmusk",
  avatarUrl: "red",
};
const User2: User = {
  id: 2,
  nickname: "Jessie Frazelle",
  username: "@jessfraz",
  avatarUrl: "green",
};
const User3: User = {
  id: 3,
  nickname: "Kent Beck",
  username: "@KentBeck",
  avatarUrl: "blue",
};
const User4: User = {
  id: 4,
  nickname: "virushuo",
  username: "@virushuo",
  avatarUrl: "yellow",
};

const Tweet1: Tweet = {
  id: 1,
  content: "Humankind\n煮豆燃豆萁\n豆在釜中泣\n本是同根生\n相煎何太急",
  user: User1,
  timestamp: "Nov 2",
  replies: 1,
  likes: 2,
  retweets: 3,
};
const Tweet2: Tweet = {
  id: 2,
  content: "What’s the coolest Easter egg you’ve ever seen in a website / app?",
  user: User2,
  timestamp: "8h",
  replies: 1,
  likes: 2,
  retweets: 3,
};
const Tweet3: Tweet = {
  id: 3,
  content:
    "If you agree with the conclusion, why would you bother arguing with the argument?",
  user: User3,
  timestamp: "4h",
  replies: 1,
  likes: 2,
  retweets: 3,
};
const Tweet4: Tweet = {
  id: 4,
  content: "太牛逼了，和昨天那个imsg的漏洞是一个办法。",
  user: User4,
  timestamp: "2h",
  replies: 1,
  likes: 2,
  retweets: 3,
};
export const SomeTweets = [Tweet1, Tweet2, Tweet3, Tweet4];
export const initialState: TweetState = {
  tweets: [Tweet1, Tweet2, Tweet3, Tweet4],
  stats: { createNum: 0, deleteNum: 0, updateNum: 0 },
};
export const defaultState = (): TweetState => ({
  tweets: [],
  stats: { createNum: 0, deleteNum: 0, updateNum: 0 },
});
