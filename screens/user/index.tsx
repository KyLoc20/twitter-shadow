import styled from "@emotion/styled";
import Head from "next/head";
import { default as LeftAppBar } from "@/components/timeline/AppBarCard";
import { UserMainContentCard as UserMainContent } from "@/components/timeline/MainContentCard";
import { default as RightAsideContent } from "@/components/timeline/AsideContentCard";
import React from "react";
import { genCustomBox } from "@/components/generic/containers/Box";
import { UserStoreProvider } from "@/stores/user";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
export default function UserTimelinePage(props: UserTimelinePageProps) {
  const { query, asPath } = useRouter();
  //Is this unsafe?
  const ownername = getUsername(query, asPath, "@tourist");

  //TODO what is the best practice to get query
  // const ownername = React.useMemo(() => {
  //   return getUsername(query, asPath, "@tourist");
  // }, [query, asPath]);
  return (
    <Container>
      <Head>
        <title>{ownername} / Twitter Shadow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserStoreProvider>
        <Content>
          <LeftAppBar />
          <UserMainContent username={ownername} />
          <RightAsideContent />
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
  console.log("RENDER TimelinePage getUsername", query, path);
  if (query.user != null && !Array.isArray(query.user))
    return query.user ?? defaultName;
  else return path.split("/").length > 0 ? path.split("/")[0] : defaultName;
};
