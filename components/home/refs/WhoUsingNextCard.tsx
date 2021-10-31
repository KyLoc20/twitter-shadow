import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox } from "@/hooks/Container";
import CaseStudyEntranceCard from "./CaseStudyEntranceCard";
import FamousCaseCard from "./FamousCaseCard";
type WhoUsingNextCardProps = {
  children?: React.ReactNode;
};
export default function WhoUsingNextCard(props: WhoUsingNextCardProps) {
  const winSize = useWindowSize();
  const [Content] = useCustomBox(
    {
      vertical: true,
      AI: "center",
    },
    {
      p: "100px 0",
      bg: "rgb(250, 250, 250)",
      borderTop: "1px solid rgb(234, 234, 234)",
      borderBottom: "1px solid rgb(234, 234, 234)",
    }
  );

  const [CaseWrapper] = useCustomBox(
    {
      JC: isMobile(winSize.width) ? undefined : "center",
      wrap: isMobile(winSize.width) ? true : false,
    },
    {
      w: "100%",
      overflow: "hidden",
      m: isMobile(winSize.width) ? "80px 0 32px" : "80px 0 0",
      p: isMobile(winSize.width) ? undefined : "50px 0 32px",
    }
  );
  const caseItems = isMobile(winSize.width)
    ? //no transform
      FamousCases.map((item, index) => (
        <FamousCaseCard
          winWidth={winSize.width}
          key={index}
          zIndex={1}
          offsetX={0}
          offsetY={0}
          scale={1}
          name={item.name}
          caseLink={item.caseLink}
          imgUrl={item.imgUrl}
        />
      ))
    : //with transform
      FamousCases.map((item, index) => (
        <FamousCaseCard
          winWidth={winSize.width}
          key={index}
          zIndex={item.zIndex}
          offsetX={item.offsetX}
          offsetY={item.offsetY}
          scale={item.scale}
          name={item.name}
          caseLink={item.caseLink}
          imgUrl={item.imgUrl}
        />
      ));
  const [Title] = useCustomText(HTMLTag.div, CustomTextType.Title_default32, {
    boxSizing: "border-box",
    w: "100%",
    p: "0 10px",
    maxWidth: 1024,
    lineHeight: "1.3",
    textAlign: "center",
    mb: "16px",
  });
  const [SubTitle] = useCustomText(HTMLTag.div, CustomTextType.Title_lightB16, {
    boxSizing: "border-box",
    w: "100%",
    p: "0 10px",
    maxWidth: 1024,
    lineHeight: "1.65",
    textAlign: "center",
  });
  const [ViewShowcaseButton] = useCustomButton(
    CustomButtonType.Content_h45_primary
  );
  return (
    <Component>
      <Content>
        <CaseStudyEntranceCard />
        <Title>Who’s Using Next.js</Title>
        <SubTitle>
          We’re honored some of the most talented creatives out there build with
          Next.js
        </SubTitle>
        <CaseWrapper>{caseItems}</CaseWrapper>
        <ViewShowcaseButton>View Showcase</ViewShowcaseButton>
      </Content>
    </Component>
  );
}
const Component = styled.section``;

const FamousCases = [
  {
    zIndex: 1,
    offsetX: -4,
    offsetY: -105,
    scale: 0.67,
    name: "TikTok",
    caseLink: "https://nextjs.org/showcase/tiktok",
    imgUrl: "/images/cases/tiktok.jpg",
  },
  {
    zIndex: 2,
    offsetX: -27,
    offsetY: -70,
    scale: 0.78,
    name: "Netflix Jobs",
    caseLink: "https://nextjs.org/showcase/netflix-jobs",
    imgUrl: "/images/cases/netflix.jpg",
  },
  {
    zIndex: 3,
    offsetX: -25,
    offsetY: -25,
    scale: 0.89,
    name: "Twitch",
    caseLink: "https://nextjs.org/showcase/twitch",
    imgUrl: "/images/cases/twitch.jpg",
  },
  {
    zIndex: 4,
    offsetX: 0,
    offsetY: 0,
    scale: 1,
    name: "Github Copilot",
    caseLink: "https://nextjs.org/showcase/github",
    imgUrl: "/images/cases/github.jpg",
  },
  {
    zIndex: 3,
    offsetX: 25,
    offsetY: -25,
    scale: 0.89,
    name: "Hulu",
    caseLink: "https://nextjs.org/showcase/hulu",
    imgUrl: "/images/cases/hulu.jpg",
  },
  {
    zIndex: 2,
    offsetX: 27,
    offsetY: -70,
    scale: 0.78,
    name: "Nike",
    caseLink: "https://nextjs.org/showcase/nike",
    imgUrl: "/images/cases/nike.jpg",
  },
  {
    zIndex: 1,
    offsetX: 4,
    offsetY: -105,
    scale: 0.67,
    name: "realtor.com",
    caseLink: "https://nextjs.org/showcase/realtor",
    imgUrl: "/images/cases/realtor.jpg",
  },
];
