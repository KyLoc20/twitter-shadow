import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { Link } from "../generic/Link";
import * as SVG from "@/components/generic/SVG";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox } from "@/hooks/Container";
type FooterProps = {
  children?: React.ReactNode;
};
export default function FooterCard(props: FooterProps) {
  const winSize = useWindowSize();
  const [Content] = useCustomBox(
    {
      noFlex: true,
      borderbox: true,
    },
    {
      overflow: "hidden",
      m: "0 auto",
      p: "32px 16px 64px",
      maxWidth: 1024,
    }
  );
  const [CopyrightText] = useCustomText(
    HTMLTag.p,
    CustomTextType.Content_light12,
    { mt: "8px" }
  );
  return (
    <Component>
      <Content>
        <Grid
          style={{
            gridTemplateColumns: isMobile(winSize.width)
              ? "1fr 1fr"
              : "1fr 1fr 1fr 1fr",
          }}
        >
          <NavigationCard
            {...NavigationGeneral}
            isMobile={isMobile(winSize.width)}
          ></NavigationCard>
          <NavigationCard
            {...NavigationMore}
            isMobile={isMobile(winSize.width)}
          ></NavigationCard>
          <NavigationCard
            {...NavigationAbout}
            isMobile={isMobile(winSize.width)}
          ></NavigationCard>
          <NavigationCard
            {...NavigationLegal}
            isMobile={isMobile(winSize.width)}
          ></NavigationCard>
        </Grid>
        <CopyRight>
          <svg width={88} height={20} viewBox="0 0 283 64">
            <SVG.Group {...VercelSVG}></SVG.Group>
          </svg>
          <CopyrightText>
            Copyright © 2021 Vercel, Inc. All rights reserved.
          </CopyrightText>
        </CopyRight>
      </Content>
    </Component>
  );
}
type Navigation = {
  link: string;
  name: string;
};
type NavigationProps = {
  items: Navigation[];
  title: string;
};
type NavigationCard = {
  children?: React.ReactNode;
  isMobile: boolean;
} & NavigationProps;
function NavigationCard(props: NavigationCard) {
  const [TitleText] = useCustomText(
    HTMLTag.h4,
    CustomTextType.Title_default14,
    { m: props.isMobile ? undefined : "19px 0 12px" }
  );
  const [NavigationText] = useCustomText(
    HTMLTag.p,
    CustomTextType.Link_light14,
    {
      mb: props.isMobile ? undefined : "4px",
      p: props.isMobile ? "15px 0" : undefined,
      lineHeight: 23,
    }
  );
  const navigationItems = props.items.map((item, index) => (
    <Link href={item.link} key={index}>
      <NavigationText>{item.name}</NavigationText>
    </Link>
  ));
  return (
    <NavigationList>
      <TitleText>{props.title}</TitleText>
      {navigationItems}
    </NavigationList>
  );
}
const Component = styled.section`
  //paper
  background-color: #fafafa;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
`;
const Grid = styled.div`
  display: grid;
  grid-row-gap: 2rem;
`;
const CopyRight = styled.div`
  margin-top: 48px;
`;
const NavigationList = styled.div``;
const NavigationGeneral: NavigationProps = {
  title: "General Resources",
  items: [
    { name: "Docs", link: "https://nextjs.org/docs" },

    {
      name: "Learn",
      link: "https://nextjs.org/learn/basics/create-nextjs-app",
    },

    { name: "Showcase", link: "https://nextjs.org/showcase" },

    { name: "Blog", link: "https://nextjs.org/blog" },
    { name: "Analytics", link: "https://nextjs.org/analytics" },

    { name: "Next.js Conf", link: "https://nextjs.org/conf" },
  ],
};

const NavigationMore: NavigationProps = {
  title: "More",
  items: [
    { name: "Commerce", link: "https://nextjs.org/commerce" },

    { name: "Contact Sales", link: "https://vercel.com/contact/sales" },

    { name: "Github", link: "https://github.com/vercel/next.js" },

    { name: "Releases", link: "https://github.com/vercel/next.js/releases" },
    { name: "Telemetry", link: "https://nextjs.org/telemetry" },
  ],
};

const NavigationAbout: NavigationProps = {
  title: "About Vercel",
  items: [
    { name: "Open Source Software", link: "https://vercel.com/oss" },

    { name: "Github", link: "https://github.com/vercel" },

    { name: "Twitter", link: "https://twitter.com/vercel" },
  ],
};

const NavigationLegal: NavigationProps = {
  title: "Legal",
  items: [
    { name: "Privacy Policy", link: "https://vercel.com/legal/privacy-policy" },
  ],
};

const VercelSVG = {
  path: [
    {
      d: "M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z",
    },
  ],
};
