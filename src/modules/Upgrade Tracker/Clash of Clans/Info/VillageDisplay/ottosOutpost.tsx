import { type FC } from "react";
import { type Village } from "@types";

import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";

import Button from "@components/Button";
import ResponsiveImage from "@components/ResponsiveImage";

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const OttosOutpost: FC<{ village: Village }> = ({ village }) => {
  //Store
  const { ottosOutpostLevel, getHallLevel } =
    useClashOfClansUpgradeTrackerStore(
      (state) => ({
        ottosOutpostLevel: state.data.builderBase?.ottosOutpost[0] ?? 1,
        getHallLevel: state.getHallLevel,
      }),
      shallow
    );
  if (village === "builder" && getHallLevel(village) >= 6)
    return (
      <div className="flex flex-col items-center space-y-6">
        <p className="text-xl">O.T.T.O&apos;s Outpost</p>
        <ResponsiveImage
          alt={`O.T.T.O's Outpost Level ${ottosOutpostLevel}`}
          className="h-32 w-32"
          src={`/images/Clash of Clans/Builder/O.T.T.O's Outpost/${ottosOutpostLevel}.png`}
        />
        <Button startIcon={<ArrowUpCircleIcon className="h-6 w-6" />}>
          <p className="font-semibold">Upgrade O.T.T.O&apos;s Outpost</p>
        </Button>
      </div>
    );
  else return null;
};

export default OttosOutpost;
