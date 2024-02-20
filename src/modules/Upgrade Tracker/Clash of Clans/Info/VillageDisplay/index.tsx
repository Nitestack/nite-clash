import { type FC } from "react";
import { type Village } from "@types";

import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";

import { getHallImage, getTownHallWeapon } from "@utils/clashOfClans";

import {
  maxedTownHallLevel,
  maxedBuilderHallLevel,
} from "@constants/clashOfClans";

import Card from "@components/Card";
import Button from "@components/Button";
import ResponsiveImage from "@components/ResponsiveImage";

import OttosOutpost from "@modules/Upgrade Tracker/Clash of Clans/Info/VillageDisplay/ottosOutpost";

import { classNames } from "@utils/index";

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const VillageDisplay: FC<{ village: Village }> = ({ village }) => {
  const { getHallLevel, townHallWeaponLevel } =
    useClashOfClansUpgradeTrackerStore(
      (state) => ({
        getHallLevel: state.getHallLevel,
        townHallWeaponLevel: state.data.player.townHallWeaponLevel,
      }),
      shallow
    );
  const hallLevel = getHallLevel(village);
  const isMaxedHallLevel =
    (village === "home" ? maxedTownHallLevel : maxedBuilderHallLevel) ==
      hallLevel &&
    (village === "home"
      ? (townHallWeaponLevel ??
          5) /*Town Hall levels under 12 don't have a weapon level, so this condition is always true*/ ===
        5
      : true);
  return (
    <Card className="h-full" isHoverable>
      <Card.Body>
        <div
          className={classNames(
            "space-y-8 sm:flex sm:space-y-0 md:block md:space-y-8 xl:flex xl:space-y-0 xl:p-4",
            village === "builder" && hallLevel >= 6
              ? "justify-between"
              : "justify-center"
          )}
        >
          <div className="flex flex-col items-center space-y-6">
            <p className="text-xl">
              {village === "home" ? "Town" : "Builder"} Hall {hallLevel}{" "}
              {village === "home" && townHallWeaponLevel
                ? ` ⭐${townHallWeaponLevel}`
                : ""}
            </p>
            <ResponsiveImage
              alt={`${
                village === "home" ? "Town" : "Builder"
              } Hall ${hallLevel}${
                townHallWeaponLevel ? ` ⭐${townHallWeaponLevel}` : ""
              }`}
              className="h-32 w-32"
              src={getHallImage(village, hallLevel, townHallWeaponLevel)}
            />
            {!isMaxedHallLevel && (
              <Button startIcon={<ArrowUpCircleIcon className="h-6 w-6" />}>
                <p className="font-semibold">
                  Upgrade{" "}
                  {village === "home"
                    ? townHallWeaponLevel && townHallWeaponLevel != 5
                      ? getTownHallWeapon(hallLevel, true)
                      : "Town Hall"
                    : "Builder Hall"}
                </p>
              </Button>
            )}
          </div>
          <OttosOutpost village={village} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default VillageDisplay;
