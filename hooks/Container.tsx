import * as React from "react";
import { default as Box, BoxProps } from "@/components/generic/Box";
import { default as Stack, StackProps } from "@/components/generic/Stack";
import {
  default as Paper,
  PaperProps,
  PaperLocalProps,
} from "@/components/generic/Paper";
import { sxProps, JustifyContentValue, AlignItemsValue } from "@/system/sx";
//custom props for quick uses and some default settings
//REMINDER: display flex will shrink el to content width
/*
by default a custom Box is:
1.display: flex 
2.flex-direction: row
3.flex-wrap: no-wrap
4.box-sizing: content-box
*/
type CustomBoxProps = {
  vertical?: boolean; //shortcut for flex-direction by default "row"
  noFlex?: boolean;
  wrap?: boolean; //shortcut for flex-wrap by default "no-wrap"
  borderbox?: boolean; //shortcut for box-sizing by default "content-box"
  JC?: JustifyContentValue; //shortcut for justify-content
  AI?: AlignItemsValue; //shortcut for align-items
};
const genPropsForCustomBox = (
  custom: CustomBoxProps,
  sx: sxProps
): BoxProps => {
  return {
    display: custom.noFlex ? undefined : "flex",
    flexDirection: custom.vertical ? "column" : undefined,
    flexWrap: custom.wrap ? "wrap" : undefined,
    boxSizing: custom.borderbox ? "border-box" : undefined,
    justifyContent: custom.JC,
    alignItems: custom.AI,
    ...sx,
  };
};
type UnstyledBoxHook = (sx?: sxProps) => React.FC<BoxProps>[];
/**
 * This to provide a "half-customed" UnstyledBox with customs as to REUSE
 * @param custom
 * @returns
 */
const defineCustomBox = (custom: CustomBoxProps = {}): UnstyledBoxHook => {
  const useUnstyled = (sx?: sxProps) => {
    const render = (props: BoxProps) => (
      <Box
        {...genPropsForCustomBox(custom, sx ?? {})}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onMouseDown={props.onMouseDown}
        onClick={props.onClick}
        className={props.className}
        style={props.style}
      >
        {props.children}
      </Box>
    );
    return [render];
  };
  return useUnstyled;
};
//to provide a "fully-styled" Box with customs and sx setting at the same time
function useCustomBox(custom: CustomBoxProps = {}, sx: sxProps = {}) {
  const renderBox = (props: BoxProps) => (
    <Box
      {...genPropsForCustomBox(custom, sx)}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
      onClick={props.onClick}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </Box>
  );
  return [renderBox];
}
//to provide a "raw" Box with only sx
function useBox(sx: sxProps = {}) {
  const renderBox = (props: BoxProps) => (
    <Box
      {...sx}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
      onClick={props.onClick}
      className={props.className}
      style={props.style}
    >
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
type CustomPaperProps = PaperLocalProps;
const genPropsForCustomPaper = (custom: CustomPaperProps): PaperProps => {
  return {
    bg: custom.bg,
    hoverBg: custom.hoverBg,
    border: custom.border,
    borderTop: custom.borderTop,
    borderRight: custom.borderRight,
    borderBottom: custom.borderBottom,
    borderLeft: custom.borderLeft,
    borderRadius: custom.borderRadius,
    boxShadow: custom.boxShadow,
  };
};
function useCustomPaper(custom: CustomPaperProps, sx?: sxProps) {
  const renderPaper = (props: PaperProps) => (
    <Paper {...genPropsForCustomPaper(custom)} sx={sx}>
      {props.children}
    </Paper>
  );
  return [renderPaper];
}
export {
  defineCustomBox,
  useCustomBox,
  useBox,
  useCustomStack,
  useCustomPaper,
};
