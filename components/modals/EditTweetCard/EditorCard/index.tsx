import { PropsWithChildren, useContext, useRef } from "react";
import styled from "@emotion/styled";
import { genCustomButton } from "@/components/generic/Button";
import { genCustomBox } from "@/components/generic/containers/Box";
import { IconCross } from "./widgets";
import Icon from "@/components/generic/Icon";
import { sxProps } from "@/system/sx";
import TweetEditor from "@/components/common/TweetEditor";
import {
  UserStore,
  UserActions,
  ActionTypes as UserActionTypes,
} from "@/stores/user";
import {
  TweetStore,
  TweetActions,
  ActionTypes as TweetActionTypes,
  Poster,
} from "@/stores/tweet";
import API from "@/api/index";

export default function ModalTweetEditorCard(
  props: PropsWithChildren<TModalTweetEditorCard>
) {
  const handleShutdown = () => props.onClose();
  //TODO intend to forget
  const handleKeepModalOpen = (e: React.MouseEvent<HTMLElement>) =>
    e.stopPropagation();

  const { state: userState, dispatch: userDispatch } = useContext(UserStore);
  const { state: tweetState, dispatch: tweetDispatch } = useContext(TweetStore);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Component onClick={handleKeepModalOpen}>
      <Content>
        <Header>
          <CloseButton onClick={handleShutdown}>
            <Icon svg={IconCross} round sx={CLOSE_BUTTON_STYLE} />
          </CloseButton>
        </Header>
        <TweetEditor
          ref={textareaRef}
          user={userState}
          submitButtonMetaText="Done"
          textareaId="edit-tweet-textarea"
          textareaDefaultValue={props.writtenContent} //`123\n456\n789\n`
          textareaPlaceholder="What's happening?"
          onSubmit={() => {
            const elTextarea = textareaRef.current;
            if (elTextarea == null || elTextarea.value === "") return;
            const content = elTextarea.value;
            console.log("TweetEditor onSubmit", content);
            switch (props.variant) {
              case "Create":
                const user: Poster = {
                  nickname: userState.nickname,
                  username: userState.username,
                  avatarUrl: userState.avatarUrl,
                };
                API.Tweet.postCreateTweet({ content, user }).then((tid) => {
                  const doCreateTweet: TweetActions = {
                    type: TweetActionTypes.Create,
                    payload: _genTweetInstance(tid, content, user),
                  };
                  tweetDispatch(doCreateTweet);
                  elTextarea.value = "";
                  handleShutdown();
                });
                break;
              case "Update":
                const id = props.writtenTweetId;
                if (id != null) {
                  const user: Poster = {
                    nickname: userState.nickname,
                    username: userState.username,
                    avatarUrl: userState.avatarUrl,
                  };
                  API.Tweet.postUpdateTweet({ id, content, user }).then(
                    (updatedTweet) => {
                      const doUpdate: TweetActions = {
                        type: TweetActionTypes.Update,
                        payload: { ...updatedTweet },
                      };
                      tweetDispatch(doUpdate);
                      elTextarea.value = "";
                      handleShutdown();
                    }
                  );
                }
                break;
              default:
                break;
            }
          }}
        />
      </Content>
    </Component>
  );
}
type TModalTweetEditorCard = {
  variant: "Create" | "Update";
  writtenContent?: string; //for Update
  writtenTweetId?: number; //for Update
  onClose: Function;
};
const Component = genCustomBox(
  {
    borderbox: true,
  },
  {
    minWidth: 600,
    minHeight: 280,
    maxHeight: "90vh",
    mt: "5vh",
    bg: "#fff",
    borderRadius: 16,
  }
);
const Content = genCustomBox({ vertical: true }, { w: "100%", pb: "4px" });
const Header = genCustomBox({}, { h: 53, px: "16px" });
const CloseButton = genCustomBox({}, { w: 56, AI: "center" });
const CLOSE_BUTTON_STYLE: sxProps = {
  w: 36,
  h: 36,
  hoverBg: "rgba(15,20,25,0.1)",
  cursor: "pointer",
  transition: "all ease 0.2s",
};
const _genTweetInstance = (
  tid: number,
  content: string,
  user: Poster,
  timestamp: Date = new Date()
) => ({
  id: tid,
  content,
  user,
  timestamp,
  replies: 1,
  likes: 2,
  retweets: 3,
});
