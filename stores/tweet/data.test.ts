import { User, Tweet, Statistics, TweetState } from "./model";
export { getSomeTweets, getDefaultState };
//Doc: Date(year,month,day) × Date(year,monthIndex,day) √
const genDate = (year: number, month: number, day?: number) =>
  new Date(year, month - 1, day);
const UserTourist: User = {
  nickname: "Tourist",
  username: "@tourist",
  avatarUrl: "/avatars/tourist1.jpg",
};
const TweetTourist1: Tweet = {
  id: 1,
  content: "Hi there👋",
  user: UserTourist,
  timestamp: genDate(2222, 1, 1),
  replies: 1,
  likes: 2,
  retweets: 3,
};

const UserWintonsChurchill: User = {
  nickname: "Wintons Churchill",
  username: "@winstonchurchill",
  avatarUrl: "/avatars/@winstonchurchill.jpeg",
};
const TweetWintonsChurchill1: Tweet = {
  id: 2,
  content: "I have nothing to offer but blood, toil, tears and sweat.",
  user: UserWintonsChurchill,
  timestamp: genDate(1940, 5, 13),
  replies: 1,
  likes: 2,
  retweets: 3,
};

const UserElonMusk: User = {
  nickname: "Elon Musk",
  username: "@elonmusk",
  avatarUrl: "/avatars/@elonmusk.jpg",
};
const TweetElonMusk1: Tweet = {
  id: 3,
  content: "Humankind\n煮豆燃豆萁\n豆在釜中泣\n本是同根生\n相煎何太急",
  user: UserElonMusk,
  timestamp: genDate(2021, 11, 2),
  replies: 1,
  likes: 2,
  retweets: 3,
};

const UserCisco: User = {
  nickname: "Cisco",
  username: "@Cisco",
  avatarUrl: "/avatars/@Cisco.png",
};
const TweetCisco1: Tweet = {
  id: 4,
  content:
    "We believe in the power of technology and its ability to positively impact our society. Read more about how our collaborative efforts in Lebanon helped agencies and individuals after a #humanitarian crisis.",
  user: UserCisco,
  timestamp: genDate(2021, 12, 16),
  replies: 1,
  likes: 2,
  retweets: 3,
};

const UserRssThree: User = {
  nickname: "RSS3🎄🎁",
  username: "@rss3_",
  avatarUrl: "/avatars/@rss3_.jpg",
};
const TweetrRssThree1: Tweet = {
  id: 5,
  content:
    "You better watch out\nYou better not cry\nYou better not pout\nI'm telling you why\n  RSS3 will send out $PASS form now\n\nWe're making a list\nWe're checking it twice\nWe're gonna find out who's naughty or nice\nGet your testnet RNS on revery.so once you have your $PASS",
  user: UserRssThree,
  timestamp: genDate(2021, 12, 25),
  replies: 1,
  likes: 2,
  retweets: 3,
};
const TweetrRssThree2: Tweet = {
  id: 6,
  content: "墙角数枝梅\n凌寒独自开\n遥知不是雪\n为有暗香来",
  user: UserRssThree,
  timestamp: genDate(2021, 11, 3),
  replies: 1,
  likes: 2,
  retweets: 3,
};

const getSomeTweets = () => [
  TweetTourist1,
  TweetElonMusk1,
  TweetCisco1,
  TweetrRssThree1,
  TweetrRssThree2,
  TweetWintonsChurchill1,
];
const getDefaultState = (): TweetState => ({
  tweets: [],
  stats: { createNum: 0, deleteNum: 0, updateNum: 0 },
});
