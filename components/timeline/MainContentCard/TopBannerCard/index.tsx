import * as React from "react";
import styled from "@emotion/styled";
import { defineCustomBox } from "@/components/generic/containers/Box";
import { TopTweetsButton } from "./widgets";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";

export default function TopBannerCard(
  props: React.PropsWithChildren<TopBannerProps>
) {
  return (
    <Component>
      <Content>
        <HeaderText>Home</HeaderText>
        <TopTweetsButton />
      </Content>
    </Component>
  );
}
type TopBannerProps = {};
const Component = styled.section`
  position: sticky;
  top: 0;
  height: 53px;
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 10;
  background: #fff;
  border-top: 1px solid rgb(239, 243, 244);
  border-bottom: 1px solid rgb(239, 243, 244);
`;
const genFlexBox = defineCustomBox();
const Content = genFlexBox({
  JC: "space-between",
  AI: "center",
  h: "100%",
});
const HeaderText = genCustomText(HTMLTag.span, TextPreset.Title_default20, {
  w: "100%",
  lineHeight: 24,
  textOverflow: "ellipsis",
  overflow: "hidden",
});
