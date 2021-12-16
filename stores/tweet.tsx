import React from "react";

type Tweet = {
  id: number;
  content: string;
};
type Statistics = {
  createNum: number;
  deleteNum: number;
  updateNum: number;
};
type InitialState = {
  tweets: Tweet[];
  stats: Statistics;
};
const initialState: InitialState = {
  tweets: [],
  stats: { createNum: 0, deleteNum: 0, updateNum: 0 },
};

export enum ActionTypes {
  Create = "CREATE_TWEET",
  Delete = "DELETE_TWEET",
  Update = "UPDATE_TWEET",
}
//generating Actions from ActionPayload
type ActionMap<P extends { [key: string]: any }> = {
  [Key in keyof P]: P[Key] extends undefined
    ? {
        type: Key;
        payload: {};
      }
    : {
        type: Key;
        payload: P[Key];
      };
};
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
type TweetActions = ActionMap<TweetPayload>[keyof ActionMap<TweetPayload>];
const tweetListReducer = (state: Tweet[], action: TweetActions) => {
  switch (action.type) {
    case ActionTypes.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          content: action.payload.content,
        },
      ];
    case ActionTypes.Delete:
      return [...state.filter((tweet) => tweet.id !== action.payload.id)];
    case ActionTypes.Update:
      return [
        ...state.filter((tweet) => tweet.id !== action.payload.id),
        {
          id: action.payload.id,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};
const statsReducer = (state: Statistics, action: TweetActions) => {
  switch (action.type) {
    case ActionTypes.Create:
      return {
        ...state,
        createNum: state.createNum + 1,
      };
    case ActionTypes.Delete:
      return {
        ...state,
        createNum: state.deleteNum + 1,
      };
    case ActionTypes.Update:
      return {
        ...state,
        createNum: state.updateNum + 1,
      };
    default:
      return state;
  }
};
const mainReducer = (
  { tweets, stats }: InitialState,
  action: TweetActions
) => ({
  tweets: tweetListReducer(tweets, action),
  stats: statsReducer(stats, action),
});
const TweetStore = React.createContext<{
  state: InitialState;
  dispatch: React.Dispatch<TweetActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const TweetStoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);
  return (
    <TweetStore.Provider value={{ state, dispatch }}>
      {children}
    </TweetStore.Provider>
  );
};
export { TweetStore, TweetStoreProvider };
