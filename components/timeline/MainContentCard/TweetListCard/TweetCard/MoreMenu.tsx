import React from "react";
import styled from "@emotion/styled";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";
import { genBox, genCustomBox } from "@/components/generic/containers/Box";
import { default as Icon, TIconSVG } from "@/components/generic/Icon";
import { IconDelete, IconPin, IconUpdate } from "./icons";
export default function MoreMenu(
  props: React.PropsWithChildren<{
    username: string; //the logged-in user
    ownername: string; //the owner of the tweet's
    onSelect: (value: string) => void;
  }>
) {
  const { username, ownername } = props;
  //todo [Stack] first and last El's border-radius
  return (
    <Component>
      <Content>
        {username === ownername && (
          <MenuItem
            name={"delete"}
            description={"Delete"}
            icon={IconDelete}
            warning
            onClick={() => {
              props.onSelect("delete");
            }}
          />
        )}
        {username === ownername && (
          <MenuItem
            name={"update"}
            description={"Modify this tweet"}
            icon={IconUpdate}
            onClick={() => {
              props.onSelect("update");
            }}
          />
        )}
        <MenuItem
          name={"pin"}
          description={"Pin to your profile"}
          icon={IconPin}
          onClick={() => {
            props.onSelect("pin");
          }}
        />
      </Content>
    </Component>
  );
}
const Component = genBox({
  bg: "#fff",
  borderRadius: 4,
  boxShadow:
    "rgb(101, 119, 134, 0.2) 0px 0px 15px,rgb(101, 119, 134, 0.15) 0px 0px 3px 1px",
});
const Content = genCustomBox(
  {
    vertical: true,
    borderbox: true,
  },
  {
    w: "100%",
    overflow: "hidden",
    transition: "all 0.2s ease",
  }
);
function MenuItem(props: React.PropsWithChildren<TMenuItem>) {
  const Component = genCustomBox(
    {
      borderbox: true,
    },
    {
      w: "100%",
      p: "16px",
      hoverBg: "rgb(247, 249, 249)",
      cursor: "pointer",
      color: "rgb(83, 100, 113)",
    }
  );
  return (
    <Component
      onClick={(e) => {
        props.onClick(e);
      }}
    >
      <Icon
        svg={props.icon}
        sx={props.warning ? MENUITEM_ICON_WARNING_STYLE : MENUITEM_ICON_STYLE}
      />
      {props.warning ? (
        <MenuWarningText>{props.description}</MenuWarningText>
      ) : (
        <MenuText>{props.description}</MenuText>
      )}
    </Component>
  );
}
type TMenuItem = {
  name: string;
  description: string;
  icon: TIconSVG;
  warning?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
};
const MENUITEM_ICON_STYLE = {
  mr: "12px",
  w: 18.75,
  h: 18.75,
};
const MENUITEM_ICON_WARNING_STYLE = {
  mr: "12px",
  w: 18.75,
  h: 18.75,
  color: "#f4212e",
};

const MenuText = genCustomText(HTMLTag.span, TextPreset.Content_default15, {
  w: "100%",
  lineHeight: 20,
  textOverflow: "ellipsis",
  overflow: "hidden",
  userSelect: "none",
});
const MenuWarningText = genCustomText(
  HTMLTag.span,
  TextPreset.Content_default15,
  {
    w: "100%",
    lineHeight: 20,
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: "#f4212e",
    userSelect: "none",
  }
);
