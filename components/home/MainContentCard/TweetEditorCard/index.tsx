import * as React from "react";
import styled from "@emotion/styled";
import { defineCustomBox } from "@/components/generic/containers/Box";
import Editor from "./Editor";
import { UserStore } from "@/stores/user";
export default function TweetEditorCard(
  props: React.PropsWithChildren<TweetEditorProps>
) {
  const { state, dispatch } = React.useContext(UserStore);
  const AvatarImage = genFlexBox({
    w: 48,
    h: 48,
    borderRadius: "50%",
    bg: `url(${state.avatarUrl})`,
    bgSize: "contain",
  });
  return (
    <Component>
      <Content>
        <Avatar>
          <AvatarImage />
        </Avatar>
        <Editor />
      </Content>
    </Component>
  );
}
type TweetEditorProps = {};
const Component = styled.section`
  min-height: 145px;
  padding: 0 16px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);
`;
const genFlexBox = defineCustomBox();
const Content = genFlexBox({
  p: "8px 0",
});
const Avatar = genFlexBox({
  mr: "12px",
});
