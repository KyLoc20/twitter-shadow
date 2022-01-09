import styled from "@emotion/styled";
import Head from "next/head";
import { default as LeftAppBar } from "@/components/timeline/AppBarCard";
import { HomeMainContentCard as HomeMainContent } from "@/components/timeline/MainContentCard";
import { default as RightAsideContent } from "@/components/timeline/AsideContentCard";
import React from "react";
import { genCustomBox } from "@/components/generic/containers/Box";
import { UserStoreProvider } from "@/stores/user";
import { TweetStoreProvider } from "@/stores/tweet";
import { useRouter } from "next/router";
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
        <TweetStoreProvider>
          <Content>
            <LeftAppBar />
            <HomeMainContent />
            <RightAsideContent />
          </Content>
          <SigninModal id="signin-modal-container" />
          <RegisterModal id="register-modal-container" />
          <EditTweetModal id="edit-tweet-modal-container" />
        </TweetStoreProvider>
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
const EditTweetModal = styled.div``;
