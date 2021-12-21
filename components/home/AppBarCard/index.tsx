import * as React from "react";
import styled from "@emotion/styled";
import { useCustomBox } from "@/hooks/Container";
import UserInfoCard from "./UserInfoCard";
import NavigationMenuCard from "./NavigationMenuCard";
type AppBarProps = {
  children?: React.ReactNode;
};
export default function AppBarCard(props: AppBarProps) {
  const [Content] = useCustomBox(
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
