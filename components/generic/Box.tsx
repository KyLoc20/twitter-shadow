import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { sxProps, parseLengthValue } from "@/system/sx";
//full sx supported
export type BoxProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & sxProps;
export default function Box(props: BoxProps) {
  return <BasicBox {...props}>{props.children}</BasicBox>;
}
const BasicBox = styled.div`
  display: ${(props: BoxProps) => props.display};
  overflow: ${(props: BoxProps) => props.overflow};
  visibility: ${(props: BoxProps) => props.visibility};

  flex-direction: ${(props: BoxProps) => props.flexDirection};
  flex-wrap: ${(props: BoxProps) => props.flexWrap};
  justify-content: ${(props: BoxProps) => props.justifyContent || props.JC};
  align-items: ${(props: BoxProps) => props.alignItems || props.AI};
  align-content: ${(props: BoxProps) => props.alignContent};
  flex-grow: ${(props: BoxProps) => props.flexGrow};
  flex-shrink: ${(props: BoxProps) => props.flexShrink};
  flex: ${(props: BoxProps) => props.flex};

  position: ${(props: BoxProps) => props.position};
  z-index: ${(props: BoxProps) => props.zIndex};
  top: ${(props: BoxProps) => props.top};
  right: ${(props: BoxProps) => props.right};
  bottom: ${(props: BoxProps) => props.bottom};
  left: ${(props: BoxProps) => props.left};

  box-sizing: ${(props: BoxProps) => props.boxSizing};
  width: ${(props: BoxProps) => parseLengthValue(props.w)};
  height: ${(props: BoxProps) => parseLengthValue(props.h)};
  min-width: ${(props: BoxProps) => parseLengthValue(props.minWidth)};
  min-height: ${(props: BoxProps) => parseLengthValue(props.minHeight)};
  max-width: ${(props: BoxProps) => parseLengthValue(props.maxWidth)};
  max-height: ${(props: BoxProps) => parseLengthValue(props.maxHeight)};

  margin: ${(props: BoxProps) => props.m};
  margin-top: ${(props: BoxProps) => props.my || props.mt};
  margin-right: ${(props: BoxProps) => props.mx || props.mr};
  margin-bottom: ${(props: BoxProps) => props.my || props.mb};
  margin-left: ${(props: BoxProps) => props.mx || props.ml};
  padding: ${(props: BoxProps) => props.p};
  padding-top: ${(props: BoxProps) => props.py || props.pt};
  padding-right: ${(props: BoxProps) => props.px || props.pr};
  padding-bottom: ${(props: BoxProps) => props.py || props.pb};
  padding-left: ${(props: BoxProps) => props.px || props.pl};

  background: ${(props: BoxProps) => props.bg};
  border: ${(props: BoxProps) => props.border};
  border-top: ${(props: BoxProps) => props.borderTop};
  border-right: ${(props: BoxProps) => props.borderRight};
  border-bottom: ${(props: BoxProps) => props.borderBottom};
  border-left: ${(props: BoxProps) => props.borderLeft};
  border-radius: ${(props: BoxProps) => parseLengthValue(props.borderRadius)};
  box-shadow: ${(props: BoxProps) => props.boxShadow};

  text-align: ${(props: BoxProps) => props.textAlign};
  line-height: ${(props: BoxProps) => parseLengthValue(props.lineHeight)};
  font-size: ${(props: BoxProps) => parseLengthValue(props.fontSize)};
  font-weight: ${(props: BoxProps) => props.fontWeight};
  letter-spacing: ${(props: BoxProps) => parseLengthValue(props.letterSpacing)};
`;
