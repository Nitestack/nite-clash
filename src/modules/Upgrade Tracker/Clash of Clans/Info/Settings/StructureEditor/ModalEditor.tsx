import { useMemo, type FC } from "react";
import { type Village } from "@types";

import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";
import { useStructureStore } from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/store";

import { useDisclosure } from "@nextui-org/react";
import Modal from "@components/Modal";
import Button from "@components/Button";

import { getSliderValues } from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/store";

import { getItems } from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor";

import FAQAccordion from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/Accordion";
import Structures from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/Structures";
import UpdateButton from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/UpdateButton";

const ModalEditor: FC<{ village: Village }> = ({ village }) => {
  //Store
  const { getVillageData, getHallLevel } = useClashOfClansUpgradeTrackerStore(
    (state) => ({
      getVillageData: state.getVillageData,
      getHallLevel: state.getHallLevel,
    }),
    shallow
  );
  const { setStore, changesAvailable } = useStructureStore(
    (state) => ({
      setStore: state.setStore,
      changesAvailable: state.changesAvailable,
    }),
    shallow
  );
  //Modal bindings
  const { isOpen, onOpen, onClose: onModalClose } = useDisclosure();
  const {
    isOpen: isConfirmationScreenOpen,
    onOpen: onConfirmationScreenOpen,
    onOpenChange: onConfirmationScreenOpenChange,
  } = useDisclosure();
  //Items
  const hallLevel = getHallLevel(village);
  const items = useMemo(
    () => getItems(village, hallLevel),
    [village, hallLevel]
  );
  //On close
  function onClose() {
    if (changesAvailable(items, getVillageData(village)))
      onConfirmationScreenOpen();
    else onModalClose();
  }
  return (
    <>
      <Button onPress={onOpen}>
        <p className="font-semibold">Edit structures</p>
      </Button>
      <Modal
        showCloseButton
        aria-labelledby="con-modal-title"
        aria-describedby="con-modal-description"
        isOpen={isConfirmationScreenOpen}
        onOpenChange={onConfirmationScreenOpenChange}
      >
        {(onConfirmationScreenClose) => (
          <>
            <Modal.Header>
              <p className="text-xl" id="con-modal-title">
                Are you sure?
              </p>
            </Modal.Header>
            <Modal.Body>
              <p>You have unsafed changes. Do you want to continue?</p>
              <div className="flex items-center justify-between">
                <Button.Cancel onPress={onConfirmationScreenClose} />
                <Button.Success
                  onPress={() => {
                    onConfirmationScreenClose();
                    onModalClose();
                    setStore(
                      getSliderValues(
                        items,
                        getVillageData(village),
                        hallLevel,
                        village
                      )
                    );
                  }}
                >
                  Exit
                </Button.Success>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
      <Modal
        size="full"
        scrollBehavior="inside"
        showCloseButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        isOpen={isOpen}
        onOpenChange={() => (isOpen ? onClose() : onOpen())}
      >
        <Modal.Header>
          <p className="text-xl" id="modal-title">
            Edit structures
          </p>
        </Modal.Header>
        <Modal.Body>
          <FAQAccordion village={village} items={items} />
          <UpdateButton village={village} closeModal={onClose} items={items} />
          <Structures village={village} items={items} />
          <UpdateButton village={village} closeModal={onClose} items={items} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditor;
