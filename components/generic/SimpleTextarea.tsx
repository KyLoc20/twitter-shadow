import * as React from "react";
import styled from "@emotion/styled";
import { read } from "fs";
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

type TextareaBasicProps = {
  id: string;
  placeholder?: string;
} & BasicSizingProps;
type BasicSizingProps = {
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
  inputHeight?: string;
  inputPadding?: string;
};
const BASIC_SIZING_PROPERTIES = [
  "height",
  "width",
  "padding",
  "margin",
  "inputHeight",
  "inputPadding",
] as const;
const handleChange = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  const el = document.getElementById("test-textarea");
  //initially overflow-y: hidden;
  if (el) {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
    console.log("test-textarea", el.style.height);
  }
};
export default function Textarea(props: PropsWithChildren<TextareaBasicProps>) {
  let id = "test-textarea"; //props.id
  return (
    <Wrapper {...pick(BASIC_SIZING_PROPERTIES, props)} htmlFor={props.id}>
      <textarea
        id={id}
        placeholder={props.placeholder}
        onKeyUp={handleChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: ${(props: BasicSizingProps) => props.width};
  height: ${(props: BasicSizingProps) => props.height};
  padding: ${(props: BasicSizingProps) => props.padding};
  textarea {
    height: ${(props: BasicSizingProps) => props.inputHeight};
    padding: ${(props: BasicSizingProps) => props.inputPadding};
    flex: 1;
    overflow-y: hidden;
  }
  textarea::placeholder {
    font-size: 20px;
    color: #536471;
    letter-spacing: normal;
  }
`;
