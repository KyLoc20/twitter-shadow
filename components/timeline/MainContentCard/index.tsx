import * as React from "react";
import styled from "@emotion/styled";
import { genCustomBox } from "@/components/generic/containers/Box";
import TopBannerCard from "./TopBannerCard";
import TweetEditorCard from "./TweetEditorCard";
import TweetListCard from "./TweetListCard";
import { TweetStoreProvider } from "@/stores/tweet";
import { UserStore, User } from "@/stores/user";
export default function HomeMainContentCard(
  props: React.PropsWithChildren<TMainContentCard>
) {
  return (
    <Component>
      <Content>
        <TopBannerCard></TopBannerCard>
        <TweetStoreProvider>
          <TweetEditorCard></TweetEditorCard>
          <TweetListCard></TweetListCard>
        </TweetStoreProvider>
      </Content>
    </Component>
  );
}
export function UserMainContentCard(
  props: React.PropsWithChildren<TMainContentCard>
) {
  const { state: userState, dispatch: userDispatch } =
    React.useContext(UserStore);
  return (
    <Component>
      <Content>
        <TopBannerCard nickname={userState.nickname}></TopBannerCard>
        <TweetStoreProvider>
          <TweetListCard username={userState.username}></TweetListCard>
        </TweetStoreProvider>
      </Content>
    </Component>
  );
}
type TMainContentCard = {};
const Component = styled.main`
  width: 100%;
  margin-left: 275px;
  max-width: 600px;
  box-sizing: border-box;

  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);
`;
const Content = genCustomBox(
  {
    vertical: true,
  },
  {
    minHeight: "200vh",
    position: "relative",
  }
);
