import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { genCustomBox, genBox } from "@/components/generic/containers/Box";
import DetailInfoCard from "./DetailCard";
import { User } from "@/stores/user";
export default function UserProfileCard(
  props: PropsWithChildren<TUserProfileCard>
) {
  return (
    <Component>
      <Content>
        <Cover coverUrl={props.user.coverUrl} />
        <DetailInfoCard user={props.user} />
      </Content>
    </Component>
  );
}
type TUserProfileCard = {
  user: User;
};
const Component = styled.div``;

const Content = genCustomBox({ vertical: true }, { w: "100%" });
function Cover(props: { coverUrl?: string }) {
  //todo scale by ratio
  const Component = genBox({
    h: 200,
    bg: props.coverUrl
      ? `no-repeat url(${props.coverUrl}) center/cover`
      : DEFAULT_COVER,
  });
  return <Component></Component>;
}
const DEFAULT_COVER = "rgb(207, 217, 222)";
