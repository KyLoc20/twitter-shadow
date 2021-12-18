import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { defineCustomBox, useCustomBox, useBox } from "@/hooks/Container";
import Icon from "@/components/generic/Icon";
import {
  default as Textarea,
  TextareaProps,
} from "@/components/generic/SimpleTextarea";
import { sxProps } from "@/system/sx";
const useFlexBox = defineCustomBox();
type TweetEditorProps = {
  children?: React.ReactNode;
};
export default function TweetEditorCard(props: TweetEditorProps) {
  const [Content] = useFlexBox({
    p: "8px 0",
  });
  //todo w: "100%" or  flex: "1", make it cover the rest container space
  const [Avatar] = useFlexBox({
    mr: "12px",
  });
  const [AvatarImage] = useFlexBox({
    w: 48,
    h: 48,
    borderRadius: "50%",
    bg: "red",
  });
  return (
    <Component>
      <Content>
        <Avatar>
          <AvatarImage />
        </Avatar>
        <Editor />
      </Content>
    </Component>
  );
}
const Component = styled.section`
  min-height: 145px;
  padding: 0 16px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);
`;
function Editor() {
  const [Component] = useCustomBox(
    {
      vertical: true,
    },
    {
      w: "100%",
    }
  );
  const [WhoCanReplyWrapper] = useCustomBox(
    {
      borderbox: true,
    },
    {
      h: 37,
      AI: "center",
      borderBottom: "1px solid rgb(239, 243, 244)",
    }
  );

  const [WhoCanReply] = useCustomButton(CustomButtonType.Navigation_primary24);
  const [WhoCanReplyText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_primary14,
    {
      ml: "4px",
      pt: "2px",
      lineHeight: 16,
      fontWeight: 700,
    }
  );
  const [ControlPanel] = useFlexBox({
    JC: "space-between",
  });
  const [Tools] = useFlexBox({
    mt: "12px",
  });
  const [TweetButtonWrapper] = useFlexBox({
    w: 76,
    mt: "12px",
    ml: "12px",
  });
  const [TweetButton] = useCustomButton(CustomButtonType.Navigation_primary36);
  const itemsTool = ["media", "gif", "poll", "emoji", "schedule"].map(
    (iconName, index) => (
      <Icon key={index} round name={iconName} sx={CUSTOM_ICON_STYLE} />
    )
  );

  return (
    <Component>
      <Textarea
        id="tweet-input"
        placeholder="What's happening?"
        {...CUSTOM_TEXTAREA_STYLE}
      />
      <WhoCanReplyWrapper>
        <WhoCanReply>
          <Icon name="everyone" />
          <WhoCanReplyText>Everyone can Reply</WhoCanReplyText>
        </WhoCanReply>
      </WhoCanReplyWrapper>
      <ControlPanel>
        <Tools>{itemsTool}</Tools>
        <TweetButtonWrapper>
          <TweetButton>Tweet</TweetButton>
        </TweetButtonWrapper>
      </ControlPanel>
    </Component>
  );
}
const CUSTOM_ICON_STYLE: sxProps = {
  w: 36,
  h: 36,
  transition: "all 0.2s ease",
  color: "rgba(29, 155, 240, 1)",
  cursor: "pointer",
  hoverBg: "rgba(29, 155, 240, 0.1)",
};
const CUSTOM_TEXTAREA_STYLE: Omit<TextareaProps, "id"> = {
  sx: {
    p: "12px 0",
  },
  inputFontSize: "20px",
  inputColor: "#0f1419",
  inputLineHeight: "30px",
  placeholderFontsize: "20px",
  placeholderColor: "#536471",
};
