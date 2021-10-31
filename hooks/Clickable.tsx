import * as React from "react";
import styled from "@emotion/styled";

type BaseProps = {
  children?: React.ReactNode;
};
type handlerClick = (e: React.MouseEvent) => void;
//the change of color will not be heritaged by currentColor
//  user-select: none;
const Wrapper = styled.span`
  cursor: pointer;
  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
export function useClickable(
  handleClick: handlerClick,
  color?: string,
  hoverColor?: string
) {
  const renderClick = (props: BaseProps) => {
    const [isHovering, setIsHovering] = React.useState(false);
    const handleEnter = (e: React.MouseEvent) => {
      setIsHovering(true);
    };
    const handleLeave = (e: React.MouseEvent) => {
      setIsHovering(false);
    };
    const computedContentColor = React.useMemo(
      () => (isHovering ? (hoverColor ? hoverColor : color) : color),
      [isHovering]
    );
    return (
      <Wrapper
        className="clickable"
        onClick={handleClick}
        style={{ color: computedContentColor }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {props.children}
      </Wrapper>
    );
  };
  return [renderClick];
}
