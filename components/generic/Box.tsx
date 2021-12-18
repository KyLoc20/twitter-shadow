import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { sxProps, createStyleComponent } from "@/system/sx";
//full sx supported
export type BoxProps = React.PropsWithChildren<BasicBoxProps>;
type BasicBoxProps = {
  style?: React.CSSProperties;
  className?: string;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onMouseDown?: React.MouseEventHandler;
} & sxProps;
export default function Box(props: BoxProps) {
  return (
    <Component {...props} className={props.className}>
      {props.children}
    </Component>
  );
}
const BasicBox = styled.div``;
const UnstyledBox = createStyleComponent<sxProps>(BasicBox);
//todo tricky to get a StyledComponent
const Component = UnstyledBox.withComponent("div");
