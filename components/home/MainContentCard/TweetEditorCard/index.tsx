import * as React from "react";
import styled from "@emotion/styled";
import { defineCustomBox, useCustomBox, useBox } from "@/hooks/Container";
import Editor from "./Editor";
type TweetEditorProps = {};
const useFlexBox = defineCustomBox();
export default function TweetEditorCard(
  props: React.PropsWithChildren<TweetEditorProps>
) {
  const [Content] = useFlexBox({
    p: "8px 0",
  });
  const [Avatar] = useFlexBox({
    mr: "12px",
  });
  const [AvatarImage] = useFlexBox({
    w: 48,
    h: 48,
    borderRadius: "50%",
    bg: "red",
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
const Component = styled.section`
  min-height: 145px;
  padding: 0 16px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);
`;
