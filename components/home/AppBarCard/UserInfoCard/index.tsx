import * as React from "react";
import styled from "@emotion/styled";
import Icon from "@/components/generic/Icon";
import { useModal } from "@/hooks/Modal";
import { useCustomBox } from "@/hooks/Container";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import GhostBox from "./GhostBox";
type UserInfoCardProps = {};

export default function UserInfoCard(
  props: React.PropsWithChildren<UserInfoCardProps>
) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };
  const handleCloseMenu = (e: Event) => {
    setIsMenuOpen(false);
  };

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
  /**
   *  trick how to deal with text overflow
   *  flex:1
   *  overflow: "hidden",
   *  textOverflow: "ellipsis",
   *  whiteSpace: "nowrap",
   */
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
  const [Nickname] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_default15,
    {
      lineHeight: 20,
      fontWeight: 700,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }
  );
  const [Username] = useCustomText(
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
      <GhostBox
        username="@CRa_SSus"
        active={isMenuOpen}
        onChange={handleCloseMenu}
      ></GhostBox>
      <Content className="content" onMouseDown={handleOpenMenu}>
        <Avatar />
        <About>
          <Nickname>CraSSusCraSSusCraSSusCraSSusCraSSusCraSSusCraSSus</Nickname>
          <Username>@CRa_SSus</Username>
        </About>
        <Icon name="more" />
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
