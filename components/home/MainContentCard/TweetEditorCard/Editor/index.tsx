import * as React from "react";
import styled from "@emotion/styled";
import Icon from "@/components/generic/Icon";
import {
  default as Textarea,
  TextareaProps,
} from "@/components/generic/SimpleTextarea";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import {
  genCustomBox,
  defineCustomBox,
} from "@/components/generic/containers/Box";
import API from "@/api/index";
import {
  WhoCanReply,
  CUSTOM_ICON_STYLE,
  CUSTOM_TEXTAREA_STYLE,
} from "./widgets";
import {
  UserStore,
  UserActions,
  ActionTypes as UserActionTypes,
} from "@/stores/user";
import {
  TweetStore,
  TweetActions,
  ActionTypes as TweetActionTypes,
} from "@/stores/tweet";
type EditorProps = {};

function Editor(props: React.PropsWithChildren<EditorProps>) {
  const { state: userState, dispatch: userDispatch } =
    React.useContext(UserStore);
  const { state: tweetState, dispatch: tweetDispatch } =
    React.useContext(TweetStore);
  const itemsTool = ["media", "gif", "poll", "emoji", "schedule"].map(
    (iconName, index) => (
      <Icon key={index} round name={iconName} sx={CUSTOM_ICON_STYLE} />
    )
  );
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const handleNewTweet = (e: React.MouseEvent) => {
    //1. check tweet content
    const elTextarea = textareaRef.current;
    if (elTextarea == null || elTextarea.value === "") return;
    const content = elTextarea.value;
    const user = {
      nickname: userState.nickname,
      username: userState.username,
      avatarUrl: userState.avatarUrl,
    };
    //2. post to API and get unique tweet id
    API.Tweet.postCreateTweet({ content, user }).then((tid) => {
      //3.dispatch to store
      const doCreateTweet: TweetActions = {
        type: TweetActionTypes.Create,
        payload: {
          id: tid,
          content,
          user,
          timestamp: new Date(),
          replies: 1,
          likes: 2,
          retweets: 3,
        },
      };
      tweetDispatch(doCreateTweet);
      elTextarea.value = "";
    });
  };
  return (
    <Component>
      <Textarea
        id="tweet-input"
        ref={textareaRef}
        placeholder="What's happening?"
        {...CUSTOM_TEXTAREA_STYLE}
      />
      <WhoCanReply />
      <ControlPanel>
        <Tools>{itemsTool}</Tools>
        <TweetButton onClick={handleNewTweet}>Tweet</TweetButton>
      </ControlPanel>
    </Component>
  );
}
const Component = genCustomBox(
  {
    vertical: true,
  },
  {
    w: "100%",
  }
);
const genFlexBox = defineCustomBox();
const ControlPanel = genFlexBox({
  JC: "space-between",
});
const Tools = genFlexBox({
  mt: "12px",
});
const genButton36 = defineCustomButton(ButtonPreset.Navigation_primary36);
const TweetButton = genButton36({
  wrapper: { w: 76, mt: "12px", ml: "12px" },
});

export default React.memo(Editor);
