import { type FC } from "react";

import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";

const PlayerDisplay: FC = () => {
  const { playerName, playerTag } = useClashOfClansUpgradeTrackerStore(
    (store) => ({
      playerName: store.data.player.name,
      playerTag: store.data.player.tag,
    }),
    shallow
  );
  return (
    <div className="my-2">
      <p className="text-center text-3xl sm:text-5xl">{playerName}</p>
      <p className="text-center text-2xl text-gray-500 sm:text-3xl">
        {playerTag}
      </p>
    </div>
  );
};

export default PlayerDisplay;
