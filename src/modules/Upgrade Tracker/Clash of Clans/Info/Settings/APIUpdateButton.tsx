import { type FC } from "react";

import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";
import { useTNSA } from "@nitestack/tnrpc/client";
import { updateAPIPlayer as tNSAupdateAPIPlayer } from "@actions/upgrade-tracker/coc";

import { CircularProgress } from "@nextui-org/react";
import Button from "@components/Button";

const APIUpdateButton: FC = () => {
  //Store
  const { updateAPIPlayer, playerTag } = useClashOfClansUpgradeTrackerStore(
    (state) => ({
      updateAPIPlayer: state.updateAPIPlayer,
      playerTag: state.data.playerTag,
    }),
    shallow
  );
  //Mutation
  const { mutate, isLoading } = useTNSA(tNSAupdateAPIPlayer, {
    onSuccess: (data) => {
      updateAPIPlayer(data);
    },
  });
  return (
    <Button.Success
      spinner={<CircularProgress />}
      isLoading={isLoading}
      onPress={() => mutate({ playerTag: playerTag })}
    >
      <p className="font-semibold">API Update</p>
    </Button.Success>
  );
};

export default APIUpdateButton;
