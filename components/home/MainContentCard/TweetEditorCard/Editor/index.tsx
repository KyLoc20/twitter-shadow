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
import {
  WhoCanReply,
  CUSTOM_ICON_STYLE,
  CUSTOM_TEXTAREA_STYLE,
} from "./widgets";
const useFlexBox = defineCustomBox();
const useButton36 = defineCustomButton(CustomButtonType.Navigation_primary36);
export default function Editor() {
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
  return (
    <Component>
      <Textarea
        id="tweet-input"
        placeholder="What's happening?"
        {...CUSTOM_TEXTAREA_STYLE}
      />
      <WhoCanReply />
      <ControlPanel>
        <Tools>{itemsTool}</Tools>
        <TweetButton>Tweet</TweetButton>
      </ControlPanel>
    </Component>
  );
}
