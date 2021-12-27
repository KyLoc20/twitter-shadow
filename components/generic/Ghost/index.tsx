import * as React from "react";
import styled from "@emotion/styled";
import { useCustomBox, useBox } from "@/hooks/Container";
type GhostProps = {
  active: boolean;
  onReadyClose: React.MouseEventHandler<HTMLElement>;
  overlayColor?: string;
} & TContainer;
type TContainer = {
  width?: string;
  height?: string;
  right?: string;
  bottom?: string;
  left?: string;
  top?: string;
};
// bottom: 86,
//     left: "calc(50% - 150px)", // - ((300px - 100%) / 2)
//     w: 300,
export default function Ghost(props: React.PropsWithChildren<GhostProps>) {
  console.log("RENDER Ghost", props.active);
  const [Container] = useBox({
    position: "absolute",
    transition: "opacity 2s ease",
    zIndex: 200,
    w: props.width,
    h: props.height,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
    top: props.top,
    //paper
    borderRadius: 16,
    boxShadow:
      "rgb(101,119,134,0.2) 0px 0px 15px, rgb(101,119,134,0.15) 0px 0px 3px 1px",
    cursor: "default",
    bg: "#fff",
  });
  const computedDisplay = React.useMemo(() => {
    return props.active ? "block" : "none";
  }, [props.active]);
  return (
    <React.Fragment>
      {props.active && (
        <Overlay
          className="ghost-overlay"
          color={props.overlayColor}
          onMouseDown={(e: React.MouseEvent) => {
            props.onReadyClose(e);
          }}
        />
      )}
      <Container
        className="ghost-container"
        style={{ display: computedDisplay }}
      >
        {props.children}
      </Container>
    </React.Fragment>
  );
}
//todo absolute z-index
const DEFAULT_OVERLAY_COLOR = "rgba(155, 0, 0, 0.2)";
type TOverlay = {
  color?: string;
};
const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props: TOverlay) => props.color ?? DEFAULT_OVERLAY_COLOR};
  z-index: 100;
`;
