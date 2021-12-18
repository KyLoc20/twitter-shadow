import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { defineCustomBox, useCustomBox, useBox } from "@/hooks/Container";
import { Tweet, User } from "@/stores/tweet";
import Icon from "@/components/generic/Icon";
import { sxProps } from "@/system/sx";
const useFlexBox = defineCustomBox();
type TweetCardProps = {
  children?: React.ReactNode;
  share?: number;
} & Tweet;
export default function TweetCard(props: TweetCardProps) {
  const [Content] = useFlexBox();
  const [Avatar] = useFlexBox({ mr: "12px" });
  //WHY: different highlight color
  //const [Content] = useCustomBox({},{});
  const [AvatarImage] = useFlexBox({
    w: 48,
    h: 48,
    borderRadius: "50%",
    bg: props.user.avatarUrl,
  });
  const [Main] = useCustomBox({ vertical: true }, { w: "100%" });
  const [TweetContent] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_default15,
    {
      lineHeight: 20,
      display: "inline-block",
      whiteSpace: "pre-wrap",
    }
  );

  const [InteractionWrapper] = useFlexBox({
    pt: "12px",
    maxWidth: 425,
    JC: "space-between",
  });
  const [InteractionInnerText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_light13,
    {
      display: "inline-block",
      color: "currentColor",
      lineHeight: 16,
      px: "16px",
    }
  );
  const user = props.user;

  const itemsInteraction = INTERACTIONS.map((item, index) => (
    <Interaction
      key={index}
      name={item.name}
      hoverColor={item.hoverColor}
      hoverBg={item.hoverBg}
    >
      <Icon round name={item.name} sx={CUSTOM_ICON_STYLE} />
      <InteractionInnerText>{props[item.name]}</InteractionInnerText>
    </Interaction>
  ));
  return (
    <Component>
      <Content>
        <Avatar>
          <AvatarImage />
        </Avatar>
        <Main>
          <UserInfo
            nickname={user.nickname}
            username={user.username}
            timestamp={props.timestamp}
          />
          <TweetContent>{props.content}</TweetContent>
          <InteractionWrapper>{itemsInteraction}</InteractionWrapper>
        </Main>
      </Content>
    </Component>
  );
}
const Component = styled.div`
  padding: 12px 16px 12px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);
`;

function UserInfo({
  nickname,
  username,
  timestamp,
}: React.PropsWithChildren<{
  nickname: string;
  username: string;
  timestamp: string;
}>) {
  const [Wrapper] = useFlexBox();
  const [Nickname] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_default15,
    {
      lineHeight: 20,
      fontWeight: 700,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  const [Username] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_light15,
    {
      ml: "4px",
      lineHeight: 20,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  const [Divider] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_light15,
    {
      p: "0 4px",
      lineHeight: 20,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  const [Timestamp] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_light15,
    {
      lineHeight: 20,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  const [MoreButtonWrapper] = useFlexBox({
    minWidth: 38.75,
    flexGrow: "1",
    AI: "center",
    JC: "flex-end",
  });
  return (
    <Wrapper>
      <Nickname>{nickname}</Nickname>
      <Username>{username}</Username>
      <Divider>·</Divider>
      <Timestamp>{timestamp}</Timestamp>
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
        />
      </MoreButtonWrapper>
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
  name: keyof TweetCardProps;
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
