import { type FC } from "react";
import { type DBVillageType, type Village } from "@types";
import type Base from "@coc/Base";

import { useStructureStore } from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/store";
import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";
import { useTNSA } from "@nitestack/tnrpc/client";

import { updateVillage as tNSAupdateVillage } from "@actions/upgrade-tracker/coc";

import { getItemAmount } from "@utils/clashOfClans";

import { Spinner, useDisclosure } from "@nextui-org/react";
import Button from "@components/Button";
import Modal from "@components/Modal";

const UpdateButton: FC<{
  items: Base[];
  closeModal: () => void;
  village: Village;
}> = ({ items, closeModal, village }) => {
  //Store
  const { sliderValues, changesAvailable, wallSliders, isValidWallAmount } =
    useStructureStore(
      (state) => ({
        sliderValues: state.sliderValues,
        wallSliders: state.wallSliders,
        changesAvailable: state.changesAvailable,
        isValidWallAmount: state.isValidWallAmount,
      }),
      shallow
    );
  const { getVillageData, playerTag, updateVillageData, getHallLevel } =
    useClashOfClansUpgradeTrackerStore(
      (state) => ({
        getVillageData: state.getVillageData,
        playerTag: state.data.playerTag,
        updateVillageData: state.updateVillageData,
        getHallLevel: state.getHallLevel,
      }),
      shallow
    );
  //Modal bindings
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  //Mutation
  const { mutate, isLoading } = useTNSA(tNSAupdateVillage, {
    onSuccess: () => {
      updateVillageData(
        {
          ...sliderValues,
          walls: wallSliders,
        } as DBVillageType,
        village
      );
      onClose();
      closeModal();
    },
  });
  //Data
  const villageData = getVillageData(village);
  //On press
  function structuresUpdated() {
    return (
      changesAvailable(items, villageData) &&
      isValidWallAmount(
        getItemAmount(
          { id: "wall", type: "wall" },
          getHallLevel(village),
          village
        )
      )
    );
  }
  function updateVillage() {
    //Only if changes are availabe, mutate
    if (structuresUpdated())
      mutate({
        playerTag: playerTag,
        village: village,
        villageData: {
          ...villageData,
          ...sliderValues,
          walls: wallSliders,
        },
      });
  }
  return (
    <div className="flex items-center justify-center space-x-5">
      <Modal
        showCloseButton={!isLoading}
        aria-labelledby="con-modal-title"
        aria-describedby="con-modal-description"
        onOpenChange={onOpenChange}
        isOpen={isOpen}
      >
        {(onClose) => (
          <>
            <Modal.Header>Are you sure?</Modal.Header>
            <Modal.Body>
              <p>
                You made changes to your structure levels. Do you want to
                continue?
              </p>
              <div className="flex items-center justify-between">
                <Button.Cancel isLoading={isLoading} onPress={onClose}>
                  <Spinner size="sm" />
                </Button.Cancel>
                <Button.Success
                  spinner={<Spinner size="sm" />}
                  isLoading={isLoading}
                  onPress={updateVillage}
                >
                  Update
                </Button.Success>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
      <Button.Cancel onPress={closeModal} />
      <Button.Success
        onPress={onOpen}
        isDisabled={isLoading || !structuresUpdated()}
      >
        Update
      </Button.Success>
    </div>
  );
};

export default UpdateButton;
