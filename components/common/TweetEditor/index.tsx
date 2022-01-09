import { PropsWithChildren, forwardRef, Ref } from "react";
import styled from "@emotion/styled";
import { defineCustomBox } from "@/components/generic/containers/Box";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import { User } from "@/stores/user";
import { Avatar, WhoCanReply, Tools } from "./widgets";
import Textarea, { TextareaProps } from "@/components/generic/Textarea";
export default forwardRef<HTMLTextAreaElement, TTweetEditor>(TweetEditor);
function TweetEditor(
  props: PropsWithChildren<TTweetEditor>,
  ref: Ref<HTMLTextAreaElement>
) {
  const user = props.user;
  return (
    <Component>
      <Content>
        <Avatar url={user.avatarUrl} />
        <Editor>
          <Textarea
            id={props.textareaId} // id="tweet-input"
            ref={ref}
            defaultValue={props.textareaDefaultValue}
            placeholder={props.textareaPlaceholder} // placeholder="What's happening?"
            rows={props.textareaDefaultRows}
            {...CUSTOM_TEXTAREA_STYLE}
          />
          <WhoCanReply />
          <ControlPanel>
            <Tools />
            <SubmitButton
              onClick={() => {
                props.onSubmit();
              }}
            >
              {props.submitButtonMetaText}
              {/* Tweet */}
            </SubmitButton>
          </ControlPanel>
        </Editor>
      </Content>
    </Component>
  );
}
type TTweetEditor = {
  user: User;
  onSubmit: Function;
  submitButtonMetaText: string;
  textareaId: string;
  textareaPlaceholder: string;
  textareaDefaultRows?: number;
  textareaDefaultValue?: string;
};
const Component = styled.div`
  min-height: 145px;
  padding: 0 16px;
  box-sizing: border-box;
`;
const genFlexBox = defineCustomBox();
const genButton36 = defineCustomButton(ButtonPreset.Navigation_primary36);
const genVerticalBox = defineCustomBox({ vertical: true });
const Content = genFlexBox({
  py: "8px",
  AI: "flex-start",
});
const Editor = genVerticalBox({
  flexGrow: "1",
});
const ControlPanel = genFlexBox({
  JC: "space-between",
});
const SubmitButton = genButton36({
  wrapper: { w: 76, mt: "12px", ml: "12px" },
});
const CUSTOM_TEXTAREA_STYLE: Omit<TextareaProps, "id"> = {
  sx: {
    p: "12px 0",
  },
  inputFontSize: "20px",
  inputColor: "#0f1419",
  inputLineHeight: "30px",
  placeholderFontsize: "20px",
  placeholderColor: "#536471",
};
