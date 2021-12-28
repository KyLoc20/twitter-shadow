import * as React from "react";
import styled from "@emotion/styled";
import { css, Interpolation, Theme } from "@emotion/react";
import { createUnstyleComponent, sxProps } from "@/system/sx";
export {
  Div,
  Span,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  HTMLTag,
  COMPONENT_FACTORY,
  genBasicPropsForText,
};
export type { TText, TCustomText, TComponentBasic };
type TText = {
  sx?: sxProps;
  customCSS?: Interpolation<Theme>;
} & TComponentBasic &
  TCustomText;
type TCustomText = {
  underlined?: boolean; //text-decoration: underline
  hoverUnderlined?: boolean; //hover text-decoration: underline
};
type TComponentBasic = {
  style?: React.CSSProperties;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
type TextProps = React.PropsWithChildren<TText>;
const genBasicPropsForText = (props: TComponentBasic): TText => ({
  className: props.className,
  style: props.style,
  onMouseEnter: props.onMouseEnter,
  onMouseLeave: props.onMouseLeave,
  onMouseDown: props.onMouseDown,
  onClick: props.onClick,
});
function Div(props: TextProps) {
  return (
    <DivComponent
      {...props.sx}
      {...genBasicPropsForText(props)}
      css={props.customCSS}
    >
      {props.children}
    </DivComponent>
  );
}
function Span(props: TextProps) {
  return (
    <SpanComponent
      {...props.sx}
      {...genBasicPropsForText(props)}
      css={props.customCSS}
    >
      {props.children}
    </SpanComponent>
  );
}
function Heading1(props: TextProps) {
  return (
    <Heading1Component
      {...props.sx}
      {...genBasicPropsForText(props)}
      css={props.customCSS}
    >
      {props.children}
    </Heading1Component>
  );
}
function Heading2(props: TextProps) {
  return (
    <Heading2Component
      {...props.sx}
      {...genBasicPropsForText(props)}
      css={props.customCSS}
    >
      {props.children}
    </Heading2Component>
  );
}
function Heading3(props: TextProps) {
  return (
    <Heading3Component
      {...props.sx}
      {...genBasicPropsForText(props)}
      css={props.customCSS}
    >
      {props.children}
    </Heading3Component>
  );
}
function Heading4(props: TextProps) {
  return (
    <Heading4Component
      {...props.sx}
      {...genBasicPropsForText(props)}
      css={props.customCSS}
    >
      {props.children}
    </Heading4Component>
  );
}
function Paragraph(props: TextProps) {
  return (
    <ParagraphComponent
      {...props.sx}
      {...genBasicPropsForText(props)}
      css={props.customCSS}
    >
      {props.children}
    </ParagraphComponent>
  );
}
const BasicText = styled.div`
  margin: 0;
  padding: 0;
`;
const UnstyledText = createUnstyleComponent<sxProps>(BasicText);
const DivComponent = UnstyledText.withComponent("div");
const SpanComponent = UnstyledText.withComponent("span");
const Heading1Component = UnstyledText.withComponent("h1");
const Heading2Component = UnstyledText.withComponent("h2");
const Heading3Component = UnstyledText.withComponent("h3");
const Heading4Component = UnstyledText.withComponent("h4");
const ParagraphComponent = UnstyledText.withComponent("p");
enum HTMLTag {
  div,
  span,
  p,
  h1,
  h2,
  h3,
  h4,
}
type TextTagFactory = {
  [key in HTMLTag]: (props: TextProps) => JSX.Element;
};
const COMPONENT_FACTORY: TextTagFactory = {
  [HTMLTag.div]: Div,
  [HTMLTag.span]: Span,
  [HTMLTag.p]: Paragraph,
  [HTMLTag.h1]: Heading1,
  [HTMLTag.h2]: Heading2,
  [HTMLTag.h3]: Heading3,
  [HTMLTag.h4]: Heading4,
};
