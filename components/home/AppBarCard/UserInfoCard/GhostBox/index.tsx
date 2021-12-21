import * as React from "react";
import styled from "@emotion/styled";
import { CustomButtonType, defineCustomButton } from "@/hooks/Button";
import { useCustomBox } from "@/hooks/Container";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
type GhostBoxProps = {
  active?: boolean;
  username: string;
  onChange: React.EventHandler<any>;
};
export default function GhostBox(
  props: React.PropsWithChildren<GhostBoxProps>
) {
  const handleCloseGhost = (e: React.MouseEvent) => {
    props.onChange(e);
  };

  const [Component] = useCustomBox(
    {
      noFlex: true,
    },
    {
      position: "absolute",
      bottom: 86,
      left: "calc(50% - 150px)", // - ((300px - 100%) / 2)
      w: 300,
      borderRadius: 16,
      boxShadow:
        "rgb(101,119,134,0.2) 0px 0px 15px, rgb(101,119,134,0.15) 0px 0px 3px 1px",
      cursor: "default",
      bg: "#fff",
      transition: "opacity 2s ease",
      zIndex: 200,
    }
  );
  const [Content] = useCustomBox(
    {
      vertical: true,
      borderbox: true,
    },
    {
      w: "100%",
      overflow: "hidden",
      py: "12px",
      transition: "all 0.2s ease",
    }
  );
  const [MenuItem] = useCustomBox(
    {
      borderbox: true,
    },
    {
      w: "100%",
      h: 52,
      p: "16px",
      bg: "#fff",
      hoverBg: "rgb(247, 249, 249)",
      cursor: "pointer",
    }
  );
  const [MenuText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_default15,
    {
      w: "100%",
      lineHeight: 20,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );

  const computedDisplay = React.useMemo(() => {
    return props.active ? "block" : "none";
  }, [props.active]);
  return (
    <React.Fragment>
      {props.active && <Overlay onMouseDown={handleCloseGhost} />}
      <Component style={{ display: computedDisplay }}>
        <Content>
          <MenuItem>
            <MenuText>Add an existing account</MenuText>
          </MenuItem>
          <MenuItem>
            <MenuText>Log out {props.username}</MenuText>
          </MenuItem>
        </Content>
      </Component>
    </React.Fragment>
  );
}
//todo absolute zindex
const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(155, 0, 0, 0.2);
  z-index: 100;
`;
