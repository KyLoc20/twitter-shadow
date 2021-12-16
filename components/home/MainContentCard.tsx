import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox, useCustomStack } from "@/hooks/Container";
import TopBannerCard from "./TopBannerCard";
import TweetEditorCard from "./TweetEditorCard";
import TweetListCard from "./TweetListCard";
import { TweetStoreProvider } from "@/stores/tweet";
type MainContentCard = {
  children?: React.ReactNode;
};
export default function MainContentCard(props: MainContentCard) {
  const winSize = useWindowSize();
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
        <TweetEditorCard></TweetEditorCard>
        <TweetStoreProvider>
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
