import * as React from "react";
import styled from "@emotion/styled";
import { TweetStore, Tweet } from "@/stores/tweet";
import TweetCard from "./TweetCard";
import { genCustomBox } from "@/components/generic/containers/Box";

export default function TweetListCard(
  props: React.PropsWithChildren<TTweetListCard>
) {
  const { state, dispatch } = React.useContext(TweetStore);
  const isForUser = props.username != null;
  const itemsAllTweet = React.useMemo(() => {
    let tweets = state.tweets
      .slice()
      .sort((a, b) => b.timestamp.valueOf() - a.timestamp.valueOf())
      .map((item, index) => <TweetCard key={item.id} {...item}></TweetCard>);
    return tweets;
  }, [state.tweets]);
  const itemsUserTweet = React.useMemo(() => {
    let tweets = state.tweets
      .slice()
      .filter((item) => item.user.username === props.username)
      .sort((a, b) => b.timestamp.valueOf() - a.timestamp.valueOf())
      .map((item, index) => <TweetCard key={item.id} {...item}></TweetCard>);
    return tweets;
  }, [state.tweets, props.username]);

  return (
    <Component>
      <Content>{isForUser ? itemsUserTweet : itemsAllTweet}</Content>
    </Component>
  );
}
type TTweetListCard = {
  username?: string;
};
const Component = styled.section`
  margin-top: 4px;
  box-sizing: border-box;
`;
const Content = genCustomBox({
  vertical: true,
});
