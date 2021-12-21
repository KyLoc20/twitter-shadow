import * as React from "react";
import styled from "@emotion/styled";
import { Component, TopTweetsButton } from "./widgets";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomBox, defineCustomBox } from "@/hooks/Container";
type TopBannerProps = {};
const useFlexBox = defineCustomBox();
export default function TopBannerCard(
  props: React.PropsWithChildren<TopBannerProps>
) {
  const [Content] = useFlexBox({
    JC: "space-between",
    AI: "center",
    h: "100%",
  });
  const [HeaderText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Title_default20,
    {
      w: "100%",
      lineHeight: 24,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  return (
    <Component>
      <Content>
        <HeaderText>Home</HeaderText>
        <TopTweetsButton />
      </Content>
    </Component>
  );
}
