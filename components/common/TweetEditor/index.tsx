import { PropsWithChildren, forwardRef, Ref } from "react";
import styled from "@emotion/styled";
import { defineCustomBox } from "@/components/generic/containers/Box";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import { User } from "@/stores/user";
import { Avatar, CUSTOM_TEXTAREA_STYLE, WhoCanReply, Tools } from "./widgets";
import Textarea from "./AutosizeTextarea";
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
            rows={3}
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
});
const Editor = genVerticalBox({
  w: "100%",
});
const ControlPanel = genFlexBox({
  JC: "space-between",
});
const SubmitButton = genButton36({
  wrapper: { w: 76, mt: "12px", ml: "12px" },
});
