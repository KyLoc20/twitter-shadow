export type { UserState, User, Auth, Statistics };
type User = {
  username: string; //unique
  nickname: string;
  avatarUrl: string;
  auth: Auth;
  stats: Statistics;
};
type Auth = {};
type Statistics = {};
type UserState = {
  username: string; //unique
  nickname: string;
  avatarUrl: string;
  auth: Auth;
  stats: Statistics;
};
