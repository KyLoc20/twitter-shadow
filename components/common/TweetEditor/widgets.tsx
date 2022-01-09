import { PropsWithChildren, useContext } from "react";
import styled from "@emotion/styled";
import {
  genCustomBox,
  defineCustomBox,
} from "@/components/generic/containers/Box";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";
import { underConstruction } from "@/utils/helper";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import Icon from "@/components/generic/Icon";
import { sxProps } from "@/system/sx";
export { Avatar, Tools, WhoCanReply };

function Avatar({ url }: TAvatar) {
  const Component = genFlexBox({
    mr: "12px",
    w: 48,
    h: 48,
    borderRadius: "50%",
    bg: `url(${url})`,
    bgSize: "contain",
  });
  return <Component />;
}
type TAvatar = {
  url: string;
};

function Tools() {
  const itemsTool = ["media", "gif", "poll", "emoji", "schedule"].map(
    (iconName, index) => (
      <Icon
        key={index}
        round
        name={iconName}
        sx={CUSTOM_ICON_STYLE}
        onClick={() => {
          underConstruction();
        }}
      />
    )
  );
  const Wrapper = genFlexBox({
    mt: "12px",
  });
  return <Wrapper>{itemsTool}</Wrapper>;
}

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
  const Button = genButton24();
  const Text = genCustomText(HTMLTag.span, TextPreset.Content_primary14, {
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
const genFlexBox = defineCustomBox();
const genButton24 = defineCustomButton(ButtonPreset.Navigation_primary24);
const CUSTOM_ICON_STYLE: sxProps = {
  w: 36,
  h: 36,
  transition: "all 0.2s ease",
  color: "rgba(29, 155, 240, 1)",
  cursor: "pointer",
  hoverBg: "rgba(29, 155, 240, 0.1)",
};
