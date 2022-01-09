import * as React from "react";
import styled from "@emotion/styled";
import Icon from "@/components/generic/Icon";
import {
  genCustomBox,
  defineCustomBox,
} from "@/components/generic/containers/Box";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";
import Ghost from "@/components/generic/Ghost";
import {
  TTweetCard,
  Avatar,
  Interaction,
  INTERACTIONS,
  CUSTOM_ICON_STYLE,
} from "./widgets";
import UserInfo from "./UserInfo";
import MoreMenu from "./MoreMenu";
import API from "@/api/index";
import { TweetStore, TweetActions, ActionTypes } from "@/stores/tweet";
import { UserStore } from "@/stores/user";
import { underConstruction } from "@/utils/helper";
import { useModal } from "@/hooks/Modal";
import EditTweetCard from "@/components/modals/EditTweetCard";
export default function TweetCard(props: React.PropsWithChildren<TTweetCard>) {
  const { state: userState, dispatch: userDispatch } =
    React.useContext(UserStore);
  const { state: tweetState, dispatch: tweetDispatch } =
    React.useContext(TweetStore);
  const poster = props.user;
  const itemsInteraction = INTERACTIONS.map((item, index) => (
    <Interaction
      key={index}
      name={item.name}
      hoverColor={item.hoverColor}
      hoverBg={item.hoverBg}
      onClick={() => underConstruction()}
    >
      <Icon round name={item.name} sx={CUSTOM_ICON_STYLE} />
      <InteractionInnerText>{props[item.name]}</InteractionInnerText>
    </Interaction>
  ));
  const handleDeleteTweet = (tid: number) => {
    API.Tweet.deleteTweet(tid).then((tid) => {
      // setMoreMenuOpen(false);
      const doDeleteTweet: TweetActions = {
        type: ActionTypes.Delete,
        payload: {
          id: tid,
        },
      };
      tweetDispatch(doDeleteTweet);
    });
  };
  const [isMoreMenuOpen, setMoreMenuOpen] = React.useState(false);

  const [showEditTweet, hideEditTweet, EditTweetModal] = useModal(
    "edit-tweet-modal-container"
  );
  const handleOpenEditTweetModal = () => {
    let scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    showEditTweet();
  };
  const handleCloseEditTweetModal = () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0";
    hideEditTweet();
  };
  return (
    <Component>
      <Content>
        <Avatar url={poster.avatarUrl} />
        <MainWrapper>
          <UserInfo
            nickname={poster.nickname}
            username={poster.username}
            timestamp={props.timestamp}
            onClickMoreButton={() => {
              setMoreMenuOpen(true);
            }}
          >
            <Ghost
              active={isMoreMenuOpen}
              onOverlayTouched={() => {
                setMoreMenuOpen(false);
              }}
              width="300px"
              right="0"
              top="0"
            >
              <MoreMenu
                username={userState.username}
                ownername={poster.username}
                onSelect={(value: string) => {
                  switch (value) {
                    case "delete":
                      handleDeleteTweet(props.id);
                      break;
                    case "update":
                      handleOpenEditTweetModal();
                      break;
                    case "pin":
                      underConstruction();
                      break;
                    default:
                      break;
                  }
                  setMoreMenuOpen(false);
                }}
              />
            </Ghost>
          </UserInfo>

          <TweetContent>{props.content}</TweetContent>
          <InteractionWrapper>{itemsInteraction}</InteractionWrapper>
        </MainWrapper>
      </Content>
      <EditTweetModal>
        <EditTweetCard onClose={handleCloseEditTweetModal} />
      </EditTweetModal>
    </Component>
  );
}
const Component = styled.div`
  position: relative;
  padding: 12px 16px 12px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);
`;
const genFlexBox = defineCustomBox();
const Content = genFlexBox();
const MainWrapper = genCustomBox({ vertical: true }, { w: "100%" });
const InteractionWrapper = genFlexBox({
  pt: "12px",
  maxWidth: 425,
  JC: "space-between",
});
const TweetContent = genCustomText(HTMLTag.span, TextPreset.Content_default15, {
  lineHeight: 20,
  display: "inline-block",
  whiteSpace: "pre-wrap",
});

const InteractionInnerText = genCustomText(
  HTMLTag.span,
  TextPreset.Content_light13,
  {
    display: "inline-block",
    color: "currentColor",
    lineHeight: 16,
    px: "16px",
  }
);
