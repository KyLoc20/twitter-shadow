import { PropsWithChildren, useContext, useRef } from "react";
import styled from "@emotion/styled";
import TweetEditor from "@/components/common/TweetEditor";
import { UserStore } from "@/stores/user";
import {
  TweetStore,
  TweetActions,
  ActionTypes as TweetActionTypes,
  Poster,
} from "@/stores/tweet";
import API from "@/api/index";
export default function TweetEditorCard(
  props: PropsWithChildren<TTweetEditor>
) {
  const { state: userState, dispatch: userDispatch } = useContext(UserStore);
  const { state: tweetState, dispatch: tweetDispatch } = useContext(TweetStore);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleCreateTweet = () => {
    const elTextarea = textareaRef.current;
    if (elTextarea == null || elTextarea.value === "") return;
    const content = elTextarea.value;
    const user: Poster = {
      nickname: userState.nickname,
      username: userState.username,
      avatarUrl: userState.avatarUrl,
    };
    API.Tweet.postCreateTweet({ content, user }).then((tid) => {
      const doCreateTweet: TweetActions = {
        type: TweetActionTypes.Create,
        payload: _genTweetInstance(tid, content, user),
      };
      tweetDispatch(doCreateTweet);
      elTextarea.value = "";
    });
  };
  return (
    <TweetEditor
      ref={textareaRef}
      user={userState}
      submitButtonMetaText="Tweet"
      textareaId="main-tweet-editor-textarea"
      textareaPlaceholder="What's happening?"
      onSubmit={handleCreateTweet}
    />
  );
}
type TTweetEditor = {};
const _genTweetInstance = (
  tid: number,
  content: string,
  user: Poster,
  timestamp: Date = new Date()
) => ({
  id: tid,
  content,
  user,
  timestamp,
  replies: 1,
  likes: 2,
  retweets: 3,
});
