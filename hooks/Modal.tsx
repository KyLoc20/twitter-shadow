import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
type ModalProps = {
  children?: React.ReactNode;
  target: string;
};
function Modal(props: ModalProps) {
  //todo due to nextjs ServerError: document is not defined, DO NOT USE IT UNLESS IT IS MOUNTED
  const el = document.getElementById(props.target);
  if (!el) return null;
  else
    return ReactDOM.createPortal(
      <React.Fragment>{props.children}</React.Fragment>,
      el
    );
}
function useModal(target: string) {
  const [active, setActive] = React.useState(false);
  const show = () => {
    setActive(true);
  };
  const hide = () => {
    setActive(false);
  };
  const RenderModal = (props: ModalProps) => {
    return (
      <React.Fragment>
        {active && <Modal target={target}>{props.children}</Modal>}
      </React.Fragment>
    );
  };
  return {
    show,
    hide,
    RenderModal,
  };
}
export { useModal, Modal };
