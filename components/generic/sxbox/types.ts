export type { sxProps, TCSSProperties, TLengthValue };
type sxProps = ContainerProps &
  PaperProps &
  SizingProps &
  PositionProps &
  SpacingProps &
  TextProps &
  OtherProps;
type ContainerProps = {
  display?: TDisplayValue;
  overflow?: TOverflowValue;
  overflowX?: TOverflowValue;
  overflowY?: TOverflowValue;
  flex?: string;
  flexBasis?: string;
  flexDirection?: TFlexDirection;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: TFlexWrapValue;
  JC?: TJustifyContentValue;
  justifyContent?: TJustifyContentValue;
  alignContent?: TAlignContentValue;
  AI?: TAlignItemsValue;
  alignItems?: TAlignItemsValue;
};
type PaperProps = {
  bg?: string;
  bgSize?: string;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: TLengthValue;
  outline?: string;
  opacity?: string;
  visibility?: TVisibilityValue;
  boxShadow?: string;
  cursor?: TCursorValue;
  userSelect?: TUserSelectValue;
};
type PositionProps = {
  position?: TPositionValue;
  top?: TLengthValue;
  right?: TLengthValue;
  bottom?: TLengthValue;
  left?: TLengthValue;
  zIndex?: number;
  transform?: string;
};
type SizingProps = {
  boxSizing?: TBoxSizingValue;
  w?: TLengthValue;
  h?: TLengthValue;
  maxHeight?: TLengthValue;
  maxWidth?: TLengthValue;
  minHeight?: TLengthValue;
  minWidth?: TLengthValue;
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
type TextProps = {
  color?: string;
  caretColor?: string; //USEFUL
  fontFamily?: string;
  fontSize?: TLengthValue;
  fontWeight?: TFontWeightValue;
  letterSpacing?: TLengthValue;
  lineHeight?: TLengthValue;
  direction?: TDirectionValue;
  textAlign?: TTextAlignValue;
  lineBreak?: TLineBreakValue;
  textOverflow?: TTextOverflowValue; //USEFUL
  whiteSpace?: TWhiteSpaceValue;
  wordBreak?: TWordBreakValue;
  wordSpacing?: string;
  wordWrap?: TWordWrapValue;
  textDecoration?: string; //SHORTHAND
  textTransform?: TTextTransformValue;
};
type OtherProps = {
  transition?: string; //SHORTHAND
};
//A LengthValue could be:
//1. number between [0,1] -> percentage as string TODO
//2. string with various units "1px" "200px" "75%" "3em" "20vw" "1.5" "inherit"-> direct style
//3. number 100 200 -> parse number with "px"
type TLengthValue = number | string;
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
  | TGlobals;
type TOverflowValue = "hidden" | "visible" | "auto" | "scroll" | TGlobals;
type TVisibilityValue = "hidden" | "visible" | TGlobals;
type TPositionValue = "relative" | "absolute" | "fixed" | "sticky" | TGlobals;
type TBoxSizingValue = "border-box" | "content-box" | TGlobals;
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
type TFlexDirection =
  | TGlobals
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";
type TFlexWrapValue = TGlobals | "nowrap" | "wrap" | "wrap-reverse";
type TDirectionValue = TGlobals | "ltr" | "rtl";
type TLineBreakValue =
  | TGlobals
  | "anywhere"
  | "auto"
  | "loose"
  | "normal"
  | "strict";
type TWordBreakValue =
  | TGlobals
  | "break-all"
  | "break-word"
  | "keep-all"
  | "normal";
type TWordWrapValue = TGlobals | "break-word" | "normal";
type TTextTransformValue =
  | TGlobals
  | "capitalize"
  | "full-size-kana"
  | "full-width"
  | "lowercase"
  | "none"
  | "uppercase";
type TFontWeightValue =
  | TGlobals
  | number
  | "bolder"
  | "lighter"
  | "bold"
  | "normal";
/**
 * Inline CSS Styles, ref to https://reactjs.org/docs/faq-styling.html
 * According to the React Docs using the style attributes as the primary means of styling elements is generally NOT recommended.
 * For STATIC styles using the className and external stylesheets is recommended.
 * For DYNAMICALLY-computed styles at render time using the style is recommended.
 */
/**
 * All Available CSS properties supported in the style attribute, refer to https://github.com/frenic/csstype/blob/master/index.d.ts
 */
type TGlobals = "-moz-initial" | "inherit" | "initial" | "revert" | "unset";
type TCSSProperties = {
  //by default LONGHAND
  /**
   * @see PaperProps PAPER PROPERTIES
   */
  opacity?: string;
  visibility?: TGlobals | "collapse" | "hidden" | "visible";
  boxShadow?: string;
  cursor?: TGlobals | "text" | "auto" | "pointer" | "default";
  userSelect?:
    | TGlobals
    | "all"
    | "auto"
    | "contain"
    | "element"
    | "none"
    | "text";
  //filter?: string; //USEFUL
  /**
   * @kind BACKGROUND
   */
  background?: string; //SHORTHAND
  //backgroundPosition?: string; //SHORTHAND
  //backgroundAttachment?: string;
  //backgroundBlendMode?: string;
  // backgroundClip?: string;
  // backgroundColor?: string;
  // backgroundOrigin?: string;
  // backgroundPositionX?: string;
  // backgroundPositionY?: string;
  // backgroundRepeat?: string;
  backgroundSize?: string;
  /**
   * @kind BORDER
   */
  border?: string; //SHORTHAND
  borderTop?: string; //SHORTHAND
  borderRight?: string; //SHORTHAND
  borderBottom?: string; //SHORTHAND
  borderLeft?: string; //SHORTHAND
  // borderColor?: string; //SHORTHAND
  // borderImage?: string; //SHORTHAND
  borderRadius?: string; //SHORTHAND
  // borderStyle?: string; //SHORTHAND
  // borderWidth?: string; //SHORTHAND
  // borderBottomColor?: string;
  // borderBottomLeftRadius?: string;
  // borderBottomRightRadius?: string;
  // borderBottomStyle?: string;
  // borderBottomWidth?: string;
  // borderLeftColor?: string;
  // borderLeftStyle?: string;
  // borderLeftWidth?: string;
  // borderRightColor?: string;
  // borderRightStyle?: string;
  // borderRightWidth?: string;
  // borderTopColor?: string;
  // borderTopLeftRadius?: string;
  // borderTopRightRadius?: string;
  // borderTopStyle?: string;
  // borderTopWidth?: string;
  /**
   * @kind OUTLINE
   */
  outline?: string; //SHORTHAND
  // outlineColor?: string;
  // outlineOffset?: string;
  // outlineStyle?: string;
  // outlineWidth?: string;
  /**
   * @see PositionProps POSITION PROPERTIES
   */
  position?:
    | TGlobals
    | "-webkit-sticky"
    | "absolute"
    | "fixed"
    | "relative"
    | "static"
    | "sticky";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: TGlobals | "auto" | number;
  /**
   * @kind TRANSFORM
   */
  transform?: string;
  // transformBox?: string;
  // transformOrigin?: string;
  // transformStyle?: string;
  // rotate?: string;
  // scale?: string;
  // translate?: string;
  /**
   * @see ContainerProps CONTAINER PROPERTIES
   */
  display?: string;
  //float?: string;
  //clear?: string;
  //verticalAlign?: string; //DIFFICULT
  /**
   * @kind OVERFLOW
   */
  overflow?: "hidden" | "visible" | "auto" | "scroll" | TGlobals; //SHORTHAND
  overflowX?: "hidden" | "visible" | "auto" | "scroll" | TGlobals;
  overflowY?: "hidden" | "visible" | "auto" | "scroll" | TGlobals;
  /**
   * @kind FLEX
   */
  flex?: string; //SHORTHAND
  //flexFlow?: string; //SHORTHAND
  flexBasis?: string;
  flexDirection?:
    | TGlobals
    | "column"
    | "column-reverse"
    | "row"
    | "row-reverse";
  flexGrow?: TGlobals | number;
  flexShrink?: TGlobals | number;
  flexWrap?: TGlobals | "nowrap" | "wrap" | "wrap-reverse";
  //order?: string;
  justifyContent?: string;
  //justifyItems?: string;
  //justifySelf?: string;
  alignContent?: string;
  alignItems?: string;
  //alignSelf?: string;
  /**
   * @kind GRID
   */
  // grid?: string; //SHORTHAND
  // gap?: string; //SHORTHAND
  // gridArea?: string; //SHORTHAND
  // gridColumn?: string; //SHORTHAND
  // gridRow?: string; //SHORTHAND
  // gridTemplate?: string; //SHORTHAND
  // gridAutoColumns?: string;
  // gridAutoFlow?: string;
  // gridAutoRows?: string;
  // gridColumnEnd?: string;
  // gridColumnStart?: string;
  // gridRowEnd?: string;
  // gridRowStart?: string;
  // gridTemplateAreas?: string;
  // gridTemplateColumns?: string;
  // gridTemplateRows?: string;
  // rowGap?: string;
  // columnGap?: string;
  /**
   * @see SizingProps SIZING PROPERTIES
   */
  boxSizing?: TGlobals | "border-box" | "content-box";
  width?: string;
  height?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  /**
   * @see SpacingProps SPACING PROPERTIES
   */
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  margin?: string; //SHORTHAND
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  padding?: string; //SHORTHAND
  /**
   * @see TextProps TEXT PROPERTIES
   */
  /**
   * @kind COLOR
   */
  color?: string;
  caretColor?: string; //USEFUL
  /**
   * @kind FONT
   */
  //font?: string; //SHORTHAND
  fontFamily?: string;
  fontSize?: string;
  //fontSizeAdjust?: string;
  fontWeight?: TGlobals | number | "bolder" | "lighter" | "bold" | "normal";
  letterSpacing?: string;
  /**
   * @kind LINE
   */
  lineHeight?: string;
  direction?: TGlobals | "ltr" | "rtl";
  textAlign?:
    | TGlobals
    | "center"
    | "end"
    | "justify"
    | "left"
    | "match-parent"
    | "right"
    | "start";
  lineBreak?: TGlobals | "anywhere" | "auto" | "loose" | "normal" | "strict";
  // hyphens?: string;
  // textIndent?: string;
  // textJustify?: string;
  textOverflow?: string; //USEFUL
  whiteSpace?:
    | TGlobals
    | "-moz-pre-wrap"
    | "break-spaces"
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-line"
    | "pre-wrap";
  wordBreak?: TGlobals | "break-all" | "break-word" | "keep-all" | "normal";
  wordSpacing?: string;
  wordWrap?: TGlobals | "break-word" | "normal";
  /**
   * @kind DECORATION
   */
  textDecoration?: string; //SHORTHAND
  // textDecorationColor?: string;
  // textDecorationLine?: string;
  // textDecorationSkip?: string;
  // textDecorationSkipInk?: string;
  // textDecorationStyle?: string;
  // textDecorationThickness?: string;
  // textDecorationWidth?: string;
  // textShadow?: string;
  textTransform?:
    | TGlobals
    | "capitalize"
    | "full-size-kana"
    | "full-width"
    | "lowercase"
    | "none"
    | "uppercase";
  // textUnderlineOffset?: string;
  // textUnderlinePosition?: string;
  /**
   * @kind ENPHASIZE
   */
  // textEmphasis?: string; //SHORTHAND
  // textEmphasisColor?: string;
  // textEmphasisPosition?: string;
  // textEmphasisStyle?: string;
  /**
   * @see OtherProps OTHER PROPERTIES
   */
  //aspectRatio?: string;
  //backdropFilter?: string;
  //backfaceVisibility?: string;
  // clipPath?: string;
  // content?: string;
  // zoom?: string;
  // animation?: string; //SHORTHAND
  // listStyle?: string; //SHORTHAND
  // mask?: string; //SHORTHAND
  // pointerEvents?: string;
  // scrollBehavior?: string;
  /**
   * @kind TRANSITION
   */
  transition?: string; //SHORTHAND
  // transitionDelay?: string;
  // transitionDuration?: string;
  // transitionProperty?: string;
  // transitionTimingFunction?: string;
};
