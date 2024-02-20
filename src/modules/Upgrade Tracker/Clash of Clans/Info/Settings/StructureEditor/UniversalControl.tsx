import { type FC, useState, useMemo } from "react";
import { type Village } from "@types";
import { type ClashOfClansType } from "@coc/Base";

import { useStructureStore } from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/store";
import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";

import { home, builder } from "@constants/clashOfClans";

import Button from "@components/Button";
import ResponsiveImage from "@components/ResponsiveImage";
import { getHallItem, getItemAmount, getMaxedLevel } from "@utils/clashOfClans";

const UniversalControl: FC<{
  items: { name: string; id: string; type: ClashOfClansType }[];
  village: Village;
}> = ({ items, village }) => {
  //Store
  const { getHallLevel } = useClashOfClansUpgradeTrackerStore(
    (state) => ({
      getHallLevel: state.getHallLevel,
    }),
    shallow
  );
  const {
    setGlobalSliderValue,
    setGlobalSliderValueOnly,
    setMultipleSliderValues,
    setWallSliders,
  } = useStructureStore(
    (state) => ({
      setGlobalSliderValue: state.setGlobalSliderValue,
      setGlobalSliderValueOnly: state.setGlobalSliderValueOnly,
      setMultipleSliderValues: state.setMultipleSliderValues,
      setWallSliders: state.setWallSliders,
    }),
    shallow
  );
  //State
  const [hallLevel, setHallLevel] = useState(getHallLevel(village) - 1);
  const [loading, setLoading] = useState(false);
  //Hall images
  const hallImages = useMemo(() => {
    const hall = (village === "home" ? home : builder).find((item) =>
      item.name.toLowerCase().includes("hall")
    )!;
    return [
      hall.levelNullImagePath,
      ...hall.levels.map((level) => level.imageUrl),
    ];
  }, [village]);
  //Input handler
  function increment() {
    setHallLevel((currentHallLevel) => {
      //If the incremented hall level is too high
      if (currentHallLevel + 1 > getHallLevel(village)) return currentHallLevel;
      //Change the levels
      onLevelChange(currentHallLevel + 1);
      return currentHallLevel + 1;
    });
  }
  function decrement() {
    setHallLevel((currentHallLevel) => {
      //If the decremented hall level is too low
      if (currentHallLevel - 1 < 1) return currentHallLevel;
      //Change the levels
      onLevelChange(currentHallLevel - 1);
      return currentHallLevel - 1;
    });
  }
  function onLevelChange(newHallLevel: number) {
    //Loading indicator to prevent spaming
    setLoading(true);

    //Loop over all items
    for (const item of items) {
      const hallItem = getHallItem(item.id, newHallLevel, village);
      //If no hall item was found for the specified hall level, set all values to 0
      if (!hallItem) {
        setGlobalSliderValue(item.id, 0);
        continue;
      }
      const amount = getItemAmount(item, newHallLevel, village);
      const maxedAmount = getItemAmount(item, getHallLevel(village), village);
      const hallMaxedLevel = getMaxedLevel(item, newHallLevel, village);
      if (amount === maxedAmount) {
        //If all items are available at the player's current hall level, set all values to max
        setGlobalSliderValue(item.id, hallMaxedLevel);
      } else {
        setMultipleSliderValues(item.id, [
          ...(Array(amount).fill(hallMaxedLevel) as number[]), //items available at "newHallLevel" setting to max
          ...(Array(maxedAmount - amount).fill(0) as number[]), //remaining items setting to 0
        ]);
        setGlobalSliderValueOnly(item.id, 0); //Set global slider 0 since some items are level 0
      }
    }
    //Walls
    const wallItem = getHallItem("wall", newHallLevel, village);
    if (wallItem) {
      const amount = getItemAmount(
        { id: "wall", type: "wall" },
        newHallLevel,
        village
      );
      const maxedAmount = getItemAmount(
        { id: "wall", type: "wall" },
        getHallLevel(village),
        village
      );
      const hallMaxedLevel = getMaxedLevel(
        { id: "wall", name: "Wall" },
        newHallLevel,
        village
      );
      if (amount === maxedAmount) {
        //If all walls are available at the player's current hall level, set all values to max
        setWallSliders({
          [hallMaxedLevel.toString()]: amount,
        });
      } else {
        setWallSliders({
          "0": maxedAmount - amount,
          [hallMaxedLevel.toString()]: amount,
        });
      }
    }
    //Stop loading
    setLoading(false);
  }
  return (
    <div className="flex items-center">
      <p>Set all levels to</p>
      <div className="grid grid-cols-3 place-items-center justify-items-center">
        <Button.Icon
          isDisabled={loading || hallLevel <= 1}
          onPress={decrement}
          className="h-10 w-10 p-2"
        >
          <p className="font-semibold">-</p>
        </Button.Icon>
        <div>
          <ResponsiveImage
            alt="Hall image"
            className="h-14 w-14"
            src={hallImages[hallLevel]!}
          />
        </div>
        <Button.Icon
          isDisabled={loading || hallLevel >= getHallLevel(village)}
          onPress={increment}
          className="h-10 w-10 p-2"
        >
          <p className="font-semibold">+</p>
        </Button.Icon>
      </div>
      <p>maxed</p>
    </div>
  );
};

export default UniversalControl;
