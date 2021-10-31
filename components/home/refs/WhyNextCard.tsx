import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { Link } from "@/components/generic/Link";
import FeatureCard from "./FeatureCard";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox, useCustomStack } from "@/hooks/Container";
type WhyNextProps = {
  children?: React.ReactNode;
};
export default function WhyNextCard(props: WhyNextProps) {
  const winSize = useWindowSize();
  const [Content] = useCustomBox(
    {
      vertical: true,
    },
    {
      w: "100%",
      overflow: "hidden",
      m: "0 auto",
      p: isMobile(winSize.width) ? "64px 16px" : "100px 16px",
      maxWidth: 992,
    }
  );
  const [Title] = useCustomText(HTMLTag.div, CustomTextType.Title_default32, {
    mb: "16px 0",
    lineHeight: "1.3",
    textAlign: "center",
  });
  const [SubTitle] = useCustomText(HTMLTag.div, CustomTextType.Title_lightB16, {
    mb: "48px",
    lineHeight: "1.65",
    textAlign: "center",
  });
  const featureItems = features.map((item, index) => (
    <FeatureCard
      key={index}
      title={item.title}
      description={item.description}
      docLink={item.docLink}
    ></FeatureCard>
  ));

  return (
    <Component>
      <Content>
        <Title>Why Next.js</Title>
        <SubTitle>The world’s leading companies use and love Next.js</SubTitle>
        <FeatureGrid
          style={{
            gridTemplateColumns: isMobile(winSize.width)
              ? undefined
              : "repeat(3, minmax(0, 1fr))",
          }}
        >
          {featureItems}
        </FeatureGrid>
        <AndMore isMobile={isMobile(winSize.width)}></AndMore>
      </Content>
    </Component>
  );
}
type AndMoreProps = {
  children?: React.ReactNode;
  isMobile: boolean;
};
function AndMore(props: AndMoreProps) {
  const [MoreText] = useCustomText(
    HTMLTag.div,
    CustomTextType.Content_default14,
    { textAlign: props.isMobile ? "left" : "center" }
  );
  const [LinkText] = useCustomText(HTMLTag.span, CustomTextType.Link_primary14);
  const innerContent = (
    <MoreText>
      Support for{" "}
      <Link href="https://nextjs.org/docs/basic-features/environment-variables">
        <LinkText>environment variables</LinkText>
      </Link>
      ,
      <Link href="https://nextjs.org/docs/advanced-features/preview-mode">
        <LinkText>preview mode</LinkText>
      </Link>
      ,
      <Link href="https://nextjs.org/docs/api-reference/next/head">
        <LinkText>custom head tags</LinkText>
      </Link>
      ,
      <Link href="https://nextjs.org/docs/basic-features/supported-browsers-features#polyfills">
        <LinkText>automatic polyfills</LinkText>
      </Link>
      , and more.
    </MoreText>
  );
  const [More] = useCustomBox(
    {
      JC: "center",
    },
    {
      m: props.isMobile ? "24px 0 0" : "40px 0",
    }
  );
  if (props.isMobile)
    return (
      <More>
        <FeatureCard title="And more" description={innerContent}></FeatureCard>
      </More>
    );
  else return <More>{innerContent}</More>;
}
const Component = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; //width: 992px;
  margin: 0 auto;
`;

const FeatureGrid = styled.div`
  margin: 0 auto;
  max-width: 992px;
  display: grid;
  grid-gap: 24px;
  gap: 24px;
`;
type Feature = {
  title: string;
  description: string;
  docLink: string;
};
const features: Feature[] = [
  {
    title: "Image Optimization",
    description:
      "<Image> and Automatic Image Optimization with instant builds.",
    docLink: "https://nextjs.org/docs/basic-features/image-optimization",
  },
  {
    title: "Internationalization",
    description:
      "Built-in Domain & Subdomain Routing and Automatic Language detection.",
    docLink: "https://nextjs.org/docs/advanced-features/i18n-routing",
  },
  {
    title: "Next.js Analytics",
    description:
      "A true lighthouse score based on real visitor data & page-by-page insights",
    docLink: "https://nextjs.org/analytics",
  },
  {
    title: "Zero Config",
    description:
      "Automatic compilation and bundling. Optimized for production from the start.",
    docLink: "https://nextjs.org/docs/getting-started",
  },
  {
    title: "Hybrid: SSG and SSR",
    description:
      "Pre-render pages at build time (SSG) or request time (SSR) in a single project.",
    docLink: "https://nextjs.org/docs/basic-features/data-fetching",
  },
  {
    title: "Incremental Static Regeneration",
    description:
      "Add and update statically pre-rendered pages incrementally after build time.",
    docLink:
      "https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration",
  },
  {
    title: "TypeScript Support",
    description: "Automatic TypeScript configuration and compilation.",
    docLink: "https://nextjs.org/docs/basic-features/typescript",
  },
  {
    title: "Fast Refresh",
    description:
      "Fast, reliable live-editing experience, as proven at Facebook scale.",
    docLink: "https://nextjs.org/docs/basic-features/fast-refresh",
  },
  {
    title: "File-system Routing",
    description: "Every component in the 'page' directory becomes a route.",
    docLink: "https://nextjs.org/docs/basic-features/typescript",
  },
  {
    title: "API Routes",
    description:
      "Optionally create API endpoints to provide backend functionality.",
    docLink: "https://nextjs.org/docs/api-routes/introduction",
  },
  {
    title: "Built-in CSS Support",
    description:
      "Create component-level styles with CSS modules. Built-in Sass support.",
    docLink: "https://nextjs.org/docs/basic-features/built-in-css-support",
  },
  {
    title: "Code-splitting and Bundling",
    description:
      "Optimized bundle splitting algorithm created by the Google Chrome team.",
    docLink: "https://nextjs.org/docs",
  },
];
