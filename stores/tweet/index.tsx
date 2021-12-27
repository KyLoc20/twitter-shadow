import React, { useEffect } from "react";
import { TweetState, Tweet, User, Statistics } from "./model";
import { TweetActions, ActionTypes } from "./action";
import { mainReducer } from "./reducer";
import { defaultState } from "./data.test";
import { fetchTweetList } from "@/api/index";
export { TweetStore, TweetStoreProvider, ActionTypes };
export type { Tweet, User, Statistics, TweetActions };

const TweetStore = React.createContext<{
  state: TweetState;
  dispatch: React.Dispatch<TweetActions>;
}>({
  state: defaultState(),
  dispatch: () => null,
});

const TweetStoreProvider: React.FC = ({ children }) => {
  //todo fetch initialState from API
  const [state, dispatch] = React.useReducer(mainReducer, defaultState());
  useEffect(() => {
    fetchTweetList().then((res) => {
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
