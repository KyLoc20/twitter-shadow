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
import * as API from "@/api/index";
import {
  WhoCanReply,
  CUSTOM_ICON_STYLE,
  CUSTOM_TEXTAREA_STYLE,
} from "./widgets";
import { TweetStore, Tweet, TweetActions, ActionTypes } from "@/stores/tweet";

type EditorProps = {};

function Editor(props: React.PropsWithChildren<EditorProps>) {
  console.log("RENDER Editor");
  const { state, dispatch } = React.useContext(TweetStore);

  const itemsTool = ["media", "gif", "poll", "emoji", "schedule"].map(
    (iconName, index) => (
      <Icon key={index} round name={iconName} sx={CUSTOM_ICON_STYLE} />
    )
  );
  const contentRef = React.useRef<string>("");
  const handleNewTweet = (e: React.MouseEvent) => {
    //1. check tweet content
    const content = contentRef.current;
    if (content === "") return;
    const user = {
      id: 0,
      nickname: "Me",
      username: "@crassus",
      avatarUrl: "pink",
    };
    //2. post to API and get unique tweet id
    API.postCreateTweet({ content, user }).then((tid) => {
      console.log("finished postCreateTweet", tid);
      //3.dispatch to store
      const doCreateTweet: TweetActions = {
        type: ActionTypes.Create,
        payload: {
          id: tid,
          content,
          user: {
            nickname: "Me",
            username: "@crassus",
            avatarUrl: "pink",
          },
          timestamp: "Just now",
          replies: 1,
          likes: 2,
          retweets: 3,
        },
      };
      dispatch(doCreateTweet);
    });
  };
  return (
    <Component>
      <Textarea
        id="tweet-input"
        ref={contentRef}
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
