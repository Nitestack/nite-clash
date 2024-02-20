import { useCallback, type FC } from "react";
import { type ReactRenderPropFunction } from "@types";

import { Button, type ButtonProps, useDisclosure } from "@nextui-org/react";

import Modal from "@components/Modal";

type OnPressFunction = Required<ButtonProps>["onPress"];

const ConfirmationModal: FC<{
  children: ReactRenderPropFunction<[openModal: () => void]>;
  name: string;
  warning: string;
  isLoading: boolean;
  onPress: OnPressFunction;
}> = ({ children, name, warning, isLoading, onPress }) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleClick = useCallback((ev: Parameters<OnPressFunction>["0"]) => {
    onPress(ev);
    onClose();
  }, []);

  return (
    <>
      {children(onOpen)}
      <Modal
        showCloseButton
        isDismissable={false}
        aria-labelledby={name + "-confirmation-modal-title"}
        aria-describedby={name + "-confirmation-modal-description"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {(onConfirmationScreenClose) => (
          <>
            <Modal.Header>
              <p className="text-xl" id={name + "-confirmation-modal-title"}>
                Are you sure?
              </p>
            </Modal.Header>
            <Modal.Body>
              <p>{warning}</p>
              <p>Do you want to proceed?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="ghost"
                color="danger"
                isDisabled={isLoading}
                onPress={onConfirmationScreenClose}
              >
                Cancel
              </Button>
              <Button
                spinnerPlacement="start"
                isLoading={isLoading}
                variant="solid"
                color="success"
                onPress={handleClick}
              >
                Continue
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default ConfirmationModal;
