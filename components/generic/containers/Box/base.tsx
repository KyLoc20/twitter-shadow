import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { sxProps, createUnstyleComponent } from "@/system/sx";
export type { TBox, TBasic };
export { Box };
type TBox = TBasic & sxProps;
type TBasic = {
  style?: React.CSSProperties;
  className?: string;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onMouseDown?: React.MouseEventHandler;
  onClick?: React.MouseEventHandler;
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
