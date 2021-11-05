import * as React from "react";
import styled from "@emotion/styled";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { useClickable } from "@/hooks/Clickable";
import { useCustomBox } from "@/hooks/Container";
import { Icon } from "@/ui/Icon";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { default as SVG, SVGBasicProps } from "@/components/generic/SVG";
type UserInfoCardProps = {
  children?: React.ReactNode;
};
export default function UserInfoCard(props: UserInfoCardProps) {
  const [Content] = useCustomBox(
    {
      borderbox: true,
    },
    {
      w: "100%",
      p: "12px",
      AI: "center",
      borderRadius: 9999,
      cursor: "pointer",
      transition: "all 0.2s ease",
      overflow: "hidden",
    }
  );

  const [Avatar] = useCustomBox(
    {
      noFlex: true,
      wrap: false,
    },
    {
      w: 40,
      h: 40,
      borderRadius: "50%",
      bg: "red",
    }
  );
  //todo flex:1 text overflow
  //   overflow: "hidden",
  //   textOverflow: "ellipsis",
  //   whiteSpace: "nowrap",
  const [About] = useCustomBox(
    {
      vertical: true,
    },
    {
      overflow: "hidden",
      h: 40,
      m: "0 12px",
      flex: "1",
    }
  );
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
      lineHeight: 20,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  return (
    <Component>
      <GhostBox username="@CRa_SSus"></GhostBox>
      <Content className="content">
        <Avatar />
        <About>
          <NicknameText>
            CraSSusCraSSusCraSSusCraSSusCraSSusCraSSusCraSSus
          </NicknameText>
          <UsernameText>@CRa_SSus</UsernameText>
        </About>
        <SVG {...IconMore} />
      </Content>
    </Component>
  );
}

const Component = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 64px;
  margin: 12px 0;

  .content:hover {
    background: rgba(15, 20, 25, 0.1);
  }
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
type GhostBoxProps = {
  children?: React.ReactNode;
  active?: boolean;
  username: string;
};
function GhostBox(props: GhostBoxProps) {
  const [isActive, setIsActive] = React.useState(props.active);
  const [Component] = useCustomBox(
    {
      noFlex: true,
    },
    {
      position: "absolute",
      bottom: 86,
      left: "calc(50% - 150px)", // - ((300px - 100%) / 2)
      w: 300,
      borderRadius: 16,
      boxShadow:
        "rgb(101,119,134,0.2) 0px 0px 15px, rgb(101,119,134,0.15) 0px 0px 3px 1px",
      cursor: "default",
      bg: "#fff",
    }
  );
  const [Content] = useCustomBox(
    {
      vertical: true,
      borderbox: true,
    },
    {
      w: "100%",
      overflow: "hidden",
      py: "12px",
      transition: "all 0.2s ease",
    }
  );
  const [Button] = useCustomBox(
    {
      borderbox: true,
    },
    {
      w: "100%",
      h: 52,
      p: "16px",
      bg: "#fff",
      hoverBg: "rgb(247, 249, 249)",
      cursor: "pointer",
    }
  );
  const [ButtonText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_default15,
    {
      w: "100%",
      lineHeight: 20,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  return (
    <Component>
      <Content>
        <Button>
          <ButtonText>Add an existing account</ButtonText>
        </Button>
        <Button>
          <ButtonText>Log out {props.username}</ButtonText>
        </Button>
      </Content>
    </Component>
  );
}
