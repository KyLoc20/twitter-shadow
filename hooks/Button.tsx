import * as React from "react";
import { Button, TButton } from "@/ui/Button";
import * as Text from "@/components/generic/Text";
import styled from "@emotion/styled";
import { createUnstyleComponent, sxProps, parseLengthValue } from "@/system/sx";
type ButtonProps = React.PropsWithChildren<TButton>;
type ButtonVariant = "plain" | "text" | "outlined";
type ButtonColor = string;
type CustomButtonProps = {
  variant?: ButtonVariant;
  width?: number;
  height?: number;
  borderRadius?: number | string;
  padding?: string;
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
  inner?: sxProps;
  wrapper?: sxProps;
};
type CustomButtonContentProps = {
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number | string;
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
    depressed: props.depressed,
    rippleDisabled: props.rippleDisabled,
    disabled: props.disabled,
    tile: props.tile,
  };
};
/**
 * This is to provide a "half-customed" UnstyledButton with presets as to REUSE
 * @param whichPreset
 * @returns useCustomButton with which you can customize an unique Button even with a Wrapper and an InnerContent
 */
function defineCustomButton(
  whichPreset: CustomButtonType
): (custom?: CustomButtonProps) => React.FC<ButtonProps>[] {
  const presetProps = FACTORY[whichPreset];
  const useCustom = (custom?: CustomButtonProps) => {
    const ultimateCustomProps: CustomButtonProps = {
      ...presetProps,
      ...custom,
    };
    const wrapperSx = ultimateCustomProps.wrapper;
    const innerSx = ultimateCustomProps.inner;
    if (wrapperSx != null) {
      const renderWithWrapper = (props: ButtonProps) => (
        <OuterWrapper {...wrapperSx} className="button-wrapper">
          <Button
            {...{
              ...genPropsForCustomButton(ultimateCustomProps),
            }}
            onClick={props.onClick}
          >
            {innerSx != null ? (
              <InnerContent {...innerSx} className="inner-content">
                {props.children}
              </InnerContent>
            ) : (
              props.children
            )}
          </Button>
        </OuterWrapper>
      );
      return [renderWithWrapper];
    } else {
      const renderWithoutWrapper = (props: ButtonProps) => (
        <Button {...genPropsForCustomButton(ultimateCustomProps)}>
          {innerSx != null ? (
            <InnerContent {...innerSx} className="inner-content">
              {props.children}
            </InnerContent>
          ) : (
            props.children
          )}
        </Button>
      );
      return [renderWithoutWrapper];
    }
  };
  return useCustom;
}
/**
 * @deprecated
 * @param
 * @returns
 */
function useCustomButton(whichPreset: CustomButtonType) {
  const customProps = FACTORY[whichPreset];
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
const BasicContent = styled.div``;
const UnstyledContent = createUnstyleComponent<sxProps>(BasicContent);
const InnerContent = UnstyledContent.withComponent("span");
const OuterWrapper = UnstyledContent.withComponent("div");
export { useCustomButton, CustomButtonType, defineCustomButton };
enum CustomButtonType {
  // Navigation_h36,
  // Content_h45_primary,
  // Content_h45_plain,
  // Content_h34_primary_text,
  // Content_h45_default,
  Navigation_default50,
  Navigation_primary50,
  Navigation_primary36,
  Navigation_primary24,
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
    depressed: true,
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
    depressed: true,
    content: {
      fontSize: 17,
      fontWeight: 700,
      lineHeight: 20,
    },
    inner: { fontSize: 17, fontWeight: 700, lineHeight: 20 },
  },
  [CustomButtonType.Navigation_primary36]: {
    variant: "plain",
    height: 36,
    padding: "0 16px",
    borderRadius: 9999,
    backgroundColor: "#1d9bf0",
    hoverBackgroundColor: "rgba(26, 140, 216, 1)",
    contentColor: "#fff",
    rippleDisabled: true,
    depressed: true,
    content: {
      fontSize: 15,
      fontWeight: 700,
      lineHeight: 18,
      letterSpacing: "normal",
    },
    inner: {
      fontSize: 15,
      fontWeight: 700,
      lineHeight: 18,
      letterSpacing: "normal",
    },
  },
  [CustomButtonType.Navigation_primary24]: {
    variant: "plain",
    height: 24,
    padding: "0 10px",
    borderRadius: 12,
    backgroundColor: "rgba(29, 155, 240, 0)",
    hoverBackgroundColor: "rgba(29, 155, 240, 0.1)",
    contentColor: "rgba(29, 155, 240, 1)",
    rippleDisabled: true,
    depressed: true,
  },
};
