import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  CircularAnimation,
  createRipple,
  createRippleByAddingLayer,
} from "../Effect";
import { getColor } from "./color";
import { getSize } from "./size";
import { ButtonDefaultRemoval } from "./base";
const ButtonComponent = styled(ButtonDefaultRemoval)`
  display: inline-flex;
  flex-shrink: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  &.disabled,
  &.loading {
    cursor: default;
  }
`;
const Content = styled("span")`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
const LEComponent = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextEffect = styled("span")``;
const AnimationEffect = styled("span")``;
function LoadingEffect(props) {
  return (
    <LEComponent>
      {props.indicator ? (
        <TextEffect>{props.indicator}</TextEffect>
      ) : (
        <AnimationEffect>
          <CircularAnimation size={props.size}></CircularAnimation>
        </AnimationEffect>
      )}
    </LEComponent>
  );
}
LoadingEffect.propTypes = {
  size: PropTypes.number,
  indicator: PropTypes.string, //text effect content
};
function Button(props) {
  const [isHovering, setIsHovering] = React.useState(false);
  const computedClasses = React.useMemo(
    () =>
      clsx(
        "btn",
        props.disabled && "disabled",
        props.loading && "loading",
        props.variant
      ),
    [props.variant, props.loading, props.disabled]
  );
  const computedBoxShadow = React.useMemo(() => {
    if (props.boxShadow || props.hoverBoxShadow) {
      return isHovering ? props.hoverBoxShadow : props.boxShadow;
    } else if (props.variant === "plain" && !props.disabled && !props.depressed)
      return "0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)";
    else return null;
  }, [
    isHovering,
    props.boxShadow,
    props.hoverBoxShadow,
    props.variant,
    props.disabled,
    props.depressed,
  ]);
  const computedSize = React.useMemo(() => {
    const sizeStyles = getSize(props.size);
    if (props.height) sizeStyles["height"] = `${props.height}px`;
    if (props.width) sizeStyles["width"] = `${props.width}px`;
    if (props.padding) sizeStyles["padding"] = `${props.padding}`;
    return sizeStyles;
  }, [props.size, props.height, props.width, props.padding]);
  const computedBorder = React.useMemo(() => {
    //only for outlined
    if (props.variant === "outlined")
      if (props.disabled)
        return `1px solid ${getColor("disabled", props.variant, "border")}`;
      else
        return `1px solid ${
          isHovering
            ? props.hoverBorderColor ||
              props.borderColor ||
              getColor(props.color, props.variant, "borderFocused")
            : props.borderColor ||
              getColor(props.color, props.variant, "border")
        }`;
    else return null;
  }, [
    isHovering,
    props.variant,
    props.disabled,
    props.hoverBorderColor,
    props.color,
    props.borderColor,
  ]);
  const computedBorderRadius = React.useMemo(() => {
    if (props.tile) return null;
    else if (props.rounded)
      return props.height
        ? `${props.height / 2}px`
        : getSize(props.size)["height"];
    else
      return typeof props.borderRadius === "string"
        ? props.borderRadius
        : `${props.borderRadius || 4}px`;
  }, [props.tile, props.rounded, props.height, props.size]);
  const computedBackgroundColor = React.useMemo(() => {
    if (props.disabled) return getColor("disabled", props.variant, "main");
    //todo linear-gradient transition not supported
    if (isHovering)
      return (
        props.hoverBackgroundColor ||
        props.backgroundColor ||
        getColor(props.color, props.variant, "focus")
      );
    else
      return (
        props.backgroundColor || getColor(props.color, props.variant, "main")
      );
  }, [
    props.disabled,
    props.variant,
    isHovering,
    props.hoverBackgroundColor,
    props.color,
    props.backgroundColor,
  ]);
  const computedContentColor = React.useMemo(() => {
    if (props.disabled) return getColor("disabled", props.variant, "text");
    if (isHovering)
      return (
        props.hoverContentColor ||
        props.contentColor ||
        getColor(props.color, props.variant, "text")
      );
    else
      return props.contentColor || getColor(props.color, props.variant, "text");
  }, [
    isHovering,
    props.disabled,
    props.variant,
    props.contentColor,
    props.hoverContentColor,
    props.color,
  ]);
  const computedRippleColor = React.useMemo(() => {
    return props.rippleColor || getColor(props.color, props.variant, "ripple");
  }, [props.rippleColor, props.color, props.variant]);
  const computedContentOpacity = React.useMemo(() => {
    return props.loading ? 0 : 1;
  }, [props.loading]);
  const handleClick = (e) => {
    if (!props.disabled && !props.loading) {
      props.onClick?.(e);
      if (!props.rippleDisabled)
        createRippleByAddingLayer(e, false, computedRippleColor);
    }
  };
  const handleHoverEnter = () => {
    if (props.disabled || props.loading) return;
    setIsHovering(true);
  };
  const handleHoverLeave = () => {
    if (props.disabled || props.loading) return;
    setIsHovering(false);
  };
  return (
    <ButtonComponent
      className={computedClasses}
      style={{
        ...computedSize,
        background: computedBackgroundColor,
        color: computedContentColor,
        boxShadow: computedBoxShadow,
        border: computedBorder,
        borderRadius: computedBorderRadius,
      }}
      onClick={handleClick}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <Content style={{ opacity: computedContentOpacity }}>
        {props.children}
      </Content>
      {props.loading && <LoadingEffect size={20}></LoadingEffect>}
    </ButtonComponent>
  );
}
Button.propTypes = {
  variant: PropTypes.oneOf(["plain", "text", "outlined"]).isRequired,
  size: PropTypes.oneOf(["auto", "xsm", "sm", "md", "lg", "xlg"]),
  elevation: PropTypes.number,
  color: PropTypes.oneOf(["default", "primary", "error"]), //color theme
  disabled: PropTypes.bool,
  loading: PropTypes.bool, //render LoadingEffect not content if true
  depressed: PropTypes.bool, //no box-shadow if true
  tile: PropTypes.bool, //no border-radius if true
  rounded: PropTypes.bool, //round edges if true
  rippleDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  //custom
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  contentColor: PropTypes.string,
  hoverContentColor: PropTypes.string,
  boxShadow: PropTypes.string,
  hoverBoxShadow: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Button.defaultProps = {
  variant: "plain",
  size: "md",
  disabled: false,
  loading: false,
  depressed: false,
  tile: false,
  rounded: false,
  rippleDisabled: false,
};
export { Button };
