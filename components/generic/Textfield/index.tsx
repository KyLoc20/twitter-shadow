import * as React from "react";
import styled from "@emotion/styled";
import { sxProps, createUnstyleComponent, parseLengthValue } from "@/system/sx";

const Textfield: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextfieldProps
> = (props, inputRef: React.Ref<HTMLInputElement>) => {
  return (
    <Component
      {...props.sx}
      {...genCustomPropsForTextfield(props)}
      className="textfield"
    >
      <input
        ref={inputRef}
        type={props.secretly ? "password" : "text"}
        placeholder=" "
        id={props.id}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
      />
      <label className="prompt" htmlFor={props.id}>
        {props.prompt}
      </label>
    </Component>
  );
};
export default React.forwardRef(Textfield);
type TextfieldProps = React.PropsWithChildren<TTextfield>;
type TTextfield = {
  id: string;
  prompt: string;
  defaultValue?: string;
  disabled?: boolean;
  secretly?: boolean; //type="password" if true
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  sx?: sxProps;
} & TCustomTextfield &
  TComponentBasic;
type TComponentBasic = {
  style?: React.CSSProperties;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

type TCustomTextfield = {
  borderColor?: string;
  focusBorderColor?: string;
  disabledBorderColor?: string;
  inputColor?: string;
  promptColor?: string;
  focusPromptColor?: string;
  disabledBg?: string;
  width?: string | number;
};
const genCustomPropsForTextfield = (custom: TCustomTextfield) => ({
  borderColor: custom.borderColor,
  focusBorderColor: custom.focusBorderColor,
  inputColor: custom.inputColor,
  promptColor: custom.promptColor,
  focusPromptColor: custom.focusPromptColor,
  width: custom.width,
});

const DEFAULT_BORDER_COLOR = "rgb(207, 217, 222)";
const DEFAULT_INPUT_COLOR = "rgb(15, 20, 25)";
const DEFAULT_PROMPT_COLOR = "rgb(83, 100, 113)";
const DEFAULT_FOCUS_BORDER_COLOR = "rgb(29, 155, 240)";
const DEFAULT_FOCUS_PROMPT_COLOR = "rgb(29, 155, 240)";
const DEFAULT_DISABLED_BORDER_COLOR = "rgb(239, 243, 244)";
const DEFAULT_DISABLED_BG = "rgb(239, 243, 244)";
const BasicComponent = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: ${(props: TCustomTextfield) =>
    props.width ? parseLengthValue(props.width) : "100%"};
  input {
    min-width: 80px;
    width: 100%;
    line-height: 20px;
    padding: 28px 8px 8px;
    color: ${(props: TCustomTextfield) =>
      props.inputColor ?? DEFAULT_INPUT_COLOR};
    border: 1px solid
      ${(props: TCustomTextfield) => props.borderColor ?? DEFAULT_BORDER_COLOR};
    border-radius: 4px;
    user-select: none;
    box-sizing: border-box;
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-size: 18px;
  }
  input + label {
    position: absolute;
    bottom: calc(50% - 10px);
    width: 100%;
    padding: 0 8px;
    line-height: 20px;
    font-size: 17px;
    font-weight: 300;
    color: ${(props: TCustomTextfield) =>
      props.promptColor ?? DEFAULT_PROMPT_COLOR};
    cursor: text;
    box-sizing: border-box;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
  }
  input:disabled {
    opacity: 0.5;
    cursor: default;
    border: 1px solid
      ${(props: TCustomTextfield) =>
        props.disabledBorderColor ?? DEFAULT_DISABLED_BORDER_COLOR};
    background: ${(props: TCustomTextfield) =>
      props.disabledBg ?? DEFAULT_DISABLED_BG};
    & + label {
      cursor: default;
      opacity: 0.5;
    }
  }
  input:focus {
    outline: none;
    padding: 27px 7px 7px;
    border: 2px solid
      ${(props: TCustomTextfield) =>
        props.focusBorderColor ?? DEFAULT_FOCUS_BORDER_COLOR};
    & + label {
      transform: translateY(-60%) translateX(-10%) scale(0.8);
      color: ${(props: TCustomTextfield) =>
        props.focusPromptColor ?? DEFAULT_FOCUS_PROMPT_COLOR};
    }
  }
  input:not(:placeholder-shown) + label {
    transform: translateY(-60%) translateX(-10%) scale(0.8);
  }
`;
const Unstyled = createUnstyleComponent<sxProps>(BasicComponent);
const Component = Unstyled.withComponent("div");
