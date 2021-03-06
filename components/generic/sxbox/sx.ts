import React from "react";
import { transform, ManyToOneStrategies } from "./utils";
import { sxProps, TCSSProperties, TLengthValue } from "./types";
export type { sxProps };
export { parseLengthValue, parseSxToCSSProperties };

const parseSxToCSSProperties = (sx: sxProps) => {
  return transform<sxProps, TCSSProperties>(
    sx,
    CSS_PROPERTIES,
    CSSPROPERTIES_PARSE_RULES
  );
};
//TODO tuple array
const CSS_PROPERTIES: Array<keyof TCSSProperties> = [
  "display",
  "overflow",
  "overflowX",
  "overflowY",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "justifyContent",
  "alignContent",
  "alignItems",
  "background",
  "backgroundSize",
  "border",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "borderRadius",
  "outline",
  "opacity",
  "visibility",
  "boxShadow",
  "cursor",
  "userSelect",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "zIndex",
  "transform",
  "boxSizing",
  "width",
  "height",
  "maxHeight",
  "maxWidth",
  "minHeight",
  "minWidth",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "color",
  "caretColor",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "direction",
  "textAlign",
  "lineBreak",
  "textOverflow",
  "whiteSpace",
  "wordBreak",
  "wordSpacing",
  "wordWrap",
  "textDecoration",
  "textTransform",
  "transition",
];
const CSSPROPERTIES_PARSE_RULES: ManyToOneStrategies<sxProps, TCSSProperties> =
  {
    display: { fn: (props) => props.display },
    overflow: { fn: (props) => props.overflow },
    overflowX: { fn: (props) => props.overflowX },
    overflowY: { fn: (props) => props.overflowY },
    flex: { fn: (props) => props.flex },
    flexBasis: { fn: (props) => props.flexBasis },
    flexDirection: { fn: (props) => props.flexDirection },
    flexGrow: { fn: (props) => props.flexGrow },
    flexShrink: { fn: (props) => props.flexShrink },
    flexWrap: { fn: (props) => props.flexWrap },
    justifyContent: { fn: (props) => props.justifyContent || props.JC },
    alignContent: { fn: (props) => props.alignContent },
    alignItems: { fn: (props) => props.alignItems || props.AI },
    background: { fn: (props) => props.bg },
    backgroundSize: { fn: (props) => props.bgSize },
    border: { fn: (props) => props.border },
    borderTop: { fn: (props) => props.borderTop },
    borderRight: { fn: (props) => props.borderRight },
    borderBottom: { fn: (props) => props.borderBottom },
    borderLeft: { fn: (props) => props.borderLeft },
    borderRadius: { fn: (props) => parseLengthValue(props.borderRadius) },
    outline: { fn: (props) => props.outline },
    opacity: { fn: (props) => props.opacity },
    visibility: { fn: (props) => props.visibility },
    boxShadow: { fn: (props) => props.boxShadow },
    cursor: { fn: (props) => props.cursor },
    userSelect: { fn: (props) => props.userSelect },

    position: { fn: (props) => props.position },
    top: { fn: (props) => parseLengthValue(props.top) },
    right: { fn: (props) => parseLengthValue(props.right) },
    bottom: { fn: (props) => parseLengthValue(props.bottom) },
    left: { fn: (props) => parseLengthValue(props.left) },
    zIndex: { fn: (props) => props.zIndex },
    transform: { fn: (props) => props.transform },

    boxSizing: { fn: (props) => props.boxSizing },
    width: { fn: (props) => parseLengthValue(props.w) },
    height: { fn: (props) => parseLengthValue(props.h) },
    maxHeight: { fn: (props) => parseLengthValue(props.maxHeight) },
    maxWidth: { fn: (props) => parseLengthValue(props.maxWidth) },
    minHeight: { fn: (props) => parseLengthValue(props.minHeight) },
    minWidth: { fn: (props) => parseLengthValue(props.minWidth) },

    margin: { fn: (props) => props.m },
    marginTop: { fn: (props) => props.mt || props.my },
    marginRight: { fn: (props) => props.mr || props.mx },
    marginBottom: { fn: (props) => props.mb || props.my },
    marginLeft: { fn: (props) => props.ml || props.mx },
    padding: { fn: (props) => props.p },
    paddingTop: { fn: (props) => props.pt || props.py },
    paddingRight: { fn: (props) => props.pr || props.px },
    paddingBottom: { fn: (props) => props.pb || props.py },
    paddingLeft: { fn: (props) => props.pl || props.px },

    color: { fn: (props) => props.color },
    caretColor: { fn: (props) => props.caretColor },
    fontFamily: { fn: (props) => props.fontFamily },
    fontSize: { fn: (props) => parseLengthValue(props.fontSize) },
    fontWeight: { fn: (props) => props.fontWeight },
    letterSpacing: { fn: (props) => parseLengthValue(props.letterSpacing) },
    lineHeight: { fn: (props) => parseLengthValue(props.lineHeight) },
    direction: { fn: (props) => props.direction },
    textAlign: { fn: (props) => props.textAlign },
    lineBreak: { fn: (props) => props.lineBreak },
    textOverflow: { fn: (props) => props.textOverflow },
    whiteSpace: { fn: (props) => props.whiteSpace },
    wordBreak: { fn: (props) => props.wordBreak },
    wordSpacing: { fn: (props) => props.wordSpacing },
    wordWrap: { fn: (props) => props.wordWrap },
    textDecoration: { fn: (props) => props.textDecoration },
    textTransform: { fn: (props) => props.textTransform },

    transition: { fn: (props) => props.transition },
  };
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
