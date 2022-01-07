import { User, UserState } from "./model";
export { getTouristUser, getSomeUsers, getDefaultState, getSomeAuth };
const UserTourist: User = {
  nickname: "Tourist",
  username: "@tourist",
  avatarUrl: "/avatars/tourist1.jpg",
  coverUrl: "/covers/@elonmusk.jfif",
  auth: {},
  stats: {
    location: "Earth",
    link: "github.com/KyLoc20", //https://github.com/KyLoc20
    whenJoined: "Everyday",
    biography: "Welcome to Twitter Shadow, tourist!",
    followings: 123456,
    followers: 654321,
  },
};
//if (props.href) window.open(props.href);
//<Link href="https://nextjs.org/learn/basics/create-nextjs-app">
const UserCisco: User = {
  nickname: "Cisco",
  username: "@Cisco",
  avatarUrl: "/avatars/@Cisco.png",
  coverUrl: "/covers/@Cisco.jfif",
  auth: {},
  stats: {
    location: "Silicon Valley",
    link: "thenetwork.cisco.com", //https://thenetwork.cisco.com/
    whenJoined: "August 2008",
    biography:
      "Official info on Cisco news, events and technology innovation. For help, reach out to @Cisco_Supportor @HeyCisco.",
    followings: 2882,
    followers: 725945,
  },
};
const UserRssThree: User = {
  nickname: "RSS3🎄🎁",
  username: "@rss3_",
  avatarUrl: "/avatars/@rss3_.jpg",
  coverUrl: "/covers/@rss3_.png",
  auth: {},
  stats: {
    link: "rss3.io", //https://rss3.io/
    whenJoined: "April 2021",
    biography: "The feed of Web3. http://revery.so",
    followings: 0,
    followers: 22121,
  },
};
const UserElonMusk: User = {
  nickname: "Elon Musk",
  username: "@elonmusk",
  avatarUrl: "/avatars/@elonmusk.jpg",
  coverUrl: "/covers/@elonmusk.jfif",
  auth: {},
  stats: {
    whenJoined: "June 2009",
    followings: 107,
    followers: 69234473,
  },
};
const UserWintonsChurchill: User = {
  nickname: "Wintons Churchill",
  username: "@winstonchurchill",
  avatarUrl: "/avatars/@winstonchurchill.jpeg",
  auth: {},
  stats: {
    location: "London",
    biography: "Sir Winston Leonard Spencer Churchill.",
    followings: 2,
    followers: 123456789,
  },
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
