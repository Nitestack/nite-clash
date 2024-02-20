import { type FC } from "react";
import { type Village } from "@types";

import {
  useStructureStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/store";

import Card from "@components/Card";
import { WallSlider } from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/Sliders";

import {
  home,
  builder,
  homeWallLimit,
  builderWallLimit,
} from "@constants/clashOfClans";

import { getItemAmount, getMaxedLevel } from "@utils/clashOfClans";
import { classNames, keysFromObject } from "@utils/index";

const WallSliders: FC<{ village: Village; hallLevel: number }> = ({
  village,
  hallLevel,
}) => {
  //Store
  const { wallSliders, isValidWallAmount } = useStructureStore(
    (state) => ({
      wallSliders: state.wallSliders,
      isValidWallAmount: state.isValidWallAmount,
    }),
    shallow
  );
  const wall = (village === "home" ? home : builder).find(
    (item) => item.id.toLowerCase() === "wall"
  )!;
  const previousWallAmount = getItemAmount(
    { id: "wall", type: "wall" },
    hallLevel - 1,
    village
  );
  const wallAmount = getItemAmount(
    { id: "wall", type: "wall" },
    hallLevel,
    village
  );
  const wallMaxedLevel = getMaxedLevel(
    { id: "wall", name: "Wall" },
    hallLevel,
    village
  );
  const imagePaths = [
    wall.levelNullImagePath,
    ...wall.levels.map((level) => level.imageUrl),
  ];
  const isSameAmount = previousWallAmount === wallAmount;
  return (
    <div className="col-span-full space-y-2 sm:p-4">
      <p className="text-xl">Walls</p>
      <Card>
        <Card.Header className="items-center justify-center">
          <p className="text-lg">Overview</p>
        </Card.Header>
        <Card.Body className="text-center">
          <p className="text-lg">Maxed level: {wallMaxedLevel}</p>
          <p className="text-lg">Maxed amount: {wallAmount}</p>
          <p className="text-lg">
            Built:{" "}
            <span
              className={classNames(
                isValidWallAmount(wallAmount)
                  ? "text-green-500"
                  : "text-red-500"
              )}
            >
              {keysFromObject(wallSliders).reduce(
                (prev, currentKey) => wallSliders[currentKey]! + prev,
                0
              )}
            </span>{" "}
            / {wallAmount}
          </p>
        </Card.Body>
      </Card>
      <div>
        <div className="space-y-2">
          <p>Set each level individually</p>
          {Array.from(
            {
              length: wallMaxedLevel + 1,
            },
            (_, i) =>
              isSameAmount && i == 0 ? null : (
                <WallSlider
                  key={"wall" + i.toString()}
                  wallLevel={i}
                  imageUrl={imagePaths[i]!}
                  max={
                    i === 0
                      ? wallAmount - previousWallAmount
                      : (village === "home" &&
                          !!homeWallLimit &&
                          i === wallMaxedLevel) ||
                        (village === "home" &&
                          !!builderWallLimit &&
                          i === wallMaxedLevel)
                      ? (village === "home" ? homeWallLimit : builderWallLimit)!
                      : wallAmount
                  }
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default WallSliders;
