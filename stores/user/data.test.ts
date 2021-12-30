import { User, UserState } from "./model";
export { getTouristUser, getSomeUsers, getDefaultState };
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
const getTouristUser = () => UserTourist;
const getSomeUsers = () => [UserElonMusk];
const getDefaultState = (): UserState => ({
  ...getTouristUser(),
});
