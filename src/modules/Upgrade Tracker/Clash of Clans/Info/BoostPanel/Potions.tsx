import { type FC } from "react";
import { type Village } from "@prisma/client";

import Button from "@components/Button";
import ResponsiveImage from "@components/ResponsiveImage";

import { toCapitalize } from "@utils/index";
import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";

const Potions: FC<{ village: Village }> = ({ village }) => {
  //Store
  const { getHallLevel } = useClashOfClansUpgradeTrackerStore(
    (store) => ({
      getHallLevel: store.getHallLevel,
    }),
    shallow
  );

  const hallLevel = getHallLevel(village);
  return (
    <div className="md:flex md:flex-col md:items-center">
      {(["builder", "research", "pet"] as const).map((magicItemName) => {
        const isUnlocked =
          village === "home"
            ? magicItemName === "pet"
              ? hallLevel >= 14
              : magicItemName === "research"
              ? hallLevel >= 3
              : true
            : true;

        if (isUnlocked)
          return (
            <Button key={magicItemName} size="xl">
              <div className="flex items-center justify-between">
                <ResponsiveImage
                  className="h-12 w-12"
                  src={`/images/Clash of Clans/Magic Items/${toCapitalize(
                    magicItemName
                  )} Potion.png`}
                  alt={`${toCapitalize(magicItemName)} Potion`}
                />
                <p className="font-semibold">
                  Use {toCapitalize(magicItemName)} Potion
                </p>
              </div>
            </Button>
          );
        else return null;
      })}
    </div>
  );
};

export default Potions;
