import * as React from "react";
import { Button, TButton, TComponentBasic } from "@/ui/Button";
import styled from "@emotion/styled";
import { createUnstyleComponent, sxProps } from "@/system/sx";
const BasicContent = styled.div``;
const UnstyledContent = createUnstyleComponent<sxProps>(BasicContent);
const InnerContent = UnstyledContent.withComponent("span");
const OuterWrapper = UnstyledContent.withComponent("div");
export { InnerContent, OuterWrapper, Button };
export type { TButton, TCustomButton, TComponentBasic };
type TCustomButton = TButton & {
  content?: TCustomButtonContent;
  inner?: sxProps;
  wrapper?: sxProps;
};
type TCustomButtonContent = {
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number | string;
  //the color is decided by contentColor&hoverContentColor from [CustomButtonProps]
};
