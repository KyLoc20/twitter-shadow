import * as React from "react";
import styled from "@emotion/styled";
import Textfield from "@/components/generic/Textfield";
import { genCustomBox } from "@/components/generic/containers/Box";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import API from "@/api/index";
export default function UsernameForm(
  props: React.PropsWithChildren<TUsernameForm>
) {
  const UsernameTextfield = genCustomBox(
    { borderbox: true },
    { h: 84, py: "12px" }
  );
  const usernameTextfieldRef = React.useRef<HTMLInputElement>(null);
  const handleSubmitUsername = (e: React.MouseEvent<HTMLButtonElement>) => {
    let elUT = usernameTextfieldRef.current;
    if (elUT != null && elUT.value !== "") {
      let username = prefixWithAt(elUT.value);
      API.User.getCheckUsernameForRegister(username).then((isAvailable) => {
        if (isAvailable) props.onAfterSubmit(username);
        else alert("Sorry, this name has been occupied.");
        if (elUT != null) elUT.value = "";
      });
    }
  };

  return (
    <Component>
      <Content>
        <Prompt>Sign up to Twitter</Prompt>
        <UsernameTextfield>
          <Textfield
            id="username-input"
            ref={usernameTextfieldRef}
            prompt="Phone, email, or username"
          />
        </UsernameTextfield>
        <SubmitButton onClick={handleSubmitUsername}>Next</SubmitButton>
      </Content>
    </Component>
  );
}
type TUsernameForm = {
  onAfterSubmit: (username: string) => void;
};
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
const prefixWithAt = (username: string) =>
  username.startsWith("@") ? username : "@" + username;
