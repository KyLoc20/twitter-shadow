import * as React from "react";
import styled from "@emotion/styled";
import { useCustomBox, useCustomPaper } from "@/hooks/Container";
type AsideContentProps = {};
export default function AsideContentCard(
  props: React.PropsWithChildren<AsideContentProps>
) {
  const [Content] = useCustomBox({ vertical: true }, {});
  const [SearchWrapper] = useCustomBox(
    {},
    { h: 53, mb: "12px", position: "sticky", top: "0", bg: "#fff", zIndex: 10 }
  );
  const [SearchPlaceholder] = useCustomPaper(
    { bg: "rgb(239, 243, 244)", borderRadius: 9999 },
    { w: 350, h: 42, mt: "6px" }
  );
  const [TrendsPlaceholder] = useCustomPaper(
    { bg: "rgb(247, 249, 249)", borderRadius: 16 },
    { w: 350, h: 530, mb: "16px" }
  );
  const [FollowRecommendationPlaceholder] = useCustomPaper(
    { bg: "rgb(247, 249, 249)", borderRadius: 16 },
    { w: 350, h: 320 }
  );
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
const Component = styled.aside`
  width: 350px;
  margin-right: 10px;
`;
