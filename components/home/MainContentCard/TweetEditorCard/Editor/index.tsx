import * as React from "react";
import styled from "@emotion/styled";
import Icon from "@/components/generic/Icon";
import {
  default as Textarea,
  TextareaProps,
} from "@/components/generic/SimpleTextarea";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { CustomButtonType, defineCustomButton } from "@/hooks/Button";
import { defineCustomBox, useCustomBox, useBox } from "@/hooks/Container";
import * as API from "@/api/index";
import {
  WhoCanReply,
  CUSTOM_ICON_STYLE,
  CUSTOM_TEXTAREA_STYLE,
} from "./widgets";
import { TweetStore, Tweet, TweetActions, ActionTypes } from "@/stores/tweet";
const useFlexBox = defineCustomBox();
const useButton36 = defineCustomButton(CustomButtonType.Navigation_primary36);
type EditorProps = {};
const Editor = React.memo(() => {
  console.log("RENDER Editor");
  const { state, dispatch } = React.useContext(TweetStore);
  const [Component] = useCustomBox(
    {
      vertical: true,
    },
    {
      w: "100%",
    }
  );
  const [ControlPanel] = useFlexBox({
    JC: "space-between",
  });
  const [Tools] = useFlexBox({
    mt: "12px",
  });
  const [TweetButton] = useButton36({
    wrapper: { w: 76, mt: "12px", ml: "12px" },
  });
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
      };
      dispatch(doCreateTweet);
      console.log(state);
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
});
export default Editor;
