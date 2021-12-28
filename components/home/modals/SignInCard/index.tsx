import * as React from "react";
import styled from "@emotion/styled";
import { genCustomBox } from "@/components/generic/containers/Box";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import Icon from "@/components/generic/Icon";
export default function SignInModalCard(
  props: React.PropsWithChildren<TSignInModal>
) {
  const handleShutdown = () => props.onClose();
  return (
    <Container onClick={handleShutdown}>
      <SignIn onClose={handleShutdown} />
    </Container>
  );
}
type TSignInModal = {
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
type TSignIn = {
  onClose: Function;
};
function SignIn(props: TSignIn) {
  const handleKeepModalOpen = (e: React.MouseEvent<HTMLElement>) =>
    e.stopPropagation();
  const handleShutdown = () => props.onClose();
  const Component = genCustomBox(
    {},
    { w: 600, h: 650, bg: "#fff", borderRadius: 16 }
  );
  const Content = genCustomBox({ vertical: true }, { w: "100%", pb: "48px" });
  const Header = genCustomBox({}, { h: 53, px: "16px" });
  const CloseButton = genCustomBox();
  //TRICK a center position two same size placeholder -> flex-basis: "50%"
  const Placeholder = genCustomBox({}, { AI: "center", flexBasis: "50%" });

  return (
    <Component onClick={handleKeepModalOpen}>
      <Content>
        <Header>
          <Placeholder>
            <CloseButton onClick={handleShutdown}>
              <Icon
                svg={IconCross}
                round
                sx={{
                  w: 36,
                  h: 36,
                  hoverBg: "rgba(15,20,25,0.1)",
                  cursor: "pointer",
                  transition: "all ease 0.2s",
                }}
              />
            </CloseButton>
          </Placeholder>
          <Icon svg={IconTwitter} />
          <Placeholder></Placeholder>
        </Header>
        <SignInForm />
      </Content>
    </Component>
  );
}
function SignInForm() {
  const Component = genCustomBox(
    {},
    { m: "36.5px 118px", p: "0 32px 48px", h: 428 }
  );
  const Content = genCustomBox({ vertical: true }, { w: "100%" });
  const Prompt = genCustomText(HTMLTag.div, TextPreset.Content_default23, {
    lineHeight: 28,
    fontWeight: 700,
    m: "16px 0 32px",
  });
  const genButton40 = defineCustomButton(ButtonPreset.Navigation_default40);
  const SignInWithGoogleButton = genButton40({
    borderColor: "rgb(207, 217, 222)",
    hoverBorderColor: "rgb(210, 227, 252)",
    hoverBackgroundColor: "rgba(66, 133, 244, 0.04)",
    width: "100%",
    wrapper: { my: "12px" },
    inner: {
      display: "flex",
      fontSize: 15,
      letterSpacing: "normal",
      lineHeight: 18,
      AI: "center",
    },
  });
  const SignInWithAppleButton = genButton40({
    borderColor: "rgb(207, 217, 222)",
    hoverBackgroundColor: "rgb(230, 230, 230)",
    width: "100%",
    wrapper: { my: "12px" },
    inner: {
      display: "flex",
      fontSize: 15,
      letterSpacing: "normal",
      lineHeight: 18,
      AI: "center",
    },
  });
  const SubmitButton = genButton40({
    borderColor: "rgb(15, 20, 25)",
    backgroundColor: "rgb(15, 20, 25)",
    hoverBorderColor: "rgb(39, 44, 48)",
    hoverBackgroundColor: "rgb(39, 44, 48)",
    width: "100%",
    wrapper: { my: "12px" },
    inner: {
      display: "flex",
      fontSize: 15,
      letterSpacing: "normal",
      lineHeight: 18,
      AI: "center",
      color: "#fff",
    },
  });
  const ForgetPasswordButton = genButton40({
    borderColor: "rgb(207, 217, 222)",
    hoverBackgroundColor: "rgb(230, 230, 230)",
    width: "100%",
    wrapper: { my: "12px" },
    inner: {
      display: "flex",
      fontSize: 15,
      letterSpacing: "normal",
      lineHeight: 18,
      AI: "center",
    },
  });
  const UsernameTextfield = genCustomBox({}, { h: 84, py: "12px" });
  return (
    <Component>
      <Content>
        <Prompt>Sign in to Twitter</Prompt>
        <SignInWithGoogleButton>
          <Icon svg={IconGoogle} sx={{ mr: "4px" }} />
          Sign in with Google
        </SignInWithGoogleButton>
        <SignInWithAppleButton>
          <Icon svg={IconApple} sx={{ mr: "4px" }} /> Sign in with Apple
        </SignInWithAppleButton>
        <Divider />
        <UsernameTextfield></UsernameTextfield>
        <SubmitButton>Next</SubmitButton>
        <ForgetPasswordButton>Forget password?</ForgetPasswordButton>
      </Content>
    </Component>
  );
}
function Divider() {
  const Component = genCustomBox(
    {},
    { fontSize: 17, lineHeight: 20, AI: "center" }
  );
  const Line = genCustomBox(
    {},
    { m: "9px 6px", h: 1, bg: "rgb(207, 217, 222)", flexBasis: "50%" }
  );
  return (
    <Component>
      <Line />
      or
      <Line />
    </Component>
  );
}
const IconTwitter = {
  width: 32,
  height: 30,
  viewBox: "0 0 24 24",
  group: [
    {
      stroke: "rgb(29, 155, 240)",
      path: [
        {
          d: "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",
          fill: "rgb(29, 155, 240)",
        },
      ],
    },
  ],
};
const IconCross = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  group: [
    {
      stroke: "rgb(15, 20, 25)",
      strokeWidth: "0.1px",
      path: [
        {
          d: "M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z",
        },
      ],
    },
  ],
};
const IconGoogle = {
  width: 18,
  height: 18,
  viewBox: "0 0 48 48",
  group: [
    {
      path: [
        {
          d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z",
          fill: "#EA4335",
          stroke: "#EA4335",
        },
        {
          d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z",
          fill: "#4285F4",
          stroke: "#4285F4",
        },
        {
          d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z",
          fill: "#FBBC05",
          stroke: "#FBBC05",
        },
        {
          d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z",
          fill: "#34A853",
          stroke: "#34A853",
        },
      ],
    },
  ],
};
const IconApple = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  group: [
    {
      path: [
        {
          d: "M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z",
          fill: "rgb(15, 20, 25)",
        },
      ],
    },
  ],
};
