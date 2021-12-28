import * as React from "react";
import styled from "@emotion/styled";
import { genBox, genCustomBox } from "@/components/generic/containers/Box";

export default function AsideContentCard(
  props: React.PropsWithChildren<AsideContentProps>
) {
  return (
    <Component>
      <Content>
        <SearchWrapper>
          <SearchPlaceholder />
        </SearchWrapper>
        <TrendsPlaceholder />
        <FollowRecommendationPlaceholder />
      </Content>
    </Component>
  );
}
type AsideContentProps = {};
const Component = styled.aside`
  width: 350px;
  margin-right: 10px;
`;
const Content = genCustomBox({ vertical: true });
const SearchWrapper = genCustomBox(
  {},
  { h: 53, mb: "12px", position: "sticky", top: "0", bg: "#fff", zIndex: 10 }
);
const SearchPlaceholder = genBox({
  w: 350,
  h: 42,
  mt: "6px",
  bg: "rgb(239, 243, 244)",
  borderRadius: 9999,
});
const TrendsPlaceholder = genBox({
  w: 350,
  h: 530,
  mb: "16px",
  bg: "rgb(247, 249, 249)",
  borderRadius: 16,
});
const FollowRecommendationPlaceholder = genBox({
  w: 350,
  h: 320,
  bg: "rgb(247, 249, 249)",
  borderRadius: 16,
});
