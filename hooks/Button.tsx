import * as React from "react";
import { Button, ButtonProps } from "@/ui/Button";
import * as Text from "@/components/generic/Text";
type ButtonVariant = "plain" | "text" | "outlined";
type ButtonColor = string;
type ButtonPadding = string;
type CustomButtonProps = {
  variant: ButtonVariant;
  width?: number;
  height?: number;
  borderRadius?: number | string;
  padding?: ButtonPadding;
  backgroundColor?: ButtonColor;
  hoverBackgroundColor?: ButtonColor;
  borderColor?: ButtonColor;
  hoverBorderColor?: ButtonColor;
  contentColor?: ButtonColor;
  hoverContentColor?: ButtonColor;
  boxShadow?: string;
  hoverBoxShadow?: string;
  depressed?: boolean;
  rippleDisabled?: boolean;
  disabled?: boolean;
  tile?: boolean;
  content?: CustomButtonContentProps;
};
type CustomButtonContentProps = {
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  //the color is decided by contentColor&hoverContentColor from [CustomButtonProps]
};
const genPropsForCustomButton = (
  props: CustomButtonProps
): CustomButtonProps => {
  return {
    variant: props.variant,
    width: props.width,
    height: props.height,
    padding: props.padding,
    backgroundColor: props.backgroundColor,
    hoverBackgroundColor: props.hoverBackgroundColor,
    borderColor: props.borderColor,
    hoverBorderColor: props.hoverBorderColor,
    contentColor: props.contentColor,
    hoverContentColor: props.hoverContentColor,
    boxShadow: props.boxShadow,
    hoverBoxShadow: props.hoverBoxShadow,
    borderRadius: props.borderRadius,
    depressed: props.depressed || true,
    rippleDisabled: props.rippleDisabled,
    disabled: props.disabled,
    tile: props.tile,
  };
};
function useCustomButton(which: CustomButtonType) {
  const customProps = FACTORY[which];
  if (customProps.content != null) {
    const customContentProps = customProps.content;
    const RenderContentText = (props: Text.TextProps) => (
      <Text.Span
        fontSize={customContentProps.fontSize}
        fontWeight={customContentProps.fontWeight}
        lineHeight={customContentProps.lineHeight}
        letterSpacing={customContentProps.letterSpacing}
      >
        {props.children}
      </Text.Span>
    );
    const renderButtonWithContent = (props: ButtonProps) => (
      <Button {...genPropsForCustomButton(customProps)}>
        <RenderContentText>{props.children}</RenderContentText>
      </Button>
    );
    return [renderButtonWithContent];
  } else {
    const renderButton = (props: ButtonProps) => (
      <Button {...genPropsForCustomButton(customProps)}>
        {props.children}
      </Button>
    );
    return [renderButton];
  }
}
export { useCustomButton, CustomButtonType };
enum CustomButtonType {
  // Navigation_h36,
  // Content_h45_primary,
  // Content_h45_plain,
  // Content_h34_primary_text,
  // Content_h45_default,
  Navigation_default50,
  Navigation_primary50,
}
type CustomButtonFactory = {
  [key in CustomButtonType]: CustomButtonProps;
};
const FACTORY: CustomButtonFactory = {
  [CustomButtonType.Navigation_default50]: {
    variant: "plain",
    height: 50,
    padding: "12px",
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0)",
    hoverBackgroundColor: "rgba(15, 20, 25, 0.1)",
    contentColor: "rgb(15, 20, 25)",
    rippleDisabled: true,
  },
  [CustomButtonType.Navigation_primary50]: {
    variant: "plain",
    width: 226,
    height: 50,
    padding: "0 32px",
    borderRadius: 25,
    backgroundColor: "#1d9bf0", //rgba(29, 155, 240, 1)
    hoverBackgroundColor: "rgba(26, 140, 216, 1)",
    contentColor: "#fff",
    rippleDisabled: true,
    content: {
      fontSize: 17,
      fontWeight: 700,
      lineHeight: 20,
    },
  },
};
