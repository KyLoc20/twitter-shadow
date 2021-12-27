import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { defineCustomBox, useCustomBox, useBox } from "@/hooks/Container";
import { default as Icon, TIconSVG } from "@/components/generic/Icon";
import { IconDelete, IconPin } from "./icons";
type TMenuItem = {
  name: string;
  description: string;
  icon: TIconSVG;
};
const MORE_MENU_ITEMS: TMenuItem[] = [
  {
    name: "delete",
    description: "Delete",
    icon: IconDelete,
  },
  {
    name: "pin",
    description: "Pin to your profile",
    icon: IconPin,
  },
];
export default function MoreMenu(
  props: React.PropsWithChildren<{
    onSelect: (value: string) => void;
  }>
) {
  //todo [Stack] first and last El's border-radius
  const [Component] = useBox({
    bg: "#fff",
    borderRadius: 4,
    boxShadow:
      "rgb(101, 119, 134, 0.2) 0px 0px 15px,rgb(101, 119, 134, 0.15) 0px 0px 3px 1px",
  });
  const [Content] = useCustomBox(
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
  const [MenuItem] = useCustomBox(
    {
      borderbox: true,
    },
    {
      w: "100%",
      h: 52,
      p: "16px",
      hoverBg: "rgb(247, 249, 249)",
      cursor: "pointer",
      color: "rgb(83, 100, 113)",
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
      userSelect: "none",
    }
  );
  const [MenuWarningText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_default15,
    {
      w: "100%",
      lineHeight: 20,
      textOverflow: "ellipsis",
      overflow: "hidden",
      color: "#f4212e",
      userSelect: "none",
    }
  );
  const itemsMenu = MORE_MENU_ITEMS.map((item) => (
    <MenuItem
      key={item.name}
      onClick={() => {
        props.onSelect(item.name);
      }}
    >
      <Icon
        svg={item.icon}
        sx={{
          mr: "12px",
          w: 18.75,
          h: 18.75,
          color: item.name === "delete" ? "#f4212e" : undefined,
        }}
      />
      {item.name === "delete" ? (
        <MenuWarningText>{item.description}</MenuWarningText>
      ) : (
        <MenuText>{item.description}</MenuText>
      )}
    </MenuItem>
  ));
  return (
    <Component>
      <Content>{itemsMenu}</Content>
    </Component>
  );
}
