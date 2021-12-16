//discarded
export type Tweet = {
  uid: number;
  user: UserInfo;
  content: string;
  timestamp: string;
  replies: number;
  likes: number;
  retweets: number;
  //isPromoted:boolean;
  //action:Object;
};
type UserInfo = {
  username: string;
  nickname: string;
  avatarUrl: string;
};
