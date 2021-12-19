import React from "react";
import { TweetState, Tweet, User, Statistics } from "./model";
import { TweetActions } from "./action";
import { mainReducer } from "./reducer";
import { initialState } from "./data.test";
const TweetStore = React.createContext<{
  state: TweetState;
  dispatch: React.Dispatch<TweetActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const TweetStoreProvider: React.FC = ({ children }) => {
  //todo fetch initialState from API
  const [state, dispatch] = React.useReducer(mainReducer, initialState);
  return (
    <TweetStore.Provider value={{ state, dispatch }}>
      {children}
    </TweetStore.Provider>
  );
};
export { TweetStore, TweetStoreProvider };
export type { Tweet, User, Statistics };
