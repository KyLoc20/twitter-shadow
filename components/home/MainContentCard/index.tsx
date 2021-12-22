import * as React from "react";
import styled from "@emotion/styled";
import { useCustomBox } from "@/hooks/Container";
import TopBannerCard from "./TopBannerCard";
import TweetEditorCard from "./TweetEditorCard";
import TweetListCard from "./TweetListCard";
import { TweetStoreProvider } from "@/stores/tweet";
type MainContentCard = {
  children?: React.ReactNode;
};

export default function MainContentCard(props: MainContentCard) {
  console.log("RENDER MainContentCard");
  const [Content] = useCustomBox(
    {
      vertical: true,
    },
    {
      minHeight: "200vh",
      position: "relative",
    }
  );
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
const Component = styled.main`
  width: 100%;
  margin-left: 275px;
  max-width: 600px;
  box-sizing: border-box;

  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);
`;
