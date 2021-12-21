import * as React from "react";
import styled from "@emotion/styled";
import Icon from "@/components/generic/Icon";
import { defineCustomBox, useCustomBox, useBox } from "@/hooks/Container";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import {
  TweetCardProps,
  Component,
  Avatar,
  Interaction,
  INTERACTIONS,
  UserInfo,
  CUSTOM_ICON_STYLE,
} from "./widgets";
const useFlexBox = defineCustomBox();
export default function TweetCard(
  props: React.PropsWithChildren<TweetCardProps>
) {
  const [Content] = useFlexBox();
  const [MainWrapper] = useCustomBox({ vertical: true }, { w: "100%" });
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
        <Avatar url={user.avatarUrl} />
        <MainWrapper>
          <UserInfo
            nickname={user.nickname}
            username={user.username}
            timestamp={props.timestamp}
          />
          <TweetContent>{props.content}</TweetContent>
          <InteractionWrapper>{itemsInteraction}</InteractionWrapper>
        </MainWrapper>
      </Content>
    </Component>
  );
}
