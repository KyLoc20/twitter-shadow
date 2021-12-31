import * as React from "react";
type ButtonVariant = "plain" | "text" | "outlined";
type ButtonSize = "auto" | "xsm" | "sm" | "md" | "lg" | "xlg";
type ButtonColor = string;
type ButtonColorTheme = "default" | "primary" | "error";
type TSweet = {
  depressed?: boolean; //no box-shadow if true
  tile?: boolean; //no border-radius if true
  rounded?: boolean; //round edges if true
  elevation?: number; //todo
};
type TControl = {
  disabled?: boolean;
  loading?: boolean; //render LoadingEffect not content if true
  rippleDisabled?: boolean;
};
type TButtonBasic = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColorTheme; //color theme
  width?: number | string; //todo
  height?: number;
  padding?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  contentColor?: string;
  hoverContentColor?: string;
  boxShadow?: string;
  hoverBoxShadow?: string;
  borderRadius?: number | string;
  cursor?: "default" | "pointer" | "text";
};
type TComponentBasic = {
  style?: React.CSSProperties;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export declare type TButton = TButtonBasic &
  TComponentBasic &
  TControl &
  TSweet;
export declare function Button(
  props: React.PropsWithChildren<TButton>
): JSX.Element;

export declare function IconButton(props: IconButtonProps): JSX.Element;
export declare type IconButtonProps = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  icon: string;
  iconName?: string;
  iconColor?: string;
  iconViewBox?: string;
  iconPath?: string[];
  iconSize?: number | "sm" | "md" | "lg";
};
