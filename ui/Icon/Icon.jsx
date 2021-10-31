import styled from "@emotion/styled";
import clsx from "clsx";
import * as React from "react";
import PropTypes from "prop-types";
import { iconMap, iconList } from "./icons";
const Component = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
  transition: fill, background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
//todo with border-box it is availabel to use .icon{margin,padding} to adjust the svg
const SizeMap = {
  sm: 20,
  md: 24,
  lg: 36,
};
const getIconPath = (name) => {
  let path = iconMap[name]?.path;
  return Array.isArray(path) ? path : [path];
};
//use <path> to contain content, if other tags like <circle> needed, pass them as children <Icon><circle></Icon>
function Icon(props) {
  const computedClasses = React.useMemo(() => clsx("icon"), []);
  const computedPath = React.useMemo(() => {
    if (props.path)
      return Array.isArray(props.path) ? props.path : [props.path];
    else return getIconPath(props.name);
  }, [props.name, props.path]);
  const computedViewBox = React.useMemo(
    () => props.viewBox || iconMap[props.name]?.viewBox,
    [props.name, props.viewBox]
  );
  const computedSize = React.useMemo(() => {
    if (typeof props.size === "number") return `${props.size}px`;
    else return `${SizeMap[props.size]}px` || "24px";
  }, [props.size]);

  return (
    <Component
      className={computedClasses}
      css={{
        fill: props.color ? props.color : "currentColor",
        width: computedSize,
        height: computedSize,
      }}
    >
      <svg
        css={{
          width: computedSize,
          height: computedSize,
        }}
        focusable="false"
        aria-hidden="true"
        viewBox={computedViewBox}
      >
        {props.children}
        {computedPath.map((path, index) => (
          <path d={path} key={index}></path>
        ))}
      </svg>
    </Component>
  );
}

function validateFailing(propName, componentName) {
  return new Error(
    "Invalid prop `" +
      propName +
      "` supplied to" +
      " `" +
      componentName +
      "`. Validation failed."
  );
}
// this is equal to PropTypes.oneOfType([PropTypes.number,PropTypes.oneOf(["sm", "md", "lg"]),])
function validateSize(props, propName, componentName) {
  let value = props[propName];
  if (typeof value === "string") {
    if (["sm", "md", "lg"].indexOf(value) === -1) {
      return validateFailing(propName, componentName);
    }
  } else if (typeof value === "number") {
    return;
  } else {
    return validateFailing(propName, componentName);
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf(iconList),
  color: PropTypes.string,
  viewBox: PropTypes.string,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["sm", "md", "lg"]),
  ]),
};
Icon.defaultProps = {
  name: "unknown",
  size: "md",
};
export { Icon };
