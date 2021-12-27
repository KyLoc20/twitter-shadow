import styled from "@emotion/styled";
import { default as SVG, SVGProps } from "../SVG";
import { getIconFromLocal } from "./icons";
import * as React from "react";
import { createUnstyleComponent, sxProps, parseLengthValue } from "@/system/sx";
type IconProps = {
  name?: string;
  svg?: SVGProps;
  sx?: sxProps;
} & IconStyleProps &
  EventHandlerProps;
type IconStyleProps = {
  round?: boolean;
};
type EventHandlerProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
};
export type TIconSVG = SVGProps;
export default function Icon(props: React.PropsWithChildren<IconProps>) {
  const svg = props.svg ?? getIconFromLocal(props.name ?? "unknown");
  const { sx = {} } = props;
  return (
    <Component
      className="icon"
      {...{ round: props.round, ...sx }}
      onClick={props.onClick}
    >
      <SVG {...svg} />
    </Component>
  );
}
const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: ${(props: IconStyleProps) =>
    props.round ? "50%" : undefined};
`;
const UnstyledIcon = createUnstyleComponent<sxProps>(Wrapper);
const Component = UnstyledIcon.withComponent("span");
