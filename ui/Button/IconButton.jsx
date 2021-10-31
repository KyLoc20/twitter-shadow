import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ButtonDefaultRemoval } from "./base";
import { getIconButtonSize as getSize } from "./size";
import { Icon } from "../Icon/Icon";
const Component = styled(ButtonDefaultRemoval)`
  display: flex;
  flex-shrink: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;
  transition: background 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;
function IconButton(props) {
  const computedWidth = (sizeNum) => {
    return { width: `${sizeNum}px` };
  };
  const computedHeight = (sizeNum) => {
    return { height: `${sizeNum}px` };
  };
  return (
    <Component
      className="btn iconed"
      css={{
        ...computedWidth(getSize(props.size)),
        ...computedHeight(getSize(props.size)),
      }}
    >
      <Icon
        name={props.iconName || props.icon}
        size={props.iconSize}
        color={props.iconColor}
        viewBox={props.iconViewBox}
        path={props.iconPath}
      ></Icon>
    </Component>
  );
}
IconButton.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["sm", "md", "lg"]),
  ]),
  icon: PropTypes.string,
  iconName: PropTypes.string, //alias icon
  iconSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["sm", "md", "lg"]),
  ]),
  iconColor: PropTypes.string,
  iconViewBox: PropTypes.string,
  iconPath: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
IconButton.defaultProps = {
  size: "md",
  iconColor: "rgba(0,0,0,.54)",
};
export { IconButton };
