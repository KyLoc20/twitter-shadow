export type { UserState, User, Auth, Statistics };
type User = {
  username: string; //unique
  nickname: string;
  avatarUrl: string;
  coverUrl?: string;
  auth: Auth;
  stats: Statistics;
};
type Auth = {};
type Statistics = {
  location?: string;
  link?: string;
  whenJoined?: string;
  biography?: string;
  followings: number;
  followers: number;
};
type UserState = {
  username: string; //unique
  nickname: string;
  avatarUrl: string;
  auth: Auth;
  stats: Statistics;
};
