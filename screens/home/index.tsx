import styled from "@emotion/styled";
import Head from "next/head";
import AppBarCard from "@/components/home/AppBarCard";
import MainContnetCard from "@/components/home/MainContentCard";
import React from "react";
import { useCustomBox } from "@/hooks/Container";
type HomePageProps = {
  children?: React.ReactNode;
};
export default function HomePage(props: HomePageProps) {
  const [Content] = useCustomBox(
    {
      noFlex: true,
    },
    {
      m: "0 auto",
      maxWidth: 1265, //275+990
    }
  );
  return (
    <Container>
      <Head>
        <title>Next.js by Kyloc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <AppBarCard></AppBarCard>
        <MainContnetCard></MainContnetCard>
      </Content>
    </Container>
  );
}
const Container = styled("section")`
  position: relative;
  background: #fff;
  min-height: 100vh;
`;
