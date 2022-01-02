import { ActionMap } from "../helper";
import { User } from "./model";
export enum ActionTypes {
  Login = "LOG_IN",
  Logout = "LOG_OUT",
}
export type { UserActions };
type UserPayload = {
  [ActionTypes.Login]: {
    [key in keyof User]: User[key];
  };
  [ActionTypes.Logout]: {};
};
// keyof X  -> 1 | 2 | ...
// type V = X[keyof X] -> X[1] | X[2] | ...
type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];
