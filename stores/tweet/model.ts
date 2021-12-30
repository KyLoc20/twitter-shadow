export type User = {
  nickname: string;
  username: string;
  avatarUrl: string;
};
export type Tweet = {
  id: number;
  content: string;
  user: User;
  timestamp: string;
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
