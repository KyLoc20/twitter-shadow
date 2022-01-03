import * as React from "react";
import styled from "@emotion/styled";
import { defineCustomBox } from "@/components/generic/containers/Box";
import { Tweet } from "@/stores/tweet";
import { sxProps } from "@/system/sx";
export type { TTweetCard };
export { Avatar, Interaction, INTERACTIONS, CUSTOM_ICON_STYLE };
const genFlexBox = defineCustomBox();
type TTweetCard = {
  share?: number;
} & Tweet;

function Avatar(props: React.PropsWithChildren<{ url: string }>) {
  const Wrapper = genFlexBox({ mr: "12px" });
  //WHY: different highlight color
  const Image = genFlexBox({
    w: 48,
    h: 48,
    borderRadius: "50%",
    bg: `no-repeat url(${props.url})`,
    bgSize: "contain",
  });
  return (
    <Wrapper>
      <Image />
    </Wrapper>
  );
}
const CUSTOM_ICON_STYLE: sxProps = {
  w: 35,
  h: 35,
  m: "-8px",
  transition: "all 0.2s ease",
  cursor: "pointer",
};

const COLOR_PINK = "rgba(249, 24, 128, 1)";
const COLOR_PINK_LIGHT = "rgba(249, 24, 128, 0.1)";
const COLOR_BLUE = "rgba(29, 155, 240, 1)";
const COLOR_BLUE_LIGHT = "rgba(29, 155, 240, 0.1)";
const COLOR_GREEN = "rgba(0, 186, 124, 1)";
const COLOR_GREEN_LIGHT = "rgba(0, 186, 124, 0.1)";
const COLOR_DEFAULT = "rgba(83, 100, 113,1)";
type InteractionProps = {
  name: keyof TTweetCard;
  hoverColor: string;
  hoverBg: string;
};
const Interaction = styled.div`
  display: flex;
  height: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(83, 100, 113);
  transition: all 0.2s ease;
  &:hover {
    color: ${(props: InteractionProps) =>
      props.hoverColor}; //rgba(29, 155, 240, 1)
  }
  &:hover .icon {
    background: ${(props: InteractionProps) => props.hoverBg};
  }
`;
const INTERACTIONS: InteractionProps[] = [
  {
    name: "replies",
    hoverColor: COLOR_BLUE,
    hoverBg: COLOR_BLUE_LIGHT,
  },
  {
    name: "retweets",
    hoverColor: COLOR_GREEN,
    hoverBg: COLOR_GREEN_LIGHT,
  },
  {
    name: "likes",
    hoverColor: COLOR_PINK,
    hoverBg: COLOR_PINK_LIGHT,
  },
  {
    name: "share",
    hoverColor: COLOR_BLUE,
    hoverBg: COLOR_BLUE_LIGHT,
  },
];
