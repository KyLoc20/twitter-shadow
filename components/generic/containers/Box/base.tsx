import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { sxProps, createUnstyleComponent } from "@/system/sx";
export type { TBox, TComponentBasic };
export { Box };
type TBox = TComponentBasic & sxProps;
type TComponentBasic = {
  style?: React.CSSProperties;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
function Box(props: React.PropsWithChildren<TBox>) {
  return (
    <Component {...props} className={props.className}>
      {props.children}
    </Component>
  );
}
const BasicBox = styled.div``;
const UnstyledBox = createUnstyleComponent<sxProps>(BasicBox);
//todo tricky to get a StyledComponent
const Component = UnstyledBox.withComponent("div");
