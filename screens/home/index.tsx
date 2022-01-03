import styled from "@emotion/styled";
import Head from "next/head";
import AppBarCard from "@/components/timeline/AppBarCard";
import MainContentCard from "@/components/timeline/MainContentCard";
import AsideContentCard from "@/components/timeline/AsideContentCard";
import React from "react";
import { genCustomBox } from "@/components/generic/containers/Box";
import { UserStoreProvider } from "@/stores/user";
import { useRouter } from "next/dist/client/router";
export default function HomeTimelinePage(props: HomeTimelinePageProps) {
  const router = useRouter();
  console.log("RENDER TimelinePage", router.query, router.pathname);
  React.useEffect(() => {
    console.log("RENDER TimelinePage useEffect");
  });

  return (
    <Container>
      <Head>
        <title>Home / Twitter Shadow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserStoreProvider>
        <Content>
          <AppBarCard />
          <MainContentCard />
          <AsideContentCard />
        </Content>
        <SigninModal id="signin-modal-container" />
        <RegisterModal id="register-modal-container" />
      </UserStoreProvider>
    </Container>
  );
}
type HomeTimelinePageProps = React.PropsWithChildren<{}>;
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
