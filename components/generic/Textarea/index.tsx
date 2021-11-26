import * as React from "react";
import styled from "@emotion/styled";
type PropsWithChildren<P> = P & { children?: React.ReactNode | undefined };
const pick = <O extends { [key: string]: any }, K extends keyof O>(
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
export default function Textarea(props: PropsWithChildren<TextareaBasicProps>) {
  return (
    <InputWrapper
      {...pick(
        BASIC_SIZING_PROPERTIES as unknown as Extract<
          typeof BASIC_SIZING_PROPERTIES[number],
          keyof TextareaBasicProps
        >[],
        props
      )}
      htmlFor={props.id}
    >
      <input type="textarea" id={props.id} placeholder={props.placeholder} />
    </InputWrapper>
  );
}

const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: ${(props: BasicSizingProps) => props.width};
  height: ${(props: BasicSizingProps) => props.height};
  padding: ${(props: BasicSizingProps) => props.padding};
  input {
    height: ${(props: BasicSizingProps) => props.inputHeight};
    padding: ${(props: BasicSizingProps) => props.inputPadding};
    flex: 1;
  }
  input::placeholder {
    font-size: 20px;
    color: #536471;
    letter-spacing: normal;
  }
`;
