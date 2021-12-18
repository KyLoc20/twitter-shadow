import * as React from "react";
import styled from "@emotion/styled";
import { createStyleComponent, sxProps, parseLengthValue } from "@/system/sx";
import { pick } from "@/utils/helpers";

export type TextareaProps = {
  id: string;
  placeholder?: string;
  sx?: sxProps;
} & TextareaStyleProps;
type TextareaStyleProps = {
  inputHeight?: string;
  inputPadding?: string;
  inputFontSize?: string;
  inputColor?: string;
  inputLineHeight?: string;
  placeholderFontsize?: string;
  placeholderColor?: string;
};
const LOCAL_STYLE_PROPERTIES = [
  "inputHeight",
  "inputPadding",
  "inputFontSize",
  "inputColor",
  "inputLineHeight",
  "placeholderFontsize",
  "placeholderColor",
] as const;
const DEFAULT_ROWS = 1;
export default function Textarea(
  props: React.PropsWithChildren<TextareaProps>
) {
  const { sx = {} } = props;
  const handleChange = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const el = document.getElementById("test-textarea");
    //initially overflow-y: hidden;
    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
      console.log("test-textarea", el.style.height);
    }
  };
  let id = "test-textarea"; //props.id
  React.useEffect(() => {
    const el = document.getElementById("test-textarea");
    //initially overflow-y: hidden;
    if (el) {
      console.log("useEffect test-textarea", el, el.scrollHeight);
    }
  }, []);
  return (
    <Component
      {...{ ...pick(LOCAL_STYLE_PROPERTIES, props), ...sx }}
      htmlFor={props.id}
    >
      <textarea
        rows={DEFAULT_ROWS}
        id={id}
        placeholder={props.placeholder}
        onKeyUp={handleChange}
      />
    </Component>
  );
}

const BasicTextarea = styled.label`
  display: flex;
  box-sizing: border-box;
  textarea {
    height: ${(props: TextareaStyleProps) => props.inputHeight};
    padding: ${(props: TextareaStyleProps) => props.inputPadding};
    font-size: ${(props: TextareaStyleProps) => props.inputFontSize};
    color: ${(props: TextareaStyleProps) => props.inputColor};
    line-height: ${(props: TextareaStyleProps) => props.inputLineHeight};
    flex: 1;
    overflow-y: hidden;
  }
  textarea::placeholder {
    font-size: ${(props: TextareaStyleProps) => props.placeholderFontsize};
    color: ${(props: TextareaStyleProps) => props.placeholderColor};
    letter-spacing: normal;
  }
`;
const UnstyledTextarea = createStyleComponent<sxProps>(BasicTextarea);
const Component = UnstyledTextarea.withComponent("label");
