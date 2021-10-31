import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox, useCustomStack } from "@/hooks/Container";
type MainHeaderProps = {
  children?: React.ReactNode;
};
export default function MainHeaderCard(props: MainHeaderProps) {
  const winSize = useWindowSize();
  const [Content] = useCustomBox({}, {});
  return (
    <Component>
      <Content></Content>
    </Component>
  );
}
const Component = styled.main`
  margin-left: 275px;
  max-width: 990px;
  min-height: 100vh;
  background: rgba(0, 160, 20, 0.3);
`;
