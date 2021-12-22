import * as React from "react";
export declare function Button(props: ButtonProps): JSX.Element;
type BasicButtonProps = {
  children?: React.ReactNode;
  variant?: "plain" | "text" | "outlined";
  size?: "auto" | "xsm" | "sm" | "md" | "lg" | "xlg";
  elevation?: number;
  color?: "default" | "primary" | "error"; //color theme
  disabled?: boolean;
  loading?: boolean; //render LoadingEffect not content if true
  depressed?: boolean; //no box-shadow if true
  tile?: boolean; //no border-radius if true
  rounded?: boolean; //round edges if true
  rippleDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  //custom
  width?: number;
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
};
export declare type ButtonProps = React.PropsWithChildren<BasicButtonProps>;
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
