import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { Link } from "../generic/Link";
type TopNewsProps = {
  children?: React.ReactNode;
};
export default function TopNewsCard(props: TopNewsProps) {
  const [BadgeText] = useCustomText(HTMLTag.span, CustomTextType.Badge, {
    lineHeight: 21,
  });
  const [HighlightText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_default14_bold
  );
  const [ContentText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_default14
  );
  return (
    <Component>
      <Paper>
        <Link href="https://nextjs.org/conf">
          <Content>
            <Badge>
              <BadgeText>NEW</BadgeText>
            </Badge>
            <HighlightText>Next.js Conf: </HighlightText>
            <ContentText></ContentText>
            <ContentText>
              {
                " Celebrate 5 years of Next.js at our Global Community Conference."
              }
            </ContentText>
            <HighlightText>Claim Ticket →</HighlightText>
          </Content>
        </Link>
      </Paper>
    </Component>
  );
}
const Component = styled.section`
  display: flex;
  margin: 0 auto;
  // padding: 0 16px;
  align-items: flex-end;
  justify-content: center;
  width: 100%; //width: 992px;
`;
const Paper = styled.div`
  margin: 0 16px;
  background: #fafafa;
  border: 2px solid #eaeaea;
  border-radius: 8px;
  padding: 10px;
`;
const Content = styled.div`
  //for content
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // height: 25px;
  letter-spacing: 0.02em;
`;
const Badge = styled.div`
  margin-right: 5px;
  padding: 1px 8px;
  background: linear-gradient(
    90deg,
    rgb(237, 98, 146) 25%,
    rgb(237, 87, 96) 87.5%
  );
  border-radius: 5px;
`;
