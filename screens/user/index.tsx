import styled from "@emotion/styled";
import Head from "next/head";
import AppBarCard from "@/components/timeline/AppBarCard";
import { UserMainContentCard } from "@/components/timeline/MainContentCard";
import AsideContentCard from "@/components/timeline/AsideContentCard";
import React from "react";
import { genCustomBox } from "@/components/generic/containers/Box";
import { UserStoreProvider } from "@/stores/user";
import { useRouter } from "next/dist/client/router";
import { ParsedUrlQuery } from "querystring";
export default function UserTimelinePage(props: UserTimelinePageProps) {
  const { query, asPath } = useRouter();
  const username = getUsername(query, asPath, "@tourist");
  console.log("RENDER TimelinePage", query, asPath, username);

  React.useEffect(() => {
    console.log("RENDER TimelinePage useEffect");
  });
  return (
    <Container>
      <Head>
        <title>{username} / Twitter Shadow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserStoreProvider>
        <Content>
          <AppBarCard />
          <UserMainContentCard />
          <AsideContentCard />
        </Content>
        <SigninModal id="signin-modal-container" />
        <RegisterModal id="register-modal-container" />
      </UserStoreProvider>
    </Container>
  );
}
type UserTimelinePageProps = React.PropsWithChildren<{}>;
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
const removePrefix = (str: string) =>
  str.startsWith("@") ? str.slice(1) : str;
const getUsername = (
  query: ParsedUrlQuery,
  path: string,
  defaultName: string
) => {
  if (query.user != null && !Array.isArray(query.user))
    return query.user ?? defaultName;
  else path.split("/").shift() ?? defaultName;
};
