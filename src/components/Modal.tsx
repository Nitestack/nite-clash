"use client";

import {
  Modal as _Modal,
  type ModalProps as _ModalProps,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  type ModalContentProps,
} from "@nextui-org/react";
import { type ReactRenderProp } from "@types";

const defaultProps: Omit<_ModalProps, "children"> = {
  isDismissable: false,
};

export type ModalProps = {
  children: ReactRenderProp<[onClose: () => void]>;
  contentProps?: ModalContentProps;
} & Omit<_ModalProps, "children">;

function Modal({ children, contentProps, ...modalProps }: ModalProps) {
  return (
    <_Modal {...defaultProps} {...modalProps}>
      <ModalContent {...contentProps}>
        {typeof children === "function"
          ? (onClose) => children(onClose)
          : children}
      </ModalContent>
    </_Modal>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
