import * as React from "react";
import styled from "@emotion/styled";
import { useCustomBox, useCustomStack } from "@/hooks/Container";
import { default as TweetCard, Tweet } from "./TweetCard";
type TweetListCardProps = {
  children?: React.ReactNode;
  tweets: Tweet[];
};

const TestTweets: Tweet[] = [
  {
    uid: 1,
    user: {
      nickname: "Elon Musk",
      username: "@elonmusk",
      avatarUrl: "red",
    },
    content: "Humankind\n煮豆燃豆萁\n豆在釜中泣\n本是同根生\n相煎何太急",
    timestamp: "2h",
    replies: 1,
    likes: 2,
    retweets: 3,
  },
];
export default function TweetListCard(props: TweetListCardProps) {
  const itemsTweet = TestTweets.map((item, index) => (
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
