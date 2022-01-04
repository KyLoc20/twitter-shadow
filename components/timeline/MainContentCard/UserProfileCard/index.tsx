import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { genCustomBox, genBox } from "@/components/generic/containers/Box";
import DetailInfoCard from "./DetailCard";
export default function UserProfileCard(
  props: PropsWithChildren<TUserProfileCard>
) {
  return (
    <Component>
      <Content>
        <Cover coverUrl={"/covers/tourist.jpg"} />
        <DetailInfoCard />
      </Content>
    </Component>
  );
}
type TUserProfileCard = {
  coverUrl?: string;
};
const Component = styled.div``;
const Content = genCustomBox({ vertical: true }, { w: "100%" });
function Cover(props: { coverUrl: string }) {
  //todo scale by ratio
  const Component = genBox({
    h: 200,
    bg: `no-repeat url(${props.coverUrl}) center/cover`,
  });
  return <Component></Component>;
}
