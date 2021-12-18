import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox, useCustomStack } from "@/hooks/Container";
import { default as SVG } from "@/components/generic/SVG";
type TopBannerProps = {
  children?: React.ReactNode;
};
export default function TopBannerCard(props: TopBannerProps) {
  const [Content] = useCustomBox(
    {},
    {
      JC: "space-between",
      AI: "center",
      h: "100%",
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
  return (
    <Component>
      <Content>
        <HeaderText>Home</HeaderText>
        <ButtonWrapper>
          <SVG {...IconTopTweets} />
        </ButtonWrapper>
      </Content>
    </Component>
  );
}
const Component = styled.section`
  position: sticky;
  top: 0;
  height: 53px;
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 10;
  background: #fff;
  border-top: 1px solid rgb(239, 243, 244);
  border-bottom: 1px solid rgb(239, 243, 244);
`;
const IconTopTweets = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  group: [
    {
      strokeWidth: "0.1px",
      path: [
        {
          d: "M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z",
        },
      ],
    },
  ],
};
