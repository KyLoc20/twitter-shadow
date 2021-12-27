import * as React from "react";
import styled from "@emotion/styled";
import {
  genBox,
  genCustomBox,
  defineCustomBox,
} from "@/components/generic/containers/Box";
import UserInfoCard from "./UserInfoCard";
import NavigationMenuCard from "./NavigationMenuCard";

type AppBarProps = {
  children?: React.ReactNode;
};
export default function AppBarCard(props: AppBarProps) {
  return (
    <Component className="app-bar">
      <Content>
        <NavigationMenuCard></NavigationMenuCard>
        <UserInfoCard></UserInfoCard>
      </Content>
    </Component>
  );
}
const Component = styled.header`
  width: 275px;
  height: 100vh;
  position: fixed;
  z-index: 20;
`;
const Content = genCustomBox(
  //todo flex overflow-y
  {
    vertical: true,
    borderbox: true,
  },
  {
    w: "100%",
    h: "100%",
    minHeight: 512,
    // overflow: "auto",
    JC: "space-between",
    p: "0 12px",
  }
);
