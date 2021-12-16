import { ActionTypes, TweetActions } from "./action";
import { Tweet, Statistics, TweetState } from "./type";
const tweetListReducer = (state: Tweet[], action: TweetActions): Tweet[] => {
  switch (action.type) {
    case ActionTypes.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          content: action.payload.content,
          user: {
            id: 0,
            nickname: "Me",
            username: "@crassus",
            avatarUrl: "pink",
          },
          timestamp: "Just now",
          replies: 1,
          likes: 2,
          retweets: 3,
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
          user: {
            id: 0,
            nickname: "Me",
            username: "@crassus",
            avatarUrl: "pink",
          },
          timestamp: "Just now",
          replies: 1,
          likes: 2,
          retweets: 3,
        },
      ];
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
    default:
      return state;
  }
};
const mainReducer = ({ tweets, stats }: TweetState, action: TweetActions) => ({
  tweets: tweetListReducer(tweets, action),
  stats: statsReducer(stats, action),
});
export { tweetListReducer, statsReducer, mainReducer };
