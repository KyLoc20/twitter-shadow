import * as React from "react";
import styled from "@emotion/styled";
import { genCustomBox } from "@/components/generic/containers/Box";
import Icon from "@/components/generic/Icon";
import { sxProps } from "@/system/sx";
import { IconTwitter, IconCross } from "./widgets";
import {
  UserStore,
  UserActions,
  ActionTypes as UserActionTypes,
} from "@/stores/user";
import {
  TweetStore,
  TweetActions,
  ActionTypes as TweetActionTypes,
} from "@/stores/tweet";
import UsernameForm from "./UsernameForm";
import PasswordForm from "./PasswordForm";
import LocalSessionManager, { NEVER_EXPIRE } from "@/utils/session";
import { useRouter } from "next/dist/client/router";
export default function RegisterModalCard(
  props: React.PropsWithChildren<TRegisterModal>
) {
  const handleShutdown = () => props.onClose();
  const [givenUsername, setGivenUsername] = React.useState("");
  const handleKeepModalOpen = (e: React.MouseEvent<HTMLElement>) =>
    e.stopPropagation();
  const { state: userState, dispatch: userDispatch } =
    React.useContext(UserStore);
  const { state: tweetState, dispatch: tweetDispatch } =
    React.useContext(TweetStore);
  const router = useRouter();
  return (
    <Container onClick={handleShutdown}>
      <Component onClick={handleKeepModalOpen}>
        <Content>
          <Header>
            <Placeholder>
              <CloseButton onClick={handleShutdown}>
                <Icon svg={IconCross} round sx={CLOSE_BUTTON_STYLE} />
              </CloseButton>
            </Placeholder>
            <Icon svg={IconTwitter} />
            <Placeholder></Placeholder>
          </Header>
          {givenUsername === "" ? (
            <UsernameForm
              onAfterSubmit={(username) => {
                setGivenUsername(username);
              }}
            />
          ) : (
            <PasswordForm
              username={givenUsername}
              onAfterSubmit={(user) => {
                if (user) {
                  const doLogin: UserActions = {
                    type: UserActionTypes.Login,
                    payload: user,
                  };
                  userDispatch(doLogin);

                  //keep Login locally
                  const lsm = new LocalSessionManager();
                  lsm.update(user.username, "#auth", NEVER_EXPIRE.valueOf());

                  //transfer to the logged-in user's timeline page(/{username})
                  router.replace("/[user]", `/${user.username}`);
                }
                handleShutdown();
              }}
            />
          )}
        </Content>
      </Component>
    </Container>
  );
}
type TRegisterModal = {
  onClose: Function;
};
const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.4);
`;
const CLOSE_BUTTON_STYLE: sxProps = {
  w: 36,
  h: 36,
  hoverBg: "rgba(15,20,25,0.1)",
  cursor: "pointer",
  transition: "all ease 0.2s",
};
const Component = genCustomBox(
  {},
  { w: 600, h: 650, bg: "#fff", borderRadius: 16 }
);
const Content = genCustomBox({ vertical: true }, { w: "100%" });
const Header = genCustomBox({}, { h: 53, px: "16px" });
const CloseButton = genCustomBox();
//TRICK a center position two same size placeholder -> flex-basis: "50%"
const Placeholder = genCustomBox({}, { AI: "center", flexBasis: "50%" });
