import * as React from "react";
import styled from "@emotion/styled";
import { TweetStore, Tweet } from "@/stores/tweet";
import TweetCard from "./TweetCard";
import { useCustomBox } from "@/hooks/Container";
type TweetListCardProps = {};

export default function TweetListCard(
  props: React.PropsWithChildren<TweetListCardProps>
) {
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
