import React, { useEffect } from "react";
import { TweetState, Tweet, Poster, Statistics } from "./model";
import { TweetActions, ActionTypes } from "./action";
import { mainReducer } from "./reducer";
import { getDefaultState } from "./data.test";
import API from "@/api/index";
export { TweetStore, TweetStoreProvider, ActionTypes };
export type { Tweet, Poster, Statistics, TweetActions };

const TweetStore = React.createContext<{
  state: TweetState;
  dispatch: React.Dispatch<TweetActions>;
}>({
  state: getDefaultState(),
  dispatch: () => null,
});

const TweetStoreProvider: React.FC = ({ children }) => {
  //todo fetch initialState from API
  const [state, dispatch] = React.useReducer(mainReducer, getDefaultState());
  useEffect(() => {
    API.Tweet.getTweetList().then((res) => {
      const doReset: TweetActions = {
        type: ActionTypes.Reset,
        payload: {
          tweets: res,
          stats: state.stats,
        },
      };
      dispatch(doReset);
    });
  }, []);
  return (
    <TweetStore.Provider value={{ state, dispatch }}>
      {children}
    </TweetStore.Provider>
  );
};
