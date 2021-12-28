import * as React from "react";
import { css } from "@emotion/react";
import {
  HTMLTag,
  TCustomText,
  COMPONENT_FACTORY,
  TText,
  TComponentBasic,
  genBasicPropsForText,
} from "./base";
import { PRESET_FACTORY, PresetType } from "./preset";
import { sxProps } from "@/system/sx";
export { defineCustomText, genCustomText, genText };
type TextProps = React.PropsWithChildren<TText>;
//genStyle > sx > genCSS
//hoverTextDecoration is not supported in sxProps yet
const genCSS = (props: TCustomText) => css`
  text-decoration: ${props.underlined && "underline"};
  &:hover {
    text-decoration: ${props.hoverUnderlined && "underline"};
  }
`;
const defineCustomText =
  (tag: HTMLTag, whichPreset: PresetType) =>
  (sx?: sxProps, custom?: TCustomText) => {
    const TextComponent = COMPONENT_FACTORY[tag];
    const presetProps = PRESET_FACTORY[whichPreset];
    const render = (props: TextProps) => (
      <TextComponent
        sx={{ ...presetProps, ...sx }}
        {...genBasicPropsForText(props)}
        customCSS={genCSS(custom ?? {})}
      >
        {props.children}
      </TextComponent>
    );
    return render;
  };
const genCustomText = (
  tag: HTMLTag,
  whichPreset: PresetType,
  sx?: sxProps,
  custom?: TCustomText
) => {
  const TextComponent = COMPONENT_FACTORY[tag];
  const presetProps = PRESET_FACTORY[whichPreset];
  const render = (props: TextProps) => (
    <TextComponent
      sx={{ ...presetProps, ...sx }}
      {...genBasicPropsForText(props)}
      customCSS={genCSS(custom ?? {})}
    >
      {props.children}
    </TextComponent>
  );
  return render;
};

const genText = (tag: HTMLTag, sx?: sxProps, custom?: TCustomText) => {
  const TextComponent = COMPONENT_FACTORY[tag];
  const render = (props: TextProps) => (
    <TextComponent
      sx={{ ...sx }}
      {...genBasicPropsForText(props)}
      customCSS={genCSS(custom ?? {})}
    >
      {props.children}
    </TextComponent>
  );
  return render;
};
