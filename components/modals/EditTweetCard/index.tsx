import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { genCustomButton } from "@/components/generic/Button";
import { genCustomBox } from "@/components/generic/containers/Box";
import EditorCard from "./EditorCard";
export {};
//naming convention: verb + [noun]
export default function EditTweetCard(
  props: PropsWithChildren<TEditTweetCard>
) {
  const handleOverlayTouchedShutdown = () => {
    props.onClose();
  };
  const handleShutdown = () => {
    props.onClose();
  };
  return (
    <Container onClick={handleOverlayTouchedShutdown}>
      <EditorCard
        variant={props.variant}
        writtenContent={props.writtenContent}
        writtenTweetId={props.writtenTweetId}
        onClose={handleShutdown}
      />
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.4);
`;

type TEditTweetCard = {
  onClose: Function;
  variant: "Create" | "Update";
  writtenContent?: string; //for Update
  writtenTweetId?: number; //for Update
};
