import * as React from "react";
import styled from "@emotion/styled";
import {
  genBox,
  genCustomBox,
  defineCustomBox,
} from "@/components/generic/containers/Box";
import Editor from "./Editor";
type TweetEditorProps = {};

export default function TweetEditorCard(
  props: React.PropsWithChildren<TweetEditorProps>
) {
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
const AvatarImage = genFlexBox({
  w: 48,
  h: 48,
  borderRadius: "50%",
  bg: "red",
});
