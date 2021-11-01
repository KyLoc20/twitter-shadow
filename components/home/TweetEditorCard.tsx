import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox, useCustomStack } from "@/hooks/Container";
import { default as SVG, SVGBasicProps } from "@/components/generic/SVG";
type TweetEditorProps = {
  children?: React.ReactNode;
};
export default function TweetEditorCard(props: TweetEditorProps) {
  const [Content] = useCustomBox(
    {},
    {
      p: "4px 0",
    }
  );
  //todo w: "100%" or  flex: "1", make it cover the rest container space
  const [HeaderText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Title_default20,
    {
      w: "100%",
      lineHeight: 24,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  const [ButtonWrapper] = useCustomBox(
    {},
    {
      minWidth: 56,
      AI: "center",
      JC: "flex-end",
    }
  );
  const [Avatar] = useCustomBox(
    {},
    {
      w: 48,
      mr: "12px",
    }
  );
  return (
    <Component>
      <Content>
        <Avatar></Avatar>
        <Editor />
      </Content>
    </Component>
  );
}
const Component = styled.div`
  min-height: 145px;
  padding: 0 16px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);
`;
function Editor() {
  const [Component] = useCustomBox(
    {
      vertical: true,
    },
    {
      w: "100%",
    }
  );
  const [Textarea] = useCustomBox({}, {});
  const [WhoCanReplyWrapper] = useCustomBox(
    {
      borderbox: true,
    },
    {
      h: 37,
      AI: "center",
      borderBottom: "1px solid rgb(239, 243, 244)",
    }
  );

  const [WhoCanReply] = useCustomButton(CustomButtonType.Navigation_primary24);
  const [WhoCanReplyText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_primary14,
    {
      ml: "4px",
      pt: "2px",
      lineHeight: 16,
      fontWeight: 700,
    }
  );
  const [Tools] = useCustomBox(
    {},
    {
      h: 48,
    }
  );
  return (
    <Component>
      <Textarea>
        <TweetInput htmlFor="tweet-input">
          <input type="text" id="tweet-input" placeholder="What's happening?" />
        </TweetInput>
      </Textarea>
      <WhoCanReplyWrapper>
        <WhoCanReply>
          <SVG {...IconEveryone} />
          <WhoCanReplyText>Everyone can Reply</WhoCanReplyText>
        </WhoCanReply>
      </WhoCanReplyWrapper>
      <Tools></Tools>
    </Component>
  );
}
//todo vertical align placeholder
const TweetInput = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 52px;
  padding: 12px 0;

  input {
    height: 28px;
    flex: 1;
    padding: 2px 0;
  }
  input::placeholder {
    font-size: 20px;
    color: #536471;
    letter-spacing: normal;
  }
`;
const IconEveryone = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      fill: "#1d9bf0",
      path: [
        {
          d: "M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18-.403-.145-.983-.332-.983-.332 1.13-3.652 4.515-6.318 8.52-6.38 0 0 .125-.018.186.14.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04z",
        },
      ],
    },
  ],
};
