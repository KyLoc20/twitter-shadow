import React from "react";
import { sxProps } from "./sx";
import { Box, BoxProps } from "./base";

//TODO magicCustom
export default function genBox(custom: sxProps) {
  const component = (props: React.PropsWithChildren<Omit<BoxProps, "sx">>) => {
    const renderBox = (
      <Box {...props} sx={custom}>
        {props.children}
      </Box>
    );
    return renderBox;
  };
  component.cachedCustom = custom;
  return component;
}
