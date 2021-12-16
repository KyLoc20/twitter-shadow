import * as React from "react";
import styled from "@emotion/styled";
import { useCustomBox, useCustomStack } from "@/hooks/Container";
import { default as TweetCard } from "./TweetCard";

// import { Tweet } from "./types/common";
import { TweetStore, Tweet } from "@/stores/tweet";
type TweetListCardProps = {
  children?: React.ReactNode;
};

export default function TweetListCard(props: TweetListCardProps) {
  const { state, dispatch } = React.useContext(TweetStore);
  const itemsTweet = state.tweets.map((item, index) => (
    <TweetCard key={item.id} {...item}></TweetCard>
  ));
  const [Content] = useCustomBox(
    {
      vertical: true,
    },
    {}
  );
  return (
    <Component>
      <Content>{itemsTweet}</Content>
    </Component>
  );
}
const Component = styled.section`
  margin-top: 4px;
  box-sizing: border-box;
`;
