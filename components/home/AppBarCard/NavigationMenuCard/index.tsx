import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import {
  genBox,
  genCustomBox,
  defineCustomBox,
} from "@/components/generic/containers/Box";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import Icon from "@/components/generic/Icon";
import { NAVIGATION_ITEMS, Logo } from "./widgets";
type NavigationMenuCardProps = {};

export default function NavigationMenuCard(
  props: React.PropsWithChildren<NavigationMenuCardProps>
) {
  const [NavigationText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Navigation_default20,
    {
      lineHeight: 24,
      ml: "20px",
      mr: "16px",
    }
  );

  const itemsNavigationMenu = NAVIGATION_ITEMS.map((item) => (
    <Navigation key={item.name}>
      <Icon svg={item.icon} />
      <NavigationText>{item.name}</NavigationText>
    </Navigation>
  ));
  return (
    <Component>
      <Logo></Logo>
      {itemsNavigationMenu}
      <TweetButton>Tweet</TweetButton>
    </Component>
  );
}
const Component = genCustomBox(
  {
    vertical: true,
  },
  {
    w: "100%",
    overflow: "hidden",
    flexShrink: "0",
    AI: "flex-start",
  }
);
const genButton50Primary = defineCustomButton(
  ButtonPreset.Navigation_primary50
);
const genButton50 = defineCustomButton(ButtonPreset.Navigation_default50);
const TweetButton = genButton50Primary({ wrapper: { my: "12px" } });
const Navigation = genButton50();
