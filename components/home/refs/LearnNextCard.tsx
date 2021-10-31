import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox } from "@/hooks/Container";
type LearnNextProps = {
  children?: React.ReactNode;
};
export default function LearnNextCard(props: LearnNextProps) {
  const winSize = useWindowSize();
  const [Content] = useCustomBox(
    {
      vertical: true,
    },
    {
      w: "100%",
      overflow: "hidden",
      AI: "center",
      p: "100px 16px",
      m: "0 auto",
      maxWidth: 992,
    }
  );
  const [Title] = useCustomText(HTMLTag.div, CustomTextType.Title_default32, {
    boxSizing: "border-box",
    w: "100%",
    p: isMobile(winSize.width) ? "0 10px" : undefined,
    mb: "16px",
    lineHeight: "1.3",
    textAlign: "center",
  });
  const [SubTitle] = useCustomText(HTMLTag.div, CustomTextType.Title_lightB16, {
    boxSizing: "border-box",
    w: "100%",
    p: isMobile(winSize.width) ? "0 10px" : undefined,
    mb: isMobile(winSize.width) ? "32px" : "60px",
    lineHeight: "1.65",
    textAlign: "center",
  });
  const [StartButton] = useCustomButton(CustomButtonType.Content_h45_primary);

  const [Figure] = useCustomBox(
    {
      noFlex: true,
    },
    {
      w: "100%",
      mb: "60px",
      maxWidth: 992,
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
    }
  );
  const [Image] = useCustomBox(
    {},
    {
      h: isMobile(winSize.width) ? 190 : 495,
      bg: `url(/images/learn.png) top/contain no-repeat`,
    }
  );
  return (
    <Component>
      <Content>
        <Title>Learn Next.js</Title>
        <SubTitle>Learn Next.js step-by-step and earn points ✨.</SubTitle>
        <Figure>
          {/* <Link href="https://nextjs.org/learn/basics/create-nextjs-app">
            <Image />
          </Link> */}
          <Link href="https://nextjs.org/learn/basics/create-nextjs-app">
            <Image />
          </Link>
        </Figure>
        <StartButton>Get Started</StartButton>
      </Content>
    </Component>
  );
}
const Component = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; //width: 1024px;
`;
