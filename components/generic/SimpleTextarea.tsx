import * as React from "react";
import styled from "@emotion/styled";
import { createStyleComponent, sxProps, parseLengthValue } from "@/system/sx";
type PropsWithChildren<P> = P & { children?: React.ReactNode | undefined };
//pick with helper
const pick = <O extends { [key: string]: any }>(
  keys: readonly string[],
  obj: O
) => _pick(keys as unknown as Extract<typeof keys[number], keyof O>[], obj);
//with type restriction keys can only be a literal like _pick(obj,["a","b","c"]) couldn't be a variable like let KEYS=["a","b","c"] _pick(obj,KEYS)
const _pick = <O extends { [key: string]: any }, K extends keyof O>(
  keys: K[],
  obj: O
): Pick<O, K> =>
  keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<O, K>);

type TextareaProps = {
  id: string;
  placeholder?: string;
  sx?: sxProps;
} & TextareaStyledProps;
type TextareaStyledProps = {
  inputHeight?: string;
  inputPadding?: string;
};
const LOCAL_STYLED_PROPERTIES = ["inputHeight", "inputPadding"] as const;

export default function Textarea(props: PropsWithChildren<TextareaProps>) {
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
  return (
    <Component
      {...{ ...pick(LOCAL_STYLED_PROPERTIES, props), ...props.sx }}
      htmlFor={props.id}
    >
      <textarea
        id={id}
        placeholder={props.placeholder}
        onKeyUp={handleChange}
      />
    </Component>
  );
}

const BasicTextarea = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  textarea {
    height: ${(props: TextareaStyledProps) => props.inputHeight};
    padding: ${(props: TextareaStyledProps) => props.inputPadding};
    flex: 1;
    overflow-y: hidden;
  }
  textarea::placeholder {
    font-size: 20px;
    color: #536471;
    letter-spacing: normal;
  }
`;
const StyledTextarea = createStyleComponent<sxProps>(BasicTextarea);
const Component = StyledTextarea.withComponent("label");
