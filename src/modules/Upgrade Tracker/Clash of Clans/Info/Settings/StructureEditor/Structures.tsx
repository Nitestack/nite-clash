import { type FC, useMemo } from "react";
import { type Village } from "@types";
import type Base from "@coc/Base";

import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";

import { getItemAmount, getMaxedLevel } from "@utils/clashOfClans";

import {
  GlobalSlider,
  IndividualSlider,
} from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/Sliders";
import WallSliders from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/WallSliders";

const Structures: FC<{ items: Base[]; village: Village }> = ({
  items,
  village,
}) => {
  //Store
  const { getHallLevel } = useClashOfClansUpgradeTrackerStore(
    (state) => ({ getHallLevel: state.getHallLevel }),
    shallow
  );

  const hallLevel = getHallLevel(village);

  const sliderItems = useMemo(() => {
    const renderedItems = items.map(
      ({ name, id, type, levels, levelNullImagePath }) => {
        const previousAmount = getItemAmount(
          { id, type },
          hallLevel - 1,
          village
        );
        const amount = getItemAmount({ id, type }, hallLevel, village);
        const maxedLevel = getMaxedLevel({ id, name }, hallLevel, village);
        const imagePaths = [
          levelNullImagePath,
          ...levels.map((level) => level.imageUrl),
        ];
        const minValues = [
          ...(Array(previousAmount).fill(1) as number[]),
          ...(Array(amount - previousAmount).fill(0) as number[]),
        ];
        return (
          <div className="sm:p-4" key={id}>
            <p className="text-lg">
              {name}
              <br />
              <span className="text-base">Maxed Level: {maxedLevel}</span>
            </p>
            <div className="space-y-2">
              {amount > 1 ? (
                <>
                  <p>Set all levels equal</p>
                  <GlobalSlider
                    name={id}
                    images={imagePaths}
                    max={maxedLevel}
                    minValues={minValues}
                  />
                  <p>Set each level individually</p>
                  {Array.from({ length: amount }, (_, i) => (
                    <IndividualSlider
                      key={id + i.toString()}
                      structure={{
                        id: i + 1,
                        name: id,
                        images: imagePaths,
                      }}
                      max={maxedLevel}
                      min={minValues[i]}
                    />
                  ))}
                </>
              ) : (
                <>
                  <p>Set the level</p>
                  <GlobalSlider
                    name={id}
                    images={imagePaths}
                    max={maxedLevel}
                    minValues={minValues}
                  />
                </>
              )}
            </div>
          </div>
        );
      }
    );
    return [
      ...renderedItems,
      <WallSliders key="walls" village={village} hallLevel={hallLevel} />,
    ];
  }, [items, hallLevel]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {sliderItems}
    </div>
  );
};

export default Structures;
