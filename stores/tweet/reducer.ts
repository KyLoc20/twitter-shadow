import { ActionTypes, TweetActions } from "./action";
import { Tweet, Statistics, TweetState } from "./model";
const tweetListReducer = (state: Tweet[], action: TweetActions): Tweet[] => {
  switch (action.type) {
    case ActionTypes.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          content: action.payload.content,
          user: action.payload.user,
          timestamp: action.payload.timestamp,
          replies: action.payload.replies,
          likes: action.payload.likes,
          retweets: action.payload.retweets,
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
          user: action.payload.user,
          timestamp: action.payload.timestamp,
          replies: action.payload.replies,
          likes: action.payload.likes,
          retweets: action.payload.retweets,
        },
      ];
    case ActionTypes.Reset:
      return [...action.payload.tweets];
    default:
      return state;
  }
};
const statsReducer = (state: Statistics, action: TweetActions): Statistics => {
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
    case ActionTypes.Reset:
      return { ...action.payload.stats };
    default:
      return state;
  }
};
const mainReducer = ({ tweets, stats }: TweetState, action: TweetActions) => ({
  tweets: tweetListReducer(tweets, action),
  stats: statsReducer(stats, action),
});
export { tweetListReducer, statsReducer, mainReducer };
