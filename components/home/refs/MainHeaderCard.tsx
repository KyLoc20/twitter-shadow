import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox, useCustomStack } from "@/hooks/Container";
type MainHeaderProps = {
  children?: React.ReactNode;
};
export default function MainHeaderCard(props: MainHeaderProps) {
  const winSize = useWindowSize();
  const [Content] = useCustomBox(
    {
      vertical: true,
    },
    {
      w: "100%",
      overflow: "hidden",
      m: "0 auto",
      p: isMobile(winSize.width) ? "40px 16px 50px" : "120px 16px 30px",
      maxWidth: 992,
    }
  );
  const [Title] = useCustomText(
    HTMLTag.h1,
    isMobile(winSize.width)
      ? CustomTextType.Title_default48
      : CustomTextType.Title_default100,
    {
      mb: "30px",
      textAlign: "center",
    }
  );
  const [Description] = useCustomText(
    HTMLTag.h3,
    isMobile(winSize.width)
      ? CustomTextType.Content_lightC16
      : CustomTextType.Content_lightC20,
    {
      lineHeight: "1.6",
      mb: "40px",
      textAlign: "center",
    }
  );
  const [StartLearningButton] = useCustomButton(
    CustomButtonType.Content_h45_primary
  );
  const [DocumentationButton] = useCustomButton(
    CustomButtonType.Content_h45_plain
  );
  const [License] = useCustomText(HTMLTag.span, CustomTextType.Title_lightB16, {
    p: "0 8px",
  });
  const [GithubButton] = useCustomButton(
    CustomButtonType.Content_h34_primary_text
  );
  const [ButtonWrapper] = useCustomStack({ ep: "10px", m: "0 0 30px 0" });
  const [OtherInfo] = useCustomStack({ ep: "0 8px" });
  return (
    <Component>
      <Content>
        <Title>The React Framework for Production</Title>
        <Description>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed.
        </Description>
        <ButtonWrapper>
          <StartLearningButton>Start Learning</StartLearningButton>
          <DocumentationButton>Documentation</DocumentationButton>
        </ButtonWrapper>
        <OtherInfo>
          <Link href="https://github.com/vercel/next.js/blob/canary/license.md">
            <License>License: MIT</License>
          </Link>
          <GithubButton>Github</GithubButton>
        </OtherInfo>
      </Content>
    </Component>
  );
}
const Component = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; //width: 992px;
  margin: 0 auto;
`;
