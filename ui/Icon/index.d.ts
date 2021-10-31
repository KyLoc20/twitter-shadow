import * as React from "react";
export declare function Icon(props: IconProps): JSX.Element;
export declare type IconProps = {
  children?: React.ReactNode;
  name: string;
  color?: string;
  viewBox?: string;
  path?: string[];
  size?: number | "sm" | "md" | "lg";
};
