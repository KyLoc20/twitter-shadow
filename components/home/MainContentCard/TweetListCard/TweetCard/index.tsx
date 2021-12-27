import * as React from "react";
import styled from "@emotion/styled";
import Icon from "@/components/generic/Icon";
import { defineCustomBox, useCustomBox, useBox } from "@/hooks/Container";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import Ghost from "@/components/generic/Ghost";
import {
  TTweetCard,
  Component,
  Avatar,
  Interaction,
  INTERACTIONS,
  UserInfo,
  CUSTOM_ICON_STYLE,
} from "./widgets";
import MoreMenu from "./MoreMenu";
import * as API from "@/api/index";
import { TweetStore, TweetActions, ActionTypes } from "@/stores/tweet";
const useFlexBox = defineCustomBox();
export default function TweetCard(props: React.PropsWithChildren<TTweetCard>) {
  const { state, dispatch } = React.useContext(TweetStore);
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
  const handleDeleteTweet = (tid: number) => {
    API.deleteTweet(tid).then((tid) => {
      setMoreMenuOpen(false);
      console.log("finished postDeleteTweet", tid);
      const doDeleteTweet: TweetActions = {
        type: ActionTypes.Delete,
        payload: {
          id: tid,
        },
      };
      dispatch(doDeleteTweet);
    });
  };
  const [isMoreMenuOpen, setMoreMenuOpen] = React.useState(false);
  console.log("RENDER TweetCard", props.id, isMoreMenuOpen);
  return (
    <Component>
      <Content>
        <Avatar url={user.avatarUrl} />
        <MainWrapper>
          <UserInfo
            nickname={user.nickname}
            username={user.username}
            timestamp={props.timestamp}
            onClick={(e: React.MouseEvent) => {
              console.log("onClick");
              setMoreMenuOpen(true);
            }}
          >
            <Ghost
              active={isMoreMenuOpen}
              onReadyClose={() => {
                setMoreMenuOpen(false);
              }}
              width="300px"
              right="0"
              top="0"
            >
              <MoreMenu
                onSelect={(value: string) => {
                  console.log("onSelect", value);
                  switch (value) {
                    case "delete":
                      handleDeleteTweet(props.id);
                      break;
                    default:
                      break;
                  }
                }}
              />
            </Ghost>
          </UserInfo>

          <TweetContent>{props.content}</TweetContent>
          <InteractionWrapper>{itemsInteraction}</InteractionWrapper>
        </MainWrapper>
      </Content>
    </Component>
  );
}
