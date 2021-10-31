import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox } from "@/hooks/Container";
import * as SVG from "@/components/generic/SVG";
type SubscribeProps = {
  children?: React.ReactNode;
};
export default function SubscribeCard(props: SubscribeProps) {
  const winSize = useWindowSize();

  const [Content] = useCustomBox(
    {
      noFlex: true,
      borderbox: true,
    },
    {
      overflow: "hidden",
      m: isMobile(winSize.width) ? "32px auto 96px" : "132px auto",
      p: "0 24px",
      maxWidth: 1024,
    }
  );
  const [TextWrapper] = useCustomBox(
    {
      vertical: true,
    },
    {
      JC: "center",
      AI: "flex-start",
      overflow: "hidden",
    }
  );
  const [Form] = useCustomBox(
    {
      vertical: true,
    },
    {
      JC: "center",
      AI: isMobile(winSize.width) ? "center" : "flex-end",
      overflow: "hidden",
    }
  );
  const [Title] = useCustomText(HTMLTag.div, CustomTextType.Title_default32, {
    lineHeight: "1.2",
    mb: "12.8px",
    textAlign: isMobile(winSize.width) ? "center" : "left",
  });
  const [Description] = useCustomText(
    HTMLTag.div,
    CustomTextType.Content_default16,
    {
      mb: isMobile(winSize.width) ? "32px" : undefined,
      lineHeight: "1.8",
      textAlign: isMobile(winSize.width) ? "center" : "left",
    }
  );

  const [SubscribeButton] = useCustomButton(
    CustomButtonType.Content_h45_default
  );

  return (
    <Component>
      <Content>
        <Grid
          style={{
            gridTemplateColumns: isMobile(winSize.width) ? "1fr" : "1fr 0.8fr",
          }}
        >
          <TextWrapper>
            <Title>
              Next.js is getting better every day — don’t miss out on all the
              action.
            </Title>
            <Description>
              Join the Next.js newsletter and stay updated on new releases and
              features, guides, and case studies.
            </Description>
          </TextWrapper>

          <Form>
            <EmailInput htmlFor="email-input">
              <svg width={15} height={15} viewBox="0 0 15 11">
                <SVG.Group {...EmailSVG}></SVG.Group>
              </svg>
              <input
                type="text"
                id="email-input"
                placeholder="you@domain.com"
              />
            </EmailInput>
            <SubscribeButton>Subscribe</SubscribeButton>
          </Form>
        </Grid>
      </Content>
    </Component>
  );
}

const Component = styled.section`
  display: flex;
  align-items: center;
  // justify-content: center;
  width: 100%;
`;
const Grid = styled.div`
  display: grid;
`;
const EmailInput = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #999;
  width: 240px;
  height: 39px;
  margin-bottom: 10px;
  transition: border 100ms ease-in;
  svg {
    margin: 0 15px;
  }
  input {
    height: 37px;
    flex: 1;
    padding: 4px 0;
  }
  &:focus-within {
    border: 1px solid #333;
  }
`;
const EmailSVG = {
  fill: "none",
  path: [{ d: "M1.175 1.135L7.5 5.5" }, { d: "M14.04.912L7.5 5.5" }],
  rect: [{ width: 14, height: 10, cx: 0.5, cy: 0.5, rx: 2 }],
};
