import * as React from "react";
import styled from "@emotion/styled";
import Icon from "@/components/generic/Icon";
import Textfield from "@/components/generic/Textfield";
import { genCustomBox } from "@/components/generic/containers/Box";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import { Divider, IconGoogle, IconApple } from "./widgets";
import API from "@/api/index";
export default function SignInForm() {
  console.log("RENDER SignInForm");
  const UsernameTextfield = genCustomBox({}, { h: 84, py: "12px" });
  const usernameTextfieldRef = React.useRef<HTMLInputElement>(null);
  const handleSubmitUsername = (e: React.MouseEvent<HTMLButtonElement>) => {
    let elUT = usernameTextfieldRef.current;
    if (elUT != null && elUT.value !== "") {
      let username = elUT.value;
      API.User.getCheckUsernameForLogin(username).then((isAvailable) => {
        if (isAvailable) alert("YES");
        else alert("NO");
        if (elUT != null) elUT.value = "";
      });
    }
  };

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
        <UsernameTextfield>
          <Textfield
            id="username-input"
            ref={usernameTextfieldRef}
            prompt="Phone, email, or username"
          />
        </UsernameTextfield>
        <SubmitButton onClick={handleSubmitUsername}>Next</SubmitButton>
        <ForgetPasswordButton>Forget password?</ForgetPasswordButton>
      </Content>
    </Component>
  );
}
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
