import * as React from "react";
import styled from "@emotion/styled";
import Box, {
  defineCustomBox,
  genCustomBox,
} from "@/components/generic/containers/Box";
import { Tweet } from "@/stores/tweet";
import { sxProps } from "@/system/sx";
export type { TTweetCard };
export { Avatar, Interaction, INTERACTIONS, CUSTOM_ICON_STYLE };
const genFlexBox = defineCustomBox();
type TTweetCard = {
  share?: number;
} & Tweet;
function SimpleAvatar(props: { url: string }) {
  return (
    <div
      style={{
        marginRight: "12px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: `no-repeat url(${props.url})`,
        backgroundSize: "contain",
      }}
    ></div>
  );
}
type TSweetAvatar = {
  url: string;
  m?: string; //margin
  w?: number; //width
  h?: number; //height
};
function SweetAvatar(props: TSweetAvatar) {
  return (
    <div
      style={{
        margin: props.m,
        width: props.w ? `${props.w}px` : "48px",
        height: props.h ? `${props.h}px` : "48px",
        borderRadius: "50%",
        background: `no-repeat url(${props.url})`,
        backgroundSize: "contain",
      }}
    ></div>
  );
}
//require a larger width and height
const LargerAvatarCase = () => (
  <SweetAvatar url="xxx" m="0 12px 0 0" w={64} h={64}></SweetAvatar>
);

const LargerAvatarUsingBoxCase = () => (
  <Box
    m="0 12px 0 0"
    w={64}
    h={64}
    borderRadius={"50%"}
    bg="no-repeat url(xxx)"
    bgSize="contain"
  ></Box>
);

const AvatarUsingCustomBoxCase = () => {
  const Wrapper = genCustomBox({ vertical: true }, {});
  const MyAvatar = genCustomBox(
    { noFlex: true },
    {
      w: 48,
      h: 48,
      p: "2px", //padding
      borderRadius: "50%",
      bg: `no-repeat url(xxx)`,
      bgSize: "contain",
    }
  );
  return (
    <Wrapper>
      <MyAvatar />
      <MyAvatar />
      <MyAvatar />
    </Wrapper>
  );
};

const AvatarUsingDefinedBoxCase = () => {
  const genBlockBox = defineCustomBox({ noFlex: true });
  const Wrapper = genBlockBox();
  const MyAvatar = genBlockBox({
    w: 48,
    h: 48,
    p: "2px", //padding
    borderRadius: "50%",
    bg: `no-repeat url(xxx)`,
    bgSize: "contain",
  });
  return (
    <Wrapper>
      <MyAvatar />
      <MyAvatar />
      <MyAvatar />
    </Wrapper>
  );
};
type TExampleButton = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  //or simpler
  onClickSimple: React.MouseEventHandler<HTMLElement>;
};
function ExampleButton(props: TExampleButton) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick(e);
  };
  const handleClickSimpler = (e: React.MouseEvent<HTMLElement>) => {
    props.onClickSimple(e);
  };
  return (
    <>
      <button onClick={handleClick}></button>
      <button onClick={handleClickSimpler}></button>
    </>
  );
}

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
