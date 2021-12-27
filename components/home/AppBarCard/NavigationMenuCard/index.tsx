import * as React from "react";
import styled from "@emotion/styled";
import { CustomButtonType, defineCustomButton } from "@/hooks/Button";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import {
  genBox,
  genCustomBox,
  defineCustomBox,
} from "@/components/generic/containers/Box";
import Icon from "@/components/generic/Icon";
import { NAVIGATION_ITEMS, Logo } from "./widgets";
type NavigationMenuCardProps = {};

export default function NavigationMenuCard(
  props: React.PropsWithChildren<NavigationMenuCardProps>
) {
  const [TweetButton] = useButton50Primary({ wrapper: { my: "12px" } });
  const [Navigation] = useButton50();
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
const useButton50Primary = defineCustomButton(
  CustomButtonType.Navigation_primary50
);
const useButton50 = defineCustomButton(CustomButtonType.Navigation_default50);
