import * as React from "react";
import { Box, TBox, TBasic } from "./base";
import { sxProps, JustifyContentValue, AlignItemsValue } from "@/system/sx";

//REMINDER: display flex will shrink el to content width
/*
by default a custom Box is:
1.display: flex 
2.flex-direction: row
3.flex-wrap: no-wrap
4.box-sizing: content-box
*/
type TCustomBox = {
  vertical?: boolean; //shortcut for flex-direction by default "row"
  noFlex?: boolean;
  wrap?: boolean; //shortcut for flex-wrap by default "no-wrap"
  borderbox?: boolean; //shortcut for box-sizing by default "content-box"
  JC?: JustifyContentValue; //shortcut for justify-content
  AI?: AlignItemsValue; //shortcut for align-items
};
const genPropsForCustomBox = (custom: TCustomBox, sx: sxProps): TBox => ({
  display: custom.noFlex ? undefined : "flex",
  flexDirection: custom.vertical ? "column" : undefined,
  flexWrap: custom.wrap ? "wrap" : undefined,
  boxSizing: custom.borderbox ? "border-box" : undefined,
  justifyContent: custom.JC,
  alignItems: custom.AI,
  ...sx,
});

const genBasicPropsForBox = (props: TBasic): TBox => ({
  className: props.className,
  style: props.style,
  onMouseEnter: props.onMouseEnter,
  onMouseLeave: props.onMouseLeave,
  onMouseDown: props.onMouseDown,
  onClick: props.onClick,
});

/**
 * This to provide a "half-customed" UnstyledBox with customs as to REUSE
 * @param custom quick settings like display: flex,
 * flex-direction: column, box-sizing: border-box...
 * @returns
 */

const defineCustomBox =
  (custom?: TCustomBox) =>
  (sx?: sxProps) =>
  (props: React.PropsWithChildren<TBox>) => {
    const renderBox = (
      <Box
        {...genPropsForCustomBox(custom ?? {}, sx ?? {})}
        {...genBasicPropsForBox(props)}
      >
        {props.children}
      </Box>
    );
    return renderBox;
  };

/**
 * This to provide a "fully-customed" UnstyledBox with customs and sx setting at the same time
 * @param custom quick settings like display: flex,
 * flex-direction: column, box-sizing: border-box...
 * @param sx customize all of CSS properties
 * @returns
 */
const genCustomBox =
  (custom?: TCustomBox, sx?: sxProps) =>
  (props: React.PropsWithChildren<TBox>) => {
    const renderBox = (
      <Box
        {...genPropsForCustomBox(custom ?? {}, sx ?? {})}
        {...genBasicPropsForBox(props)}
      >
        {props.children}
      </Box>
    );
    return renderBox;
  };

/**
 * This to provide a "raw" UnstyledBox with only sx
 * @param sx customize all of CSS properties
 * @returns
 */
const genBox = (sx?: sxProps) => (props: React.PropsWithChildren<TBox>) => {
  const renderBox = (
    <Box {...(sx ?? {})} {...genBasicPropsForBox(props)}>
      {props.children}
    </Box>
  );
  return renderBox;
};

export { defineCustomBox, genCustomBox, genBox };
