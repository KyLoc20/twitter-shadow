import * as React from "react";
import styled from "@emotion/styled";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";
import { defineCustomBox } from "@/components/generic/containers/Box";
import { default as Icon, TIconSVG } from "@/components/generic/Icon";
import { sxProps } from "@/system/sx";
import { customeDateFormatter } from "@/utils/helper";
import { useRouter } from "next/router";
export default function UserInfo(props: React.PropsWithChildren<TUserInfo>) {
  const { nickname, username, timestamp } = props;
  const router = useRouter();
  const Wrapper = genFlexBox({ h: 22 });
  const handleGotoUserTimelinePage = () => {
    router.push("/[user]", `/${username}`);
  };
  return (
    <Wrapper className="user-info">
      <Nickname onClick={handleGotoUserTimelinePage}>{nickname}</Nickname>
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
          onClick={props.onClickMoreButton}
        />
        {props.children}
      </MoreButtonWrapper>
    </Wrapper>
  );
}
const genFlexBox = defineCustomBox();

type TUserInfo = {
  nickname: string;
  username: string;
  timestamp: Date;
  onClickMoreButton?: React.MouseEventHandler<HTMLElement>;
};

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
const Nickname = genCustomText(
  HTMLTag.span,
  TextPreset.Content_default15,
  {
    lineHeight: 20,
    fontWeight: 700,
    textOverflow: "ellipsis",
    overflow: "hidden",
    cursor: "pointer",
  },
  { hoverUnderlined: true }
);
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
