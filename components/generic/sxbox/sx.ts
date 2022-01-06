import React from "react";
import { transform, merge, ManyToOneStrategies } from "./utils";
export type { sxProps };
export { parseLengthValue, parseSxToCSSProperties };

const parseSxToCSSProperties = (sx: sxProps) => {
  return transform<sxProps, TCSSProperties>(sx, CSS_PROPERTIES, RULES);
};
type sxProps = {
  color?: string;
  w?: TLengthValue;
  h?: TLengthValue;
  bg?: string; //background
  m?: string; //margin
  mt?: string; //margin-top
  mr?: string; //margin-right
  mb?: string; //margin-bottom
  ml?: string; //margin-left
  mx?: string; //margin-left&margin-right
  my?: string; //margin-top&margin-bottom
};
type TCSSProperties = {
  color?: string;
  width?: string;
  height?: string;
  background?: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
};
const CSS_PROPERTIES: Array<keyof TCSSProperties> = [
  "color",
  "width",
  "height",
  "background",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
];
const RULES: ManyToOneStrategies<sxProps, TCSSProperties> = {
  color: { fn: (props) => props.color },
  width: { fn: (props) => parseLengthValue(props.w) },
  height: { fn: (props) => parseLengthValue(props.h) },
  background: { fn: (props) => props.bg },
  margin: { fn: (props) => props.m },
  marginTop: { fn: (props) => props.mt || props.my },
  marginRight: { fn: (props) => props.mr || props.mx },
  marginBottom: { fn: (props) => props.mb || props.my },
  marginLeft: { fn: (props) => props.ml || props.mx },
};

type sxProps1 = SpacingProps &
  PaperProps &
  SizingProps &
  PositionProps &
  TextProps &
  DisplayProps &
  FlexProps;
type DisplayProps = {
  display?: TDisplayValue;
  overflow?: TOverflowValue;
  visibility?: TVisibilityValue;
};
type FlexProps = {
  flexDirection?: "row" | "column"; //flex-direction
  flexWrap?: "wrap" | "nowrap"; //flex-wrap
  JC?: TJustifyContentValue; //justify-content shortcut
  justifyContent?: TJustifyContentValue; //justify-content
  AI?: TAlignItemsValue; //align-items shortcut
  alignItems?: TAlignItemsValue; //align-items
  alignContent?: TAlignContentValue; //align-content

  flexGrow?: string; //flex-grow
  flexShrink?: string; //flex-shrink
  flexBasis?: string;
  flex?: string; //flex
};
type PositionProps = {
  position?: TPositionValue;
  zIndex?: number; //z-index
  top?: TLengthValue;
  right?: TLengthValue;
  bottom?: TLengthValue;
  left?: TLengthValue;
};
type SizingProps = {
  boxSizing?: TBoxSizingValue;
  w?: TLengthValue;
  h?: TLengthValue;
  minWidth?: TLengthValue; //min-width
  maxWidth?: TLengthValue; //max-width
  minHeight?: TLengthValue; //min-height
  maxHeight?: TLengthValue; //max-height
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
  bgSize?: string; //background-size
  hoverBg?: string; //:hover background
  border?: string; //border
  borderTop?: string; //border-top
  borderRight?: string; //border-right
  borderBottom?: string; //border-bottom
  borderLeft?: string; //border-left
  borderRadius?: number | string; //border-radius
  boxShadow?: string; //box-shadow
  cursor?: TCursorValue;
  userSelect?: TUserSelectValue;
  transition?: string;
};
type TextProps = {
  textAlign?: TTextAlignValue; //text-align
  lineHeight?: TLengthValue; //line-height
  fontSize?: TLengthValue; //font-size
  fontWeight?: number; //font-weight
  letterSpacing?: TLengthValue; //letter-spacing
  textOverflow?: TTextOverflowValue; //text-overflow
  textDecoration?: string; //text-decoration
  whiteSpace?: TWhiteSpaceValue; //white-space
  color?: string;
  hoverColor?: string; //:hover color
};
type GridProps = {};

type TGlobalValue = "inherit" | "initial" | "revert" | "unset";
type TJustifyContentValue =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-evenly"
  | "space-around";
type TAlignItemsValue = "stretch" | "flex-start" | "center" | "flex-end";
type TAlignContentValue =
  | "stretch"
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-evenly"
  | "space-around";
type TDisplayValue =
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "grid"
  | "none"
  | TGlobalValue;
type TOverflowValue = "hidden" | "visible" | "auto" | "scroll" | TGlobalValue;
type TVisibilityValue = "hidden" | "visible" | TGlobalValue;
type TPositionValue =
  | "relative"
  | "absolute"
  | "fixed"
  | "sticky"
  | TGlobalValue;
type TBoxSizingValue = "border-box" | "content-box" | TGlobalValue;
type TCursorValue = "default" | "pointer" | "text";
type TUserSelectValue = "auto" | "none" | "text" | "all" | "contain";
type TTextAlignValue =
  | "left"
  | "right"
  | "center"
  | "start"
  | "end"
  | "justify";
type TTextOverflowValue = "ellipsis" | "clip";
type TWhiteSpaceValue = "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line";

//A LengthValue could be:
//1. number between [0,1] -> percentage as string TODO
//2. string with various units "1px" "200px" "75%" "3em" "20vw" "1.5" "inherit"-> direct style
//3. number 100 200 -> parse number with "px"
type TLengthValue = number | string;

const parseNumberWithPx = (v: number | undefined) =>
  v != null ? `${v}px` : undefined;
const parseLengthValue = (
  v: TLengthValue | undefined,
  defaultValue?: TLengthValue
) => {
  if (v != null) return typeof v === "number" ? parseNumberWithPx(v) : v;
  else
    return typeof defaultValue === "number"
      ? parseNumberWithPx(defaultValue)
      : defaultValue;
};
