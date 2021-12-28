import * as React from "react";
import {
  Button,
  TComponentBasic,
  TButton,
  TCustomButton,
  InnerContent,
  OuterWrapper,
} from "./base";
import { sxProps } from "@/system/sx";
import { PresetType, FACTORY } from "./preset";
export { defineCustomButton, genCustomButton };

const genPropsForCustomButton = (props: TCustomButton): TButton => {
  return {
    variant: props.variant,
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
    width: props.width, //todo
  };
};
const genBasicPropsForButton = (props: TButton): TComponentBasic => ({
  className: props.className,
  style: props.style,
  onMouseEnter: props.onMouseEnter,
  onMouseLeave: props.onMouseLeave,
  onMouseDown: props.onMouseDown,
  onClick: props.onClick,
});
type ButtonProps = React.PropsWithChildren<TButton>;
const genRender = (
  custom: TCustomButton,
  wrapper?: sxProps,
  inner?: sxProps
) => {
  if (wrapper) {
    const renderWithWrapper = (props: ButtonProps) => {
      if (inner) {
        return (
          <OuterWrapper {...wrapper} className="button-wrapper">
            <Button
              {...genPropsForCustomButton(custom)}
              {...genBasicPropsForButton(props)}
            >
              <InnerContent {...inner} className="inner-content">
                {props.children}
              </InnerContent>
            </Button>
          </OuterWrapper>
        );
      } else
        return (
          <OuterWrapper {...wrapper} className="button-wrapper">
            <Button
              {...genPropsForCustomButton(custom)}
              {...genBasicPropsForButton(props)}
            >
              {props.children}
            </Button>
          </OuterWrapper>
        );
    };
    return renderWithWrapper;
  } else {
    const renderWithoutWrapper = (props: ButtonProps) => {
      if (inner) {
        return (
          <Button
            {...genPropsForCustomButton(custom)}
            {...genBasicPropsForButton(props)}
          >
            <InnerContent {...inner} className="inner-content">
              {props.children}
            </InnerContent>
          </Button>
        );
      } else
        return (
          <Button
            {...genPropsForCustomButton(custom)}
            {...genBasicPropsForButton(props)}
          >
            {props.children}
          </Button>
        );
    };
    return renderWithoutWrapper;
  }
};
/**
 * This is to provide a "half-customed" UnstyledButton with presets as to REUSE
 * @param whichPreset
 * @returns genCustomButton with which you can customize an unique Button even with a Wrapper and an InnerContent
 */
const defineCustomButton =
  (whichPreset: PresetType) => (custom?: TCustomButton) => {
    const presetProps = FACTORY[whichPreset];
    const customProps: TCustomButton = {
      ...presetProps,
      ...custom,
    };
    const wrapperSx = customProps.wrapper;
    const innerSx = customProps.inner;
    return genRender(customProps, wrapperSx, innerSx);
  };

/**
 * This is to provide a "raw" UnstyledButton
 * @param custom
 * @returns
 */
const genCustomButton = (custom?: TCustomButton) => {
  const wrapperSx = custom?.wrapper;
  const innerSx = custom?.inner;
  return genRender(custom ?? {}, wrapperSx, innerSx);
};
