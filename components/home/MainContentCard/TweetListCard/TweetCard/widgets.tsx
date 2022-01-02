import * as React from "react";
import styled from "@emotion/styled";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";
import { defineCustomBox } from "@/components/generic/containers/Box";
import { Tweet } from "@/stores/tweet";
import { default as Icon, TIconSVG } from "@/components/generic/Icon";
import { sxProps } from "@/system/sx";
import { customeDateFormatter } from "@/utils/helper";
export type { TTweetCard };
export { Avatar, Interaction, INTERACTIONS, UserInfo, CUSTOM_ICON_STYLE };
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

function UserInfo({
  nickname,
  username,
  timestamp,
  onClick,
  children,
}: React.PropsWithChildren<{
  nickname: string;
  username: string;
  timestamp: Date;
  onClick?: React.MouseEventHandler;
}>) {
  const Wrapper = genFlexBox({ h: 22 });
  return (
    <Wrapper className="user-info">
      <Nickname>{nickname}</Nickname>
      <Username>{username}</Username>
      <Divider>·</Divider>
      <FormatDate date={timestamp} />
      <MoreButtonWrapper>
        <Icon
          name="more"
          round
          sx={{
            ...CUSTOM_ICON_STYLE,
            color: COLOR_DEFAULT,
            hoverBg: COLOR_BLUE_LIGHT,
            hoverColor: COLOR_BLUE,
          }}
          onClick={onClick}
        />
        {children}
      </MoreButtonWrapper>
    </Wrapper>
  );
}
function FormatDate(props: { date: Date }) {
  const Component = genCustomText(HTMLTag.span, TextPreset.Content_light15, {
    lineHeight: 20,
    textOverflow: "ellipsis",
    overflow: "hidden",
  });
  let date = props.date;
  const dateStr = customeDateFormatter(date);
  return <Component>{dateStr}</Component>;
}
const Nickname = genCustomText(HTMLTag.span, TextPreset.Content_default15, {
  lineHeight: 20,
  fontWeight: 700,
  textOverflow: "ellipsis",
  overflow: "hidden",
});
const Username = genCustomText(HTMLTag.span, TextPreset.Content_light15, {
  ml: "4px",
  lineHeight: 20,
  textOverflow: "ellipsis",
  overflow: "hidden",
});
const Divider = genCustomText(HTMLTag.span, TextPreset.Content_light15, {
  p: "0 4px",
  lineHeight: 20,
  textOverflow: "ellipsis",
  overflow: "hidden",
});

const MoreButtonWrapper = genFlexBox({
  position: "relative",
  minWidth: 38.75,
  flexGrow: "1",
  AI: "center",
  JC: "flex-end",
});
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
