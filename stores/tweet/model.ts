export type Poster = {
  nickname: string;
  username: string;
  avatarUrl: string;
};

//todo to modify existing type
export type Tweet = {
  id: number;
  content: string;
  user: Poster;
  timestamp: Date;
  replies: number;
  likes: number;
  retweets: number;
};
export type Statistics = {
  createNum: number;
  deleteNum: number;
  updateNum: number;
};
export type TweetState = {
  tweets: Tweet[];
  stats: Statistics;
};
