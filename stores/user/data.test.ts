import { User, UserState } from "./model";
export { getTouristUser, getSomeUsers, getDefaultState, getSomeAuth };
const UserTourist: User = {
  nickname: "Tourist",
  username: "@tourist",
  avatarUrl: "/avatars/tourist1.jpg",
  auth: {},
  stats: {},
};
const UserCisco: User = {
  nickname: "Cisco",
  username: "@Cisco",
  avatarUrl: "/avatars/@Cisco.png",
  auth: {},
  stats: {},
};
const UserRssThree: User = {
  nickname: "RSS3🎄🎁",
  username: "@rss3_",
  avatarUrl: "/avatars/@rss3_.jpg",
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
const UserWintonsChurchill: User = {
  nickname: "Wintons Churchill",
  username: "@winstonchurchill",
  avatarUrl: "/avatars/@winstonchurchill.jpeg",
  auth: {},
  stats: {},
};
const AUTH: {
  [username: string]: string;
} = {
  "@elonmusk": "123456",
  "@Cisco": "123456",
  "@rss3_": "123456",
  "@winstonchurchill": "123456",
};
const getTouristUser = () => UserTourist;
const getSomeUsers = () => [
  UserTourist,
  UserElonMusk,
  UserCisco,
  UserRssThree,
  UserWintonsChurchill,
];
const getSomeAuth = () => AUTH;

const getDefaultState = (): UserState => ({
  ...getTouristUser(),
});
