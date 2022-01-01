import * as React from "react";
import styled from "@emotion/styled";
import Textfield from "@/components/generic/Textfield";
import { genCustomBox, genBox } from "@/components/generic/containers/Box";
import {
  genCustomText,
  HTMLTag,
  TextPreset,
  genText,
} from "@/components/generic/Text";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import { User } from "@/stores/user";
import { Tolerant } from "@/utils/helpers";
import API from "@/api/index";
export default function PasswordForm(
  props: React.PropsWithChildren<TPasswordForm>
) {
  const [isSubmitAvailable, setSubmitAvailable] =
    React.useState<boolean>(false);
  const passwordTextfieldRef = React.useRef<HTMLInputElement>(null);
  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") setSubmitAvailable(true);
    else setSubmitAvailable(false);
  };
  const handleLogin = () => {
    const username = props.username;
    const elPT = passwordTextfieldRef.current;
    if (elPT != null) {
      const password = elPT.value;
      API.User.postLogin(username, password).then((res) => {
        if (res.good) {
          props.onAfterSubmit(res.result);
        } else {
          alert("Wrong password!");
          elPT.value = "";
          elPT.focus();
          setSubmitAvailable(false);
        }
      });
    }
  };
  React.useEffect(() => {
    const elPT = passwordTextfieldRef.current;
    if (elPT != null) {
      elPT.focus();
    }
  }, []);
  return (
    <Component>
      <Content>
        <Prompt>Enter you password</Prompt>
        <DisabledUsername>
          <Textfield
            id="username-disabled-input"
            prompt="Phone, email, or username"
            defaultValue={props.username}
            disabled
          />
        </DisabledUsername>
        <Password>
          <Textfield
            id="password-input"
            ref={passwordTextfieldRef}
            prompt="Password"
            secretly
            onChange={handleInputPassword}
          />
          <ForgotPasswordButton>Forget password?</ForgotPasswordButton>
        </Password>
        <Spacing />
        <SubmitButton disabled={!isSubmitAvailable} onClick={handleLogin}>
          Log in
        </SubmitButton>
      </Content>
    </Component>
  );
}
type TPasswordForm = {
  username: string;
  onAfterSubmit: (freshUser: Tolerant<User>) => void;
};
const Component = genCustomBox({}, { px: "32px", flexGrow: "1" });
const Content = genCustomBox({ vertical: true }, { w: "100%" });
const Prompt = genCustomText(HTMLTag.div, TextPreset.Content_default23, {
  lineHeight: 28,
  fontWeight: 700,
  m: "16px 0 32px",
});
const DisabledUsername = genBox({ py: "12px" });
const Password = genBox({ py: "12px" });
const ForgotPasswordButton = genText(
  HTMLTag.span,
  {
    px: "8px",
    pt: "2px",
    fontSize: 13,
    lineHeight: 16,
    color: "rgb(29, 155, 240)",
    cursor: "pointer",
  },
  { hoverUnderlined: true }
);
const Spacing = genCustomBox(
  {},
  {
    w: "100%",
    flexGrow: "1",
  }
);
//todo disable the button when no password input
const genButton40 = defineCustomButton(ButtonPreset.Navigation_default40);
type TButton = {
  disabled?: boolean;
  onClick?: Function;
};
function SubmitButton(props: React.PropsWithChildren<TButton>) {
  const isAvailable = !props.disabled;
  const handleClick = () => {
    if (isAvailable) props.onClick?.();
  };
  const Component = genButton40({
    borderColor: "rgb(15, 20, 25)",
    backgroundColor: "rgb(15, 20, 25)",
    hoverBorderColor: isAvailable ? "rgb(39, 44, 48)" : undefined,
    hoverBackgroundColor: isAvailable ? "rgb(39, 44, 48)" : undefined,
    width: "100%",
    wrapper: { m: "24px 0 48px" },
    cursor: isAvailable ? "pointer" : "default",
    inner: {
      display: "flex",
      fontSize: 15,
      letterSpacing: "normal",
      lineHeight: 18,
      AI: "center",
      color: "#fff",
    },
  });
  return (
    <div
      style={{
        opacity: isAvailable ? "1" : "0.5",
      }}
    >
      <Component onClick={handleClick}>{props.children}</Component>
    </div>
  );
}
