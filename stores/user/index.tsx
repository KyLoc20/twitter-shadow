import React, { useEffect } from "react";
import { User, UserState } from "./model";
import { UserActions, ActionTypes } from "./action";
import { mainReducer } from "./reducer";
import { getDefaultState } from "./data.test";
import LocalSessionManager from "@/utils/session";
//todo UserStoreProvider should be separated due to importing LocalSessionManager
export { UserStore, UserStoreProvider, ActionTypes };
export type { User, UserActions };

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
  useEffect(() => {
    //sessioned UserState
    const lsm = new LocalSessionManager();
    const session = lsm.session();
    console.log("before check", session);
    session
      .check()
      .then((user) => {
        console.log("check passed", user);
        const doLogin: UserActions = {
          type: ActionTypes.Login,
          payload: {
            ...user,
          },
        };
        dispatch(doLogin);
      })
      .catch((msg) => {
        console.log("check failed", msg);
      });
  }, []);
  return (
    <UserStore.Provider value={{ state, dispatch }}>
      {children}
    </UserStore.Provider>
  );
};
