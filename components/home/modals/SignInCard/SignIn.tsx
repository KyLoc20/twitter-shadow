import * as React from "react";
import styled from "@emotion/styled";
import { genCustomBox } from "@/components/generic/containers/Box";
import Icon from "@/components/generic/Icon";
import { sxProps } from "@/system/sx";
import { IconTwitter, IconCross } from "./widgets";
import UsernameForm from "./UsernameForm";
export default function SignIn(props: React.PropsWithChildren<TSignIn>) {
  const handleKeepModalOpen = (e: React.MouseEvent<HTMLElement>) =>
    e.stopPropagation();
  const handleShutdown = () => props.onClose();
  return (
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
        <UsernameForm />
      </Content>
    </Component>
  );
}
type TSignIn = {
  onClose: Function;
};
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
const Content = genCustomBox({ vertical: true }, { w: "100%", pb: "48px" });
const Header = genCustomBox({}, { h: 53, px: "16px" });
const CloseButton = genCustomBox();
//TRICK a center position two same size placeholder -> flex-basis: "50%"
const Placeholder = genCustomBox({}, { AI: "center", flexBasis: "50%" });
