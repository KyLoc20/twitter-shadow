import * as React from "react";
import styled from "@emotion/styled";
import Icon from "@/components/generic/Icon";
import { useModal } from "@/hooks/Modal";
import Ghost from "@/components/generic/Ghost";
import SignIn from "@/components/modals/SignInCard";
import Register from "@/components/modals/RegisterCard";
import { UserStore, ActionTypes, UserActions } from "@/stores/user";
import {
  defineCustomText,
  genCustomText,
  HTMLTag,
  TextPreset,
} from "@/components/generic/Text";
import { genCustomBox } from "@/components/generic/containers/Box";
import LocalSessionManager from "@/utils/session";
import UserMenu from "./UserMenu";
import { useRouter } from "next/router";
export default function UserInfoCard(
  props: React.PropsWithChildren<UserInfoCardProps>
) {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [showSignIn, hideSignIn, SignInModal] = useModal(
    "signin-modal-container"
  );
  const [showRegister, hideRegister, RegisterModal] = useModal(
    "register-modal-container"
  );
  const { state, dispatch } = React.useContext(UserStore);
  const router = useRouter();
  const handleOpenSigninModal = () => {
    //todo mobile
    let scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    //to fill the space of the missing scrollbar
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    showSignIn();
  };
  const handleOpenRegisterModal = () => {
    //todo mobile
    let scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    //to fill the space of the missing scrollbar
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    showRegister();
  };

  const handleLogout = () => {
    const lsm = new LocalSessionManager();
    lsm.flush();
    dispatch({ type: ActionTypes.Logout, payload: {} });
    router.push("/home");
  };
  const Avatar = genCustomBox(
    {
      noFlex: true,
      wrap: false,
    },
    {
      w: 40,
      h: 40,
      borderRadius: "50%",
      bg: `url(${state.avatarUrl})`,
      bgSize: "contain",
    }
  );
  return (
    <Component>
      <Ghost
        active={isMenuOpen}
        onReadyClose={() => {
          setMenuOpen(false);
        }}
        width="300px"
        bottom="86px"
        left="calc(50% - 150px)"
      >
        <UserMenu
          username={state.username}
          onSelect={(value) => {
            switch (value) {
              case "signin":
                handleOpenSigninModal();
                break;
              case "logout":
                handleLogout();
                break;
              case "register":
                handleOpenRegisterModal();
                break;
              default:
                break;
            }
            setMenuOpen(false);
          }}
        />
      </Ghost>
      <Content
        className="content"
        onMouseDown={() => {
          setMenuOpen(true);
        }}
      >
        <Avatar />
        <About>
          <Nickname>
            {state.username === "@tourist" ? "Please Log in" : state.nickname}
          </Nickname>
          <Username>{state.username}</Username>
        </About>
        <Icon name="more" />
      </Content>
      <SignInModal>
        <SignIn
          onClose={() => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0";
            hideSignIn();
          }}
        />
      </SignInModal>
      <RegisterModal>
        <Register
          onClose={() => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0";
            hideRegister();
          }}
        />
      </RegisterModal>
    </Component>
  );
}
type UserInfoCardProps = {};
const Component = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 64px;
  margin: 12px 0;

  .content:hover {
    background: rgba(15, 20, 25, 0.1);
  }
`;
const Content = genCustomBox(
  {
    borderbox: true,
  },
  {
    w: "100%",
    p: "12px",
    AI: "center",
    borderRadius: 9999,
    cursor: "pointer",
    transition: "all 0.2s ease",
    overflow: "hidden",
  }
);

/**
 *  trick how to deal with text overflow
 *  flex:1
 *  overflow: "hidden",
 *  textOverflow: "ellipsis",
 *  whiteSpace: "nowrap",
 */
const About = genCustomBox(
  {
    vertical: true,
  },
  {
    overflow: "hidden",
    h: 40,
    m: "0 12px",
    flex: "1",
  }
);
const Nickname = genCustomText(HTMLTag.span, TextPreset.Content_default15, {
  lineHeight: 20,
  fontWeight: 700,
  textOverflow: "ellipsis",
  overflow: "hidden",
});
const Username = genCustomText(HTMLTag.span, TextPreset.Content_light15, {
  lineHeight: 20,
  textOverflow: "ellipsis",
  overflow: "hidden",
});
