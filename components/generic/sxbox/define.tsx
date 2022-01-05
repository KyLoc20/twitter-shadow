import React from "react";
import { sxProps } from "./sx";
import { Box, BoxProps } from "./base";

//TODO repeatedly
export default function defBox(preset: sxProps) {
  const generator = (custom: sxProps) => {
    const component = (
      props: React.PropsWithChildren<Omit<BoxProps, "sx">>
    ) => {
      const renderBox = (
        <Box {...props} sx={{ ...custom, ...preset }}>
          {props.children}
        </Box>
      );
      return renderBox;
    };
    component.cachedCustom = custom;
    return component;
  };
  return generator;
}
