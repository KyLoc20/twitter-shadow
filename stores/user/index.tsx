import React, { useEffect } from "react";
import { User, UserState, Statistics } from "./model";
import { UserActions, ActionTypes } from "./action";
import { mainReducer } from "./reducer";
import { getDefaultState } from "./data.test";
import LocalSessionManager from "@/utils/session";
//todo UserStoreProvider should be separated due to importing LocalSessionManager
export { UserStore, UserStoreProvider, ActionTypes };
export type { User, UserActions, Statistics };

const UserStore = React.createContext<{
  state: UserState;
  dispatch: React.Dispatch<UserActions>;
}>({
  state: getDefaultState(),
  dispatch: () => null,
});

const UserStoreProvider: React.FC = ({ children }) => {
  //todo fetch initialState from API
  const [state, dispatch] = React.useReducer(mainReducer, getDefaultState());
  console.log("RENDER UserStoreProvider", state);
  //WHY React component rendered twice and useEffect not triggered
  useEffect(() => {
    console.log("RENDER UserStoreProvider useEffect", state);
    //sessioned UserState
    const lsm = new LocalSessionManager();
    const session = lsm.session();
    session
      .check()
      .then((user) => {
        const doLogin: UserActions = {
          type: ActionTypes.Login,
          payload: {
            ...user,
          },
        };
        dispatch(doLogin);
      })
      .catch((failedMsg) => {});
  }, []);
  return (
    <UserStore.Provider value={{ state, dispatch }}>
      {children}
    </UserStore.Provider>
  );
};
