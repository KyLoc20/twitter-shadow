import * as React from "react";
import styled, { StyledComponent } from "@emotion/styled";
import { css } from "@emotion/react";
export type sxProps = SpacingProps &
  PaperProps &
  SizingProps &
  PositionProps &
  TextProps &
  DisplayProps &
  FlexProps;
type DisplayProps = {
  display?:
    | "block"
    | "inline"
    | "inline-block"
    | "flex"
    | "grid"
    | "none"
    | GlobalValue;
  overflow?: "hidden" | "visible" | "auto" | "scroll" | GlobalValue;
  visibility?: "hidden" | "visible";
};
type FlexProps = {
  flexDirection?: "row" | "column"; //flex-direction
  flexWrap?: "wrap" | "nowrap"; //flex-wrap
  JC?: JustifyContentValue; //justify-content shortcut
  justifyContent?: JustifyContentValue; //justify-content
  AI?: AlignItemsValue; //align-items shortcut
  alignItems?: AlignItemsValue; //align-items
  alignContent?: //align-content
  | "stretch"
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  flexGrow?: string; //flex-grow
  flexShrink?: string; //flex-shrink
  flex?: string; //flex
};
type PositionProps = {
  position?: "relative" | "absolute" | "fixed" | "sticky";
  zIndex?: number; //z-index
  top?: LengthValue;
  right?: LengthValue;
  bottom?: LengthValue;
  left?: LengthValue;
};
type SizingProps = {
  boxSizing?: "border-box" | "content-box";
  w?: LengthValue;
  h?: LengthValue;
  minWidth?: LengthValue; //min-width
  maxWidth?: LengthValue; //max-width
  minHeight?: LengthValue; //min-height
  maxHeight?: LengthValue; //max-height
};
type SpacingProps = {
  m?: string; //margin
  mt?: string; //margin-top
  mr?: string; //margin-right
  mb?: string; //margin-bottom
  ml?: string; //margin-left
  mx?: string; //margin-left&margin-right
  my?: string; //margin-top&margin-bottom
  p?: string; //padding
  pt?: string; //padding-top
  pr?: string; //padding-right
  pb?: string; //padding-bottom
  pl?: string; //padding-left
  px?: string; //padding-left&padding-right
  py?: string; //padding-top&padding-bottom
};
type PaperProps = {
  bg?: string; //background
  hoverBg?: string; //:hover background
  border?: string; //border
  borderTop?: string; //border-top
  borderRight?: string; //border-right
  borderBottom?: string; //border-bottom
  borderLeft?: string; //border-left
  borderRadius?: number | string; //border-radius
  boxShadow?: string; //box-shadow
  cursor?: "default" | "pointer" | "text";
  transition?: string;
};
type TextProps = {
  textAlign?: "left" | "right" | "center" | "start" | "end" | "justify"; //text-align
  lineHeight?: LengthValue; //line-height
  fontSize?: LengthValue; //font-size
  fontWeight?: number | string; //font-weight
  letterSpacing?: LengthValue; //letter-spacing
  textOverflow?: "ellipsis" | "clip"; //text-overflow
  whiteSpace?: "nowrap" | "normal" | "pre"; //white-space
  color?: string;
};
type GridProps = {};
//A LengthValue could be:
//1. number between [0,1] -> percentage as string
//2. string with various units "1px" "200px" "75%" "3em" "20vw" "1.5" "inherit"-> direct style
//3. number 100 200 -> parse number with "px"
type LengthValue = number | string | "inherit";
type GlobalValue = "inherit" | "initial" | "revert" | "unset";

export type JustifyContentValue =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-evenly"
  | "space-around";
export type AlignItemsValue = "stretch" | "flex-start" | "center" | "flex-end";
const parseNumberWithPx = (v: number | undefined) =>
  v != null ? `${v}px` : undefined;
export const parseNumberWithEm = (v: number | undefined) =>
  v != null ? `${v}em` : undefined;
export function parseLengthValue(
  v: LengthValue | undefined,
  defaultValue?: LengthValue
) {
  if (v != null) return typeof v === "number" ? parseNumberWithPx(v) : v;
  else
    return typeof defaultValue === "number"
      ? parseNumberWithPx(defaultValue)
      : defaultValue;
}
export function createStyleComponent<T extends sxProps>(
  baseComponent: StyledComponent<{}>
) {
  return styled(baseComponent)`
    display: ${(props: T) => props.display};
    overflow: ${(props: T) => props.overflow};
    visibility: ${(props: T) => props.visibility};

    flex-direction: ${(props: T) => props.flexDirection};
    flex-wrap: ${(props: T) => props.flexWrap};
    justify-content: ${(props: T) => props.justifyContent || props.JC};
    align-items: ${(props: T) => props.alignItems || props.AI};
    align-content: ${(props: T) => props.alignContent};
    flex-grow: ${(props: T) => props.flexGrow};
    flex-shrink: ${(props: T) => props.flexShrink};
    flex: ${(props: T) => props.flex};

    position: ${(props: T) => props.position};
    z-index: ${(props: T) => props.zIndex};
    top: ${(props: T) => parseLengthValue(props.top)};
    right: ${(props: T) => parseLengthValue(props.right)};
    bottom: ${(props: T) => parseLengthValue(props.bottom)};
    left: ${(props: T) => parseLengthValue(props.left)};

    box-sizing: ${(props: T) => props.boxSizing};
    width: ${(props: T) => parseLengthValue(props.w)};
    height: ${(props: T) => parseLengthValue(props.h)};
    min-width: ${(props: T) => parseLengthValue(props.minWidth)};
    min-height: ${(props: T) => parseLengthValue(props.minHeight)};
    max-width: ${(props: T) => parseLengthValue(props.maxWidth)};
    max-height: ${(props: T) => parseLengthValue(props.maxHeight)};

    margin: ${(props: T) => props.m};
    margin-top: ${(props: T) => props.my || props.mt};
    margin-right: ${(props: T) => props.mx || props.mr};
    margin-bottom: ${(props: T) => props.my || props.mb};
    margin-left: ${(props: T) => props.mx || props.ml};
    padding: ${(props: T) => props.p};
    padding-top: ${(props: T) => props.py || props.pt};
    padding-right: ${(props: T) => props.px || props.pr};
    padding-bottom: ${(props: T) => props.py || props.pb};
    padding-left: ${(props: T) => props.px || props.pl};

    background: ${(props: T) => props.bg};
    border: ${(props: T) => props.border};
    border-top: ${(props: T) => props.borderTop};
    border-right: ${(props: T) => props.borderRight};
    border-bottom: ${(props: T) => props.borderBottom};
    border-left: ${(props: T) => props.borderLeft};
    border-radius: ${(props: T) => parseLengthValue(props.borderRadius)};
    box-shadow: ${(props: T) => props.boxShadow};
    cursor: ${(props: T) => props.cursor};
    transition: ${(props: T) => props.transition};

    text-align: ${(props: T) => props.textAlign};
    line-height: ${(props: T) => parseLengthValue(props.lineHeight)};
    font-size: ${(props: T) => parseLengthValue(props.fontSize)};
    font-weight: ${(props: T) => props.fontWeight};
    letter-spacing: ${(props: T) => parseLengthValue(props.letterSpacing)};
    text-overflow: ${(props: T) => parseLengthValue(props.textOverflow)};
    white-space: ${(props: T) => parseLengthValue(props.whiteSpace)};
    color: ${(props: T) => parseLengthValue(props.color)};

    &:hover {
      background: ${(props: T) => props.hoverBg};
    }
  `;
}
