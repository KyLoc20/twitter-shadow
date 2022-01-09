import * as React from "react";
import styled from "@emotion/styled";
import { genCustomBox } from "@/components/generic/containers/Box";
import TopBannerCard from "./TopBannerCard";
import TweetEditorCard from "./TweetEditorCard";
import TweetListCard from "./TweetListCard";
import UserProfileCard from "./UserProfileCard";
import TweetTabCard from "./TweetTabCard";
import { TweetStoreProvider } from "@/stores/tweet";
import { UserStore, User } from "@/stores/user";
import API from "@/api/index";
export { HomeMainContentCard, UserMainContentCard };
function HomeMainContentCard(props: React.PropsWithChildren<{}>) {
  return (
    <Component>
      <Content>
        <TopBannerCard></TopBannerCard>
        <TweetEditorCard></TweetEditorCard>
        <TweetListCard></TweetListCard>
      </Content>
    </Component>
  );
}

//TODO you can even kick off fetching here as early as possible
function UserMainContentCard(
  props: React.PropsWithChildren<TUserMainContentCard>
) {
  const [owner, setOwner] = React.useState<User | null>(null);
  React.useEffect(() => {
    API.User.getUser(props.username).then((res) => {
      if (res.good) setOwner(res.result as User);
    });
  }, [props.username]);
  if (owner == null)
    return (
      <Component>
        <Content>
          <TopBannerCard nickname={"Loading..."}></TopBannerCard>
          <TweetTabCard />
          <TweetListCard username={props.username}></TweetListCard>
        </Content>
      </Component>
    );
  else
    return (
      <Component>
        <Content>
          <TopBannerCard nickname={owner.nickname}></TopBannerCard>
          <UserProfileCard user={owner} />
          <TweetTabCard />
          <TweetListCard username={props.username}></TweetListCard>
        </Content>
      </Component>
    );
}
type TUserMainContentCard = {
  username: string;
};
const Component = styled.main`
  width: 100%;
  margin-left: 275px;
  max-width: 600px;

  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);
`;
const Content = genCustomBox(
  {
    vertical: true,
  },
  {
    minHeight: "100vh",
    position: "relative",
  }
);
