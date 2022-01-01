import { ActionMap } from "../helper";
import { Tweet, User, Statistics } from "./model";
export enum ActionTypes {
  Create = "CREATE_TWEET",
  Delete = "DELETE_TWEET",
  Update = "UPDATE_TWEET",
  Reset = "RESET_TWEET",
}
type TweetPayload = {
  [ActionTypes.Create]: {
    id: number;
    content: string;
    user: User;
    timestamp: Date;
    replies: number;
    likes: number;
    retweets: number;
  };
  [ActionTypes.Delete]: {
    id: number;
  };
  [ActionTypes.Update]: {
    id: number;
    content: string;
    user: User;
    timestamp: Date;
    replies: number;
    likes: number;
    retweets: number;
  };
  [ActionTypes.Reset]: {
    tweets: Tweet[];
    stats: Statistics;
  };
};
// keyof X  -> 1 | 2 | ...
// type V = X[keyof X] -> X[1] | X[2] | ...
export type TweetActions =
  ActionMap<TweetPayload>[keyof ActionMap<TweetPayload>];
