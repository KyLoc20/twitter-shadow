import React, { useEffect } from "react";
import { User, UserState } from "./model";
import { UserActions, ActionTypes } from "./action";
import { mainReducer } from "./reducer";
import { getDefaultState } from "./data.test";
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
  }, []);
  return (
    <UserStore.Provider value={{ state, dispatch }}>
      {children}
    </UserStore.Provider>
  );
};
