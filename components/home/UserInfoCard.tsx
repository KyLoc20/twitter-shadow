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
  const [Component] = useCustomBox(
    {
      borderbox: true,
    },
    {
      w: "100%",
      h: 64,
      overflow: "hidden",
      m: "12px 0",
      p: "12px",
      AI: "center",
      borderRadius: 32,
      bg: "rgba(15, 20, 25, 0.1)",
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
      <Avatar />
      <About>
        <NicknameText>
          CraSSusCraSSusCraSSusCraSSusCraSSusCraSSusCraSSus
        </NicknameText>
        <UsernameText>@CRa_SSus</UsernameText>
      </About>
      <SVG {...IconMore} />
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
