import * as React from "react";
import styled from "@emotion/styled";
import { createUnstyleComponent, sxProps, parseLengthValue } from "@/system/sx";
import { pick } from "@/utils/helper";
export type { TextareaProps };
const AutosizeTextarea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = (props, libRef: React.Ref<HTMLTextAreaElement>) => {
  React.useEffect(() => {
    //THE FIRST TIME
    const el = document.getElementById(props.id);
    if (el != null) {
      if (el.scrollHeight > MAX_HEIGHT) {
        el.style.overflowY = "auto";
        el.style.height = `${MAX_HEIGHT}px`;
      } else {
        el.style.overflowY = "hidden";
        el.style.height = `${el.scrollHeight}px`;
      }
    }
  }, []);

  const { sx = {} } = props;
  const handleChange = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    //EVERY TIME
    const el = document.getElementById(props.id);
    if (el) {
      el.style.height = "auto"; //deleting rows doesn't cause to shrink if not
      //TODO maxRows
      if (el.scrollHeight > MAX_HEIGHT) {
        el.style.overflowY = "auto";
        el.style.height = `${MAX_HEIGHT}px`;
      } else {
        el.style.overflowY = "hidden";
        el.style.height = `${el.scrollHeight}px`;
      }
    }
  };
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {};
  return (
    <Component
      {...pick(LOCAL_STYLE_PROPERTIES, props)}
      {...sx}
      htmlFor={props.id}
    >
      <textarea
        id={props.id}
        ref={libRef}
        defaultValue={props.defaultValue}
        rows={props.rows ?? DEFAULT_ROWS}
        placeholder={props.placeholder}
        onKeyUp={handleChange}
        onChange={handleContentChange}
      />
    </Component>
  );
};
export default React.forwardRef(AutosizeTextarea);
const DEFAULT_ROWS = 1;
const MAX_HEIGHT = 12 * 30; //12 rows
type TextareaProps = {
  id: string;
  defaultValue?: string;
  placeholder?: string;
  sx?: sxProps;
  rows?: number;
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
const UnstyledTextarea = createUnstyleComponent<sxProps>(BasicTextarea);
const Component = UnstyledTextarea.withComponent("label");
