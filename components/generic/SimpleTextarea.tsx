import * as React from "react";
import styled from "@emotion/styled";
import { createUnstyleComponent, sxProps, parseLengthValue } from "@/system/sx";
import { pick } from "@/utils/helpers";
const showHeight = (height: number | string) => {
  console.log("Height of Textarea: ", height);
};
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
type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};

// basically Exclude<React.ClassAttributes<T>["ref"], string>
type UserRef<T> =
  | ((instance: T | null) => void)
  | React.RefObject<T>
  | null
  | undefined;

function updateRef<T>(ref: UserRef<T>, value: T | null) {
  if (ref == null) return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  (ref as Writable<typeof ref>).current = value;
}
const AutosizeTextarea: React.ForwardRefRenderFunction<string, TextareaProps> =
  (props, userRef: React.Ref<string>) => {
    console.log("RENDER Textarea");
    const { sx = {} } = props;
    const handleChange = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      const el = document.getElementById("test-textarea");
      //initially overflow-y: hidden;
      if (el) {
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
        //showHeight(el.style.height);
      }
    };
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.value !== "") {
        updateRef<string>(userRef, e.target.value);
        console.log("handleContentChange: ");
        console.log(userRef);
      }
    };
    let id = "test-textarea"; //props.id
    React.useEffect(() => {
      const el = document.getElementById("test-textarea");
      //initially overflow-y: hidden;
      //if (el) showHeight(el.scrollHeight);
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
          onChange={handleContentChange}
        />
      </Component>
    );
  };
export default React.forwardRef(AutosizeTextarea);
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
