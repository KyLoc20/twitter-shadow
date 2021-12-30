import { ActionTypes, UserActions } from "./action";
import { User, UserState } from "./model";
import { getTouristUser } from "./data.test";
export { mainReducer };
const mainReducer = (state: UserState, action: UserActions): UserState =>
  userReducer(state, action);

const userReducer = (state: User, action: UserActions): User => {
  switch (action.type) {
    case ActionTypes.Login:
      return { ...state };
    case ActionTypes.Logout:
      return getTouristUser();
    default:
      return state;
  }
};
