import { ActionTypes, UserActions } from "./action";
import { User, UserState } from "./model";
import { getTouristUser } from "./data.test";
export { mainReducer };
const mainReducer = (state: UserState, action: UserActions): UserState =>
  userReducer(state, action);

const userReducer = (state: UserState, action: UserActions): UserState => {
  //TRAP use action.payload not state to update!!!
  switch (action.type) {
    case ActionTypes.Login:
      return { ...action.payload };
    case ActionTypes.Logout:
      return getTouristUser();
    default:
      return state;
  }
};
