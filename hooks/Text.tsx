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
  //default "#111111"
  //white "#ffffff"
  //primary "#067df7"
  //light "8c8c8c"
  //lightB "696969"
  //lightC "666666"
  Link_primary14,
  Link_light14,
  Link_light16,
  Link_white16,

  Title_default14,
  Title_default32,
  Title_lightB16,
  Title_default100,
  Title_default48,

  Content_light12,
  Content_default14,
  Content_default16,
  Content_default14_bold,
  Content_default18_bold,
  Content_lightC20,
  Content_lightC16,

  Badge,

  //twitter
  //default #0f1419
  Navigation_default20,
}
type CustomTextFactory = {
  [key in CustomTextType]: CustomTextProps;
};

const CUSTOM_FACTORY: CustomTextFactory = {
  //Title
  [CustomTextType.Title_default100]: {
    fontSize: 100,
    fontWeight: 800,
    letterSpacing: -0.05,
    color: "#111111", //rgb(17, 17, 17)
  },
  [CustomTextType.Title_default48]: {
    fontSize: 48,
    fontWeight: 800,
    letterSpacing: -0.06,
    color: "#111111", //rgb(17, 17, 17)
  },
  [CustomTextType.Title_default14]: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111111",
  },
  [CustomTextType.Title_default32]: {
    fontSize: 32,
    fontWeight: 700,
    color: "#111111",
  },
  [CustomTextType.Title_lightB16]: {
    fontSize: 16,
    fontWeight: 400,
    color: "#696969",
  },

  //Content
  [CustomTextType.Content_default14]: {
    fontSize: 14,
    fontWeight: 400,
    color: "#111111",
  },
  [CustomTextType.Content_default16]: {
    fontSize: 16,
    fontWeight: 400,
    color: "#111111",
  },
  [CustomTextType.Content_default14_bold]: {
    fontSize: 14,
    fontWeight: 600,
    color: "#111111",
  },
  [CustomTextType.Content_default18_bold]: {
    fontSize: 18,
    fontWeight: 600,
    color: "#111111",
  },
  [CustomTextType.Content_light12]: {
    fontSize: 12.6,
    fontWeight: 400,
    color: "#8c8c8c",
  },
  [CustomTextType.Content_lightC16]: {
    fontSize: 16,
    fontWeight: 400,
    color: "#666666",
  },
  [CustomTextType.Content_lightC20]: {
    fontSize: 20,
    fontWeight: 400,
    color: "#666666",
  },

  //Link
  [CustomTextType.Link_white16]: {
    fontSize: 16,
    fontWeight: 400,
    color: "#ffffff",
  },
  [CustomTextType.Link_primary14]: {
    fontSize: 14,
    fontWeight: 400,
    color: "#067df7",
    hoverColor: "rgb(104, 181, 251)",
    hoverUnderlined: true,
  },
  [CustomTextType.Link_light14]: {
    fontSize: 14,
    fontWeight: 400,
    color: "#8c8c8c",
    hoverColor: "#111111",
  },
  [CustomTextType.Link_light16]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    color: "#696969", //rgb(105, 105, 105)
  },
  //other
  [CustomTextType.Badge]: {
    fontSize: 12.6,
    fontWeight: 600,
    color: "#fff",
  },

  //twitter
  //Navigation
  [CustomTextType.Navigation_default20]: {
    fontSize: 20,
    fontWeight: 400,
    color: "#0f1419",
    letterSpacing: "normal",
  },
};
