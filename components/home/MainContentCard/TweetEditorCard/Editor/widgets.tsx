import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { CustomButtonType, defineCustomButton } from "@/hooks/Button";
import {
  genBox,
  genCustomBox,
  defineCustomBox,
} from "@/components/generic/containers/Box";
import Icon from "@/components/generic/Icon";
import { TextareaProps } from "@/components/generic/SimpleTextarea";
import { sxProps } from "@/system/sx";
export { WhoCanReply, CUSTOM_ICON_STYLE, CUSTOM_TEXTAREA_STYLE };

const useButton24 = defineCustomButton(CustomButtonType.Navigation_primary24);
function WhoCanReply() {
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
  const [Button] = useButton24();
  const [Text] = useCustomText(HTMLTag.span, CustomTextType.Content_primary14, {
    ml: "4px",
    pt: "2px",
    lineHeight: 16,
    fontWeight: 700,
  });
  return (
    <Wrapper>
      <Button>
        <Icon name="everyone" />
        <Text>Everyone can Reply</Text>
      </Button>
    </Wrapper>
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
