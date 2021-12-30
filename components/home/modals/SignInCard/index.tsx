import * as React from "react";
import styled from "@emotion/styled";
import SignIn from "./SignIn";

export default function SignInModalCard(
  props: React.PropsWithChildren<TSignInModal>
) {
  const handleShutdown = () => props.onClose();
  return (
    <Container onClick={handleShutdown}>
      <SignIn onClose={handleShutdown} />
    </Container>
  );
}
type TSignInModal = {
  onClose: Function;
};
const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.4);
`;
