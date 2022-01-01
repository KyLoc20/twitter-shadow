import styled from "@emotion/styled";
import Head from "next/head";
import AppBarCard from "@/components/home/AppBarCard";
import MainContentCard from "@/components/home/MainContentCard";
import AsideContentCard from "@/components/home/AsideContentCard";
import React from "react";
import { genCustomBox } from "@/components/generic/containers/Box";
import { UserStoreProvider } from "@/stores/user";
import { TweetStoreProvider } from "@/stores/tweet";
type HomePageProps = {
  children?: React.ReactNode;
};
export default function HomePage(props: HomePageProps) {
  return (
    <Container>
      <Head>
        <title>Home / Twitter Shadow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserStoreProvider>
        <Content>
          <AppBarCard></AppBarCard>
          <MainContentCard></MainContentCard>
          <AsideContentCard></AsideContentCard>
        </Content>
        <SigninModal id="signin-modal-container"></SigninModal>
      </UserStoreProvider>
    </Container>
  );
}
const Container = styled("section")`
  position: relative;
  background: #fff;
  min-height: 100vh;
`;
const Content = genCustomBox(
  {},
  {
    m: "0 auto",
    JC: "space-between",
    maxWidth: 1265, //275+990
  }
);
const SigninModal = styled.div``;
const RegisterModal = styled.div``;
