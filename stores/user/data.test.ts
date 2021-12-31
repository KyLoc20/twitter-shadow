import { User, UserState } from "./model";
export { getTouristUser, getSomeUsers, getDefaultState, getSomeAuth };
const UserTourist: User = {
  nickname: "Please Log in",
  username: "@tourist",
  avatarUrl: "pink",
  auth: {},
  stats: {},
};
const UserElonMusk: User = {
  nickname: "Elon Musk",
  username: "@elonmusk",
  avatarUrl: "/avatars/@elonmusk.jpg",
  auth: {},
  stats: {},
};
const AUTH: {
  [username: string]: string;
} = {
  "@elonmusk": "123456",
};
const getTouristUser = () => UserTourist;
const getSomeUsers = () => [UserElonMusk];
const getSomeAuth = () => AUTH;

const getDefaultState = (): UserState => ({
  ...getTouristUser(),
});
