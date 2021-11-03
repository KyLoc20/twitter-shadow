import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { createStyleComponent, sxProps, parseLengthValue } from "@/system/sx";
type LengthValue = number | string | "inherit";
export type PaperLocalProps = {
  bg?: string; //background
  hoverBg?: string;
  border?: string; //border
  borderTop?: string; //border-top
  borderRight?: string; //border-right
  borderBottom?: string; //border-bottom
  borderLeft?: string; //border-left
  borderRadius?: number | string; //border-radius
  boxShadow?: string; //box-shadow
};
export type PaperProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  sx?: sxProps;
} & PaperLocalProps;

export default function Paper(props: PaperProps) {
  return (
    <Component {...genStyledProps(props)} css={genCSS(props)}>
      {props.children}
    </Component>
  );
}
//styleProps > genStyledProps(sx > localProps) > genCSS
const genStyledProps = (props: PaperProps) => {
  const { bg, border, borderRadius, boxShadow } = props;
  const local: PaperLocalProps = {
    bg,
    border,
    borderRadius,
    boxShadow,
  };
  const sx = props.sx || {};
  return {
    bg: local.bg,
    border: local.border,
    borderRadius: parseLengthValue(local.borderRadius),
    boxShadow: local.boxShadow,
    ...sx,
  };
};
const genCSS = (props: PaperProps) => css`
  &:hover {
    background: ${props.hoverBg};
  }
`;
const BasicPaper = styled.div``;
const StyledPaper = createStyleComponent<sxProps>(BasicPaper);
const Component = StyledPaper.withComponent("div");
