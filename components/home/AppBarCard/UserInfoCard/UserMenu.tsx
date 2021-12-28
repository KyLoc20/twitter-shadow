import * as React from "react";
import styled from "@emotion/styled";
import { genCustomBox } from "@/components/generic/containers/Box";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";

export default function UserMenu(props: React.PropsWithChildren<TUserMenu>) {
  return (
    <Component>
      <MenuItem
        onClick={() => {
          props.onSelect("signin");
        }}
      >
        <MenuText>Add an existing account</MenuText>
      </MenuItem>
      <MenuItem>
        <MenuText>Log out {props.username}</MenuText>
      </MenuItem>
    </Component>
  );
}
type TUserMenu = {
  username: string;
  onSelect: (value: string) => void;
};
const MenuText = genCustomText(HTMLTag.span, TextPreset.Content_default15, {
  w: "100%",
  lineHeight: 20,
  textOverflow: "ellipsis",
  overflow: "hidden",
});
const Component = genCustomBox(
  {
    vertical: true,
    borderbox: true,
  },
  {
    bg: "#fff",
    borderRadius: 16,
    boxShadow:
      "rgb(101, 119, 134, 0.2) 0px 0px 15px,rgb(101, 119, 134, 0.15) 0px 0px 3px 1px",
    w: "100%",
    overflow: "hidden",
    py: "12px",
    transition: "all 0.2s ease",
  }
);
const MenuItem = genCustomBox(
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
