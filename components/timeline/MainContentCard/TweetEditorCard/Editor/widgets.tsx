import * as React from "react";
import styled from "@emotion/styled";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import { genCustomBox } from "@/components/generic/containers/Box";
import Icon from "@/components/generic/Icon";
import { TextareaProps } from "@/components/generic/SimpleTextarea";
import { sxProps } from "@/system/sx";
export { WhoCanReply, CUSTOM_ICON_STYLE, CUSTOM_TEXTAREA_STYLE };

function WhoCanReply() {
  return (
    <Wrapper>
      <Button>
        <Icon name="everyone" />
        <Text>Everyone can Reply</Text>
      </Button>
    </Wrapper>
  );
}
const genButton24 = defineCustomButton(ButtonPreset.Navigation_primary24);
const Wrapper = genCustomBox(
  {
    borderbox: true,
  },
  {
    h: 37,
    AI: "center",
    borderBottom: "1px solid rgb(239, 243, 244)",
  }
);
const Button = genButton24();
const Text = genCustomText(HTMLTag.span, TextPreset.Content_primary14, {
  ml: "4px",
  pt: "2px",
  lineHeight: 16,
  fontWeight: 700,
});
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
