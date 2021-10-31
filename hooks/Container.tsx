import * as React from "react";
import { default as Box, BoxProps } from "@/components/generic/Box";
import { default as Stack, StackProps } from "@/components/generic/Stack";
import { sxProps, JustifyContentValue, AlignItemsValue } from "@/system/sx";

//display flex will shrink el to content width
type CustomBoxProps = {
  vertical?: boolean; //shortcut for flex-direction by default "row"
  noFlex?: boolean;
  wrap?: boolean; //shortcut for flex-wrap by default "no-wrap"
  borderbox?: boolean; //shortcut for box-sizing by default "content-box"
  JC?: JustifyContentValue; //shortcut for justify-content
  AI?: AlignItemsValue; //shortcut for align-items
};
//to provide some shortcuts and default settings as for a custom
const genPropsForCustomBox = (
  custom: CustomBoxProps,
  sx: sxProps
): BoxProps => {
  return {
    //for now it is FlexBox by default
    display: custom.noFlex ? undefined : "flex",
    flexDirection: custom.vertical ? "column" : undefined,
    flexWrap: custom.wrap ? "wrap" : undefined,
    boxSizing: custom.borderbox ? "border-box" : undefined,
    justifyContent: custom.JC,
    alignItems: custom.AI,
    ...sx,
  };
};
function useCustomBox(custom: CustomBoxProps, sx: sxProps = {}) {
  const renderBox = (props: BoxProps) => (
    <Box {...genPropsForCustomBox(custom, sx)} style={props.style}>
      {props.children}
    </Box>
  );
  return [renderBox];
}

type CustomStackProps = {
  p?: string; //padding
  ep?: string; //eachPadding
  m?: string; //margin
  em?: string; //eachMargin
};
const genPropsForCustomStack = (props: CustomStackProps): StackProps => {
  return {
    padding: props.p,
    eachPadding: props.ep,
    margin: props.m,
    eachMargin: props.em,
  };
};
function useCustomStack(custom: CustomStackProps) {
  const renderStack = (props: StackProps) => (
    <Stack {...genPropsForCustomStack(custom)}>{props.children}</Stack>
  );
  return [renderStack];
}
export { useCustomBox, useCustomStack };
