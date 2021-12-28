import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Modal(props: React.PropsWithChildren<ModalProps>) {
  //todo due to nextjs ServerError: document is not defined, DO NOT USE IT UNLESS IT IS MOUNTED
  const el = document.getElementById(props.target);
  if (!el) return null;
  else
    return ReactDOM.createPortal(
      <React.Fragment>{props.children}</React.Fragment>,
      el
    );
}
type ModalProps = {
  target: string;
};
function useModal(
  target: string
): [() => void, () => void, (props: TRenderModal) => EmotionJSX.Element] {
  const [active, setActive] = React.useState(false);
  const show = () => {
    setActive(true);
  };
  const hide = () => {
    setActive(false);
  };
  const RenderModal = (props: TRenderModal) => {
    return (
      <React.Fragment>
        {active && <Modal target={target}>{props.children}</Modal>}
      </React.Fragment>
    );
  };
  return [show, hide, RenderModal];
}
type TRenderModal = React.PropsWithChildren<{}>;
export { useModal, Modal };
