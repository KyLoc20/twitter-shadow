import * as React from "react";
import * as Text from "@/components/generic/Text";
import { sxProps, parseLengthValue } from "@/system/sx";
enum HTMLTag {
  div,
  span,
  p,
  h1,
  h2,
  h3,
  h4,
}
type TextTagFactory = {
  [key in HTMLTag]: (props: Text.TextProps) => JSX.Element;
};
const TEXT_FACTORY: TextTagFactory = {
  [HTMLTag.div]: Text.Div,
  [HTMLTag.span]: Text.Span,
  [HTMLTag.p]: Text.Paragraph,
  [HTMLTag.h1]: Text.HeadingOne,
  [HTMLTag.h2]: Text.HeadingTwo,
  [HTMLTag.h3]: Text.HeadingThree,
  [HTMLTag.h4]: Text.HeadingFour,
};
function useCustomText(
  tagType: HTMLTag,
  whichPreset: CustomTextType,
  sx?: sxProps
) {
  const presetTextProps = CUSTOM_FACTORY[whichPreset];
  const TextComponent = TEXT_FACTORY[tagType];
  const renderText = (props: Text.TextProps) => {
    return (
      <TextComponent
        fontSize={presetTextProps.fontSize}
        fontWeight={presetTextProps.fontWeight}
        textAlign={presetTextProps.textAlign}
        lineHeight={presetTextProps.lineHeight}
        letterSpacing={presetTextProps.letterSpacing}
        color={presetTextProps.color}
        hoverColor={presetTextProps.hoverColor}
        hoverUnderlined={presetTextProps.hoverUnderlined}
        sx={sx}
      >
        {props.children}
      </TextComponent>
    );
  };
  return [renderText];
}
export { HTMLTag, CustomTextType, useCustomText };
type CustomTextProps = Text.TextLocalProps;
enum CustomTextType {
  //default #0f1419
  //light #536471
  //primary #1d9bf0
  Navigation_default20,
  Title_default20,
  Content_default15,
  Content_light15,
  Content_light13,
  Content_primary14,
}
type CustomTextFactory = {
  [key in CustomTextType]: CustomTextProps;
};

const CUSTOM_FACTORY: CustomTextFactory = {
  //Title
  [CustomTextType.Title_default20]: {
    fontSize: 20,
    fontWeight: 700,
    color: "#0f1419",
    letterSpacing: "normal",
  },
  //Content
  [CustomTextType.Content_primary14]: {
    fontSize: 14,
    color: "#1d9bf0",
    letterSpacing: "normal",
  },
  [CustomTextType.Content_default15]: {
    fontSize: 15,
    fontWeight: 400,
    color: "#0f1419",
    letterSpacing: "normal",
  },
  [CustomTextType.Content_light15]: {
    fontSize: 15,
    fontWeight: 400,
    color: "#536471",
    letterSpacing: "normal",
  },
  [CustomTextType.Content_light13]: {
    fontSize: 13,
    fontWeight: 400,
    color: "#536471",
    letterSpacing: "normal",
  },
  //Navigation
  [CustomTextType.Navigation_default20]: {
    fontSize: 20,
    fontWeight: 400,
    color: "#0f1419",
    letterSpacing: "normal",
  },
};
