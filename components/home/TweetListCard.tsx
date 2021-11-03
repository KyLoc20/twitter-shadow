import * as React from "react";
import styled from "@emotion/styled";
import { useCustomBox, useCustomStack } from "@/hooks/Container";
import { default as TweetCard } from "./TweetCard";
import { Tweet } from "./types/common";
type TweetListCardProps = {
  children?: React.ReactNode;
  tweets: Tweet[];
};

export default function TweetListCard(props: TweetListCardProps) {
  const itemsTweet = props.tweets.map((item, index) => (
    <TweetCard key={item.uid} {...item}></TweetCard>
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
