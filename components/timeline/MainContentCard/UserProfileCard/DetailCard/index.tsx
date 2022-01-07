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
import Icon, { TIconSVG } from "@/components/generic/Icon";
import { underConstruction, customNumberFormatter } from "@/utils/helper";
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
  mb: "12px",
});
function OtherInfo() {
  const Wrapper = genCustomBox({}, { mb: "12px", h: 20, AI: "center" });
  return (
    <Wrapper>
      <OtherGadget icon={IconLocation} text={"California"} isLink={false} />
      <OtherGadget icon={IconLink} text={"flowingdata.com"} isLink={true} />
      <OtherGadget
        icon={IconCalendar}
        text={"Joined March 2008"}
        isLink={false}
      />
    </Wrapper>
  );
}
type TOtherGadget = {
  icon: TIconSVG;
  text: string;
  isLink: boolean;
};
function OtherGadget(props: TOtherGadget) {
  const Component = genCustomBox(
    {},
    {
      mr: "12px",
      color: "rgb(83, 100, 113)",
    }
  );
  const Text = genText(
    HTMLTag.span,
    {
      fontSize: 15,
      lineHeight: 18,
      letterSpacing: "normal",
      color: props.isLink ? "rgb(29, 155, 240)" : undefined,
      cursor: props.isLink ? "pointer" : "text",
    },
    { hoverUnderlined: props.isLink ? true : false }
  );
  return (
    <Component>
      <Icon svg={props.icon} sx={{ mr: "4px" }} />
      <Text>{props.text}</Text>
    </Component>
  );
}
function Social() {
  const Wrapper = genCustomBox({}, { h: 20, AI: "center" });
  return (
    <Wrapper>
      <SocialGadget
        value={359}
        metaText={"Following"}
        onSelect={() => {
          underConstruction();
        }}
      />
      <SocialGadget
        value={84776}
        metaText={"Followers"}
        onSelect={() => {
          underConstruction();
        }}
      />
    </Wrapper>
  );
}
type TSocialGadget = {
  value: number;
  metaText: string;
  onSelect: (value: string) => void;
};
function SocialGadget(props: TSocialGadget) {
  const Component = genText(
    HTMLTag.span,
    {
      display: "flex",
      mr: "20px",
      cursor: "pointer",
    },
    {
      hoverUnderlined: true,
    }
  );
  const ValueText = genText(HTMLTag.span, {
    color: "rgb(15, 20, 25)",
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 18,
    letterSpacing: "normal",
    mr: "2px",
  });
  const MetaText = genText(HTMLTag.span, {
    color: "rgb(83, 100, 113)",
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: "normal",
  });
  //TODO WHY underline breaks due to the spacing between MetaText and ValueText, use <a> instead?
  return (
    <Component onClick={() => props.onSelect(props.metaText)}>
      <ValueText>{customNumberFormatter(props.value)}</ValueText>
      <MetaText>{props.metaText}</MetaText>
    </Component>
  );
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
const IconLocation = {
  width: 18.75,
  height: 18.75,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z",
        },
        {
          d: "M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z",
        },
      ],
    },
  ],
};
const IconLink = {
  width: 18.75,
  height: 18.75,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z",
        },
        {
          d: "M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z",
        },
      ],
    },
  ],
};

const IconCalendar = {
  width: 18.75,
  height: 18.75,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z",
        },
      ],
      circle: [
        { cx: 7.032, cy: 8.75, r: 1.285 },
        { cx: 7.032, cy: 13.156, r: 1.285 },
        { cx: 16.968, cy: 8.75, r: 1.285 },
        { cx: 16.968, cy: 13.156, r: 1.285 },
        { cx: 12, cy: 8.75, r: 1.285 },
        { cx: 12, cy: 13.156, r: 1.285 },
        { cx: 7.032, cy: 17.486, r: 1.285 },
        { cx: 12, cy: 17.486, r: 1.285 },
      ],
    },
  ],
};
