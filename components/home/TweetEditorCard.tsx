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
      p: "8px 0",
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
      mr: "12px",
    }
  );
  const [Image] = useCustomBox(
    {},
    {
      w: 48,
      h: 48,
      borderRadius: "50%",
      bg: "red",
    }
  );
  return (
    <Component>
      <Content>
        <Avatar>
          <Image />
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
  const [Control] = useCustomBox(
    {},
    {
      JC: "space-between",
    }
  );
  const [Tools] = useCustomBox(
    {},
    {
      mt: "12px",
    }
  );
  const [TweetButtonWrapper] = useCustomBox(
    {},
    {
      w: 76,
      mt: "12px",
      ml: "12px",
    }
  );
  const [TweetButton] = useCustomButton(CustomButtonType.Navigation_primary36);
  const itemsTool = ToolItems.map((item, index) => (
    <IconWrapper key={index}>
      <SVG {...item.icon} />
    </IconWrapper>
  ));
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
      <Control>
        <Tools>{itemsTool}</Tools>
        <TweetButtonWrapper>
          <TweetButton>Tweet</TweetButton>
        </TweetButtonWrapper>
      </Control>
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
const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: all 0.2s ease;
  color: rgba(29, 155, 240, 1);
  cursor: pointer;
  user-select: none;
  &:hover {
    background: rgba(29, 155, 240, 0.1);
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
const IconMedia = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z",
        },
      ],
    },
  ],
};
const IconGif = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z",
        },
        {
          d: "M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z",
        },
      ],
    },
  ],
};

const IconPoll = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z",
        },
      ],
    },
  ],
};

const IconEmoji = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z",
        },
        {
          d: "M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z",
        },
      ],
      circle: [
        { cx: 14.738, cy: 9.458, r: 1.478 },
        { cx: 9.262, cy: 9.458, r: 1.478 },
      ],
    },
  ],
};

const IconSchedule = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z",
        },
        {
          d: "M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z",
        },
        {
          d: "M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z",
        },
        {
          d: "M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z",
        },
      ],
    },
  ],
};
type ToolItem = {
  name: string;
  icon: SVGBasicProps;
};
const ToolItems: ToolItem[] = [
  {
    name: "media",
    icon: IconMedia,
  },
  {
    name: "gif",
    icon: IconGif,
  },
  {
    name: "poll",
    icon: IconPoll,
  },
  {
    name: "emoji",
    icon: IconEmoji,
  },
  {
    name: "schedule",
    icon: IconSchedule,
  },
];
