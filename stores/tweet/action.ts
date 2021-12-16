import { ActionMap } from "../helper";
export enum ActionTypes {
  Create = "CREATE_TWEET",
  Delete = "DELETE_TWEET",
  Update = "UPDATE_TWEET",
}
type TweetPayload = {
  [ActionTypes.Create]: {
    id: number;
    content: string;
  };
  [ActionTypes.Delete]: {
    id: number;
  };
  [ActionTypes.Update]: {
    id: number;
    content: string;
  };
};
// keyof X  -> 1 | 2 | ...
// type V = X[keyof X] -> X[1] | X[2] | ...
export type TweetActions =
  ActionMap<TweetPayload>[keyof ActionMap<TweetPayload>];
