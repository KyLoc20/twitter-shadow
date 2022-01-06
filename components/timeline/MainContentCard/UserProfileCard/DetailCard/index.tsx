import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { genCustomBox } from "@/components/generic/containers/Box";
import { genCustomButton } from "@/components/generic/Button";
import {
  TextPreset,
  genCustomText,
  HTMLTag,
  genText,
} from "@/components/generic/Text";
import { sxProps } from "@/system/sx";
import Icon from "@/components/generic/Icon";
import { underConstruction } from "@/utils/helper";
import { genBox } from "@/components/generic/sxbox";
export default function UserDetailInfoCard() {
  return (
    <Component>
      <Content>
        <UserInfoHeader>
          <UserAvatar avatarUrl="/avatars/tourist1.jpg" />
          <InteractionButtonGroup onSelect={() => underConstruction()} />
        </UserInfoHeader>
        <Nickname>Tourist</Nickname>
        <Username>@tourist</Username>
        <Biography>
          Author. Web Standards Godfather. Designer @Automattic . Founder &
          Publisher @AListApart . Co-Founder/Host @AnEventApart . Publisher
          @ABookApart . Ava’s dad. He/him.
        </Biography>
        <OtherInfo />
        <Social></Social>
      </Content>
    </Component>
  );
}
type TUserInfoHeader = {};

const Component = genCustomBox({}, { mb: "16px", flexBasis: "auto" });
const Content = genCustomBox(
  { vertical: true, borderbox: true },
  { w: "100%", p: "12px 16px 0" }
);
const UserInfoHeader = genCustomBox(
  {},
  { JC: "space-between", h: 68, position: "relative" }
);
function UserAvatar(props: TUserAvatar) {
  const Component = genCustomBox(
    {
      borderbox: true,
    },
    {
      minWidth: 48,
      position: "relative",
      bottom: "100%",
      w: 133,
      h: 133,
      borderRadius: 9999,
      border: "4px solid #fff",
      bg: `no-repeat url(${props.avatarUrl})`,
      bgSize: "contain",
    }
  );
  return <Component></Component>;
}
type TUserAvatar = {
  avatarUrl: string;
};
function InteractionButtonGroup(props: TInteractionButtonGroup) {
  const Wrapper = genCustomBox({}, {});
  return (
    <Wrapper>
      <MoreButton
        onClick={() => {
          props.onSelect("more");
        }}
      >
        <Icon svg={IconMore} />
      </MoreButton>
      <MessageButton
        onClick={() => {
          props.onSelect("message");
        }}
      >
        <Icon svg={IconMessage} />
      </MessageButton>
      <NotifyButton
        onClick={() => {
          props.onSelect("notify");
        }}
      >
        <Icon svg={IconNotify} />
      </NotifyButton>
      <FollowButton
        onClick={() => {
          props.onSelect("follow");
        }}
      >
        Follow
      </FollowButton>
    </Wrapper>
  );
}
type TInteractionButtonGroup = {
  onSelect: (value: string) => void;
};
const INTERACTION_BUTTON_STYLE: sxProps = {
  mr: "8px",
  mb: "12px",
  h: 34,
  w: 34,
  borderRadius: 9999,
  border: "1px solid rgb(207, 217, 222)",
  hoverBg: "rgba(15, 20, 25,0.1)",
  transition: "background 0.15s ease",
  cursor: "pointer",
  JC: "center",
  AI: "center",
};
const MoreButton = genCustomBox({}, INTERACTION_BUTTON_STYLE);
const MessageButton = genCustomBox({}, INTERACTION_BUTTON_STYLE);
const NotifyButton = genCustomBox({}, INTERACTION_BUTTON_STYLE);
const FollowButton = genCustomButton({
  variant: "plain",
  depressed: true,
  borderRadius: 18,
  rippleDisabled: true,
  height: 36,
  padding: "0 16px",
  backgroundColor: "rgb(15, 20, 25)",
  hoverBackgroundColor: "rgb(39, 44, 48)",
  inner: {
    color: "#fff",
    lineHeight: 18,
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: "normal",
  },
});

const Nickname = genCustomText(HTMLTag.span, TextPreset.Content_default15, {
  mt: "4px",
  lineHeight: 24,
  fontSize: 20,
  fontWeight: 800,
  textOverflow: "ellipsis",
  overflow: "hidden",
  cursor: "text",
});
const Username = genCustomText(HTMLTag.span, TextPreset.Content_light15, {
  mb: "12px",
  lineHeight: 18,
  fontSize: 15,
  textOverflow: "ellipsis",
  overflow: "hidden",
  cursor: "text",
});
const Biography = genText(HTMLTag.div, {
  color: "rgba(15, 20, 25, 0.87)",
  lineHeight: 18,
  fontSize: 15,
  cursor: "text",
  fontWeight: 400,
  letterSpacing: "normal",
});
function OtherInfo() {
  const Wrapper = genCustomBox({}, { mb: "12px", h: 20, AI: "center" });
  return <Wrapper></Wrapper>;
}
function Social() {
  const Wrapper = genCustomBox({}, { h: 20, AI: "center" });
  return <Wrapper></Wrapper>;
}

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
const IconMessage = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      stroke: "rgb(15, 20, 25)",
      path: [
        {
          d: "M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z",
        },
      ],
    },
  ],
};

const IconNotify = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      stroke: "rgb(15, 20, 25)",
      path: [
        {
          d: "M23.24 3.26h-2.425V.832c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.26H16.89c-.414 0-.75.335-.75.75s.336.75.75.75h2.426v2.424c0 .414.336.75.75.75s.75-.336.75-.75V4.76h2.425c.415 0 .75-.337.75-.75s-.336-.75-.75-.75zm-6.23 7.606c.02-2.434-.782-4.597-2.258-6.09-1.324-1.342-3.116-2.084-5.046-2.093h-.013c-1.93.01-3.722.75-5.046 2.092C3.172 6.27 2.37 8.433 2.39 10.867 2.426 15 .467 16.56.39 16.62c-.26.193-.367.53-.266.838.102.308.39.515.712.515h4.716c.11 2.226 1.94 4.007 4.194 4.007s4.083-1.78 4.194-4.007h4.625c.32 0 .604-.206.707-.51s0-.643-.255-.838c-.082-.064-2.043-1.625-2.008-5.76zM9.745 20.48c-1.426 0-2.586-1.11-2.694-2.508h5.388c-.108 1.4-1.268 2.507-2.694 2.507zm-7.29-4.007c.702-1.095 1.457-2.904 1.434-5.618-.017-2.062.614-3.8 1.825-5.025C6.757 4.774 8.172 4.19 9.7 4.184c1.527.007 2.943.59 3.985 1.646 1.21 1.226 1.84 2.963 1.823 5.025-.022 2.714.732 4.523 1.437 5.618H2.455z",
        },
      ],
    },
  ],
};
