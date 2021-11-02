import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox, useCustomStack } from "@/hooks/Container";
import { default as SVG, SVGBasicProps } from "@/components/generic/SVG";
type TweetCardProps = {
  children?: React.ReactNode;
} & Tweet;
export type Tweet = {
  uid: number;
  user: UserInfo;
  content: string;
  timestamp: string;
  replies: number;
  likes: number;
  retweets: number;
  //isPromoted:boolean;
  //action:Object;
};
type UserInfo = {
  username: string;
  nickname: string;
  avatarUrl: string;
};
export default function TweetCard(props: TweetCardProps) {
  const [Content] = useCustomBox({}, {});
  const [Avatar] = useCustomBox(
    {},
    {
      mr: "12px",
    }
  );
  const [AvatarImage] = useCustomBox(
    {},
    {
      w: 48,
      h: 48,
      borderRadius: "50%",
      bg: "red",
    }
  );
  const [Main] = useCustomBox({ vertical: true }, { w: "100%" });
  const [UserInfo] = useCustomBox({}, {});
  const [NicknameText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_default15,
    {
      lineHeight: 20,
      fontWeight: 700,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  const [UsernameText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_light15,
    {
      ml: "4px",
      lineHeight: 20,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  const [DividerText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_light15,
    {
      p: "0 4px",
      lineHeight: 20,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  const [TimestampText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_light15,
    {
      lineHeight: 20,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  const [ContentText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_default15,
    {
      lineHeight: 20,
      display: "inline-block",
      whiteSpace: "pre",
    }
  );
  const [MoreButtonWrapper] = useCustomBox(
    {},
    {
      minWidth: 38.75,
      flexGrow: "1",
      AI: "center",
      JC: "flex-end",
    }
  );
  const [StatsWrapper] = useCustomBox(
    {},
    { pt: "12px", maxWidth: 425, JC: "space-between" }
  );
  // const [Stats] = useCustomBox({}, {});
  const [StatsInnerText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_light13,
    {
      display: "inline-block",
      color: "currentColor",
      lineHeight: 16,
      px: "16px",
    }
  );
  const user = props.user;
  return (
    <Component>
      <Content>
        <Avatar>
          <AvatarImage />
        </Avatar>
        <Main>
          <UserInfo>
            <NicknameText>{user.nickname}</NicknameText>
            <UsernameText>{user.username}</UsernameText>
            <DividerText>·</DividerText>
            <TimestampText>{props.timestamp}</TimestampText>
            <MoreButtonWrapper>
              <IconMoreWrapper>
                <SVG {...IconMore} />
              </IconMoreWrapper>
            </MoreButtonWrapper>
          </UserInfo>
          <ContentText>{props.content}</ContentText>
          <StatsWrapper>
            <Stats
              hoverColor="rgba(29, 155, 240, 1)"
              hoverBg="rgba(29, 155, 240, 0.1)"
            >
              <IconWrapper className="icon">
                <SVG {...IconReplies} />
              </IconWrapper>
              <StatsInnerText>{props.replies}</StatsInnerText>
            </Stats>
            <Stats
              hoverColor="rgba(0, 186, 124, 1)"
              hoverBg="rgba(0, 186, 124, 0.1)"
            >
              <IconWrapper className="icon">
                <SVG {...IconRetweets} />
              </IconWrapper>
              <StatsInnerText>{props.retweets}</StatsInnerText>
            </Stats>
            <Stats
              hoverColor="rgba(249, 24, 128, 1)"
              hoverBg="rgba(249, 24, 128, 0.1)"
            >
              <IconWrapper className="icon">
                <SVG {...IconLikes} />
              </IconWrapper>
              <StatsInnerText>{props.likes}</StatsInnerText>
            </Stats>
            <Stats
              hoverColor="rgba(29, 155, 240, 1)"
              hoverBg="rgba(29, 155, 240, 0.1)"
            >
              <IconWrapper className="icon">
                <SVG {...IconShare} />
              </IconWrapper>
            </Stats>
          </StatsWrapper>
        </Main>
      </Content>
    </Component>
  );
}
const Component = styled.div`
  padding: 12px 16px 12px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);
`;
const IconMore = {
  width: 18.75,
  height: 18.75,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      circle: [
        { cx: 5, cy: 12, r: 2 },
        { cx: 12, cy: 12, r: 2 },
        { cx: 19, cy: 12, r: 2 },
      ],
    },
  ],
};
const IconReplies = {
  width: 18.75,
  height: 18.75,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z",
        },
      ],
    },
  ],
};
const IconLikes = {
  width: 18.75,
  height: 18.75,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z",
        },
      ],
    },
  ],
};
const IconRetweets = {
  width: 18.75,
  height: 18.75,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z",
        },
      ],
    },
  ],
};
const IconShare = {
  width: 18.75,
  height: 18.75,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z",
        },
        {
          d: "M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z",
        },
      ],
    },
  ],
};

const IconMoreWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -8px;
  width: 34.75px;
  height: 34.75px;
  border-radius: 50%;
  transition: all 0.2s ease;
  color: rgb(83, 100, 113);
  cursor: pointer;
  user-select: none;
  &:hover {
    color: rgba(29, 155, 240, 1);
    background: rgba(29, 155, 240, 0.1);
  }
`;

type StatsProps = {
  hoverColor: string;
  hoverBg: string;
};
const Stats = styled.div`
  display: flex;
  height: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(83, 100, 113);
  transition: all 0.2s ease;
  &:hover {
    color: ${(props: StatsProps) => props.hoverColor}; //rgba(29, 155, 240, 1)
  }
  &:hover .icon {
    background: ${(props: StatsProps) => props.hoverBg};
  }
`;
const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -8px;
  width: 34.75px;
  height: 34.75px;
  border-radius: 50%;
  user-select: none;
`;
