import type { FC } from "react";
import type Base from "@coc/Base";
import { type Village } from "@types";

import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";
import { useState, useCallback } from "react";

import { Checkbox } from "@nextui-org/react";
import Card from "@components/Card";
import Tabs from "@components/Tabs";

import ProgressBar from "@modules/Upgrade Tracker/Clash of Clans/Info/CompletionStatus/ProgressBar";

import { builderHeroes, homeHeroes } from "@constants/clashOfClans";

import {
  getRemainingCostsAndTime as _getRemainingCostsAndTime,
  isStructure,
  isHero,
  isLaboratory,
  isPetHouse,
  isWall,
} from "@utils/clashOfClans";
import { toCapitalize } from "@utils/index";

const CompletionStatus: FC<{ village: Village }> = ({ village }) => {
  //Store
  const { data, getHallLevel, getVillageData } =
    useClashOfClansUpgradeTrackerStore(
      (state) => ({
        data: state.data,
        getHallLevel: state.getHallLevel,
        getVillageData: state.getVillageData,
      }),
      shallow
    );
  //Data
  const villageData = getVillageData(village);
  //Tab
  const [showEntireProgress, setShowEntireProgress] = useState(true);
  //Costs and time calculator
  const getRemainingCostsAndTime = useCallback(
    (
      filter?: Parameters<typeof _getRemainingCostsAndTime>["4"],
      structureData?: boolean
    ) => {
      return _getRemainingCostsAndTime(
        getHallLevel(village),
        data.builderSeasonBoost,
        data.researchSeasonBoost,
        village,
        filter,
        structureData ? data : undefined,
        !structureData && !showEntireProgress
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showEntireProgress, data]
  );
  //All
  const { cost: allRemainingCosts, time: allRemainingTime } =
    getRemainingCostsAndTime(undefined, true);
  const { cost: allCosts, time: allTime } = getRemainingCostsAndTime();
  //Structures
  const structureFilter = (item: Base) => isStructure(item.type);

  const { cost: structureRemainingCosts, time: structureRemainingTime } =
    getRemainingCostsAndTime(structureFilter, true);
  const { cost: structureCosts, time: structureTime } =
    getRemainingCostsAndTime(structureFilter);
  //Heroes
  const heroFilter = (item: Base) => isHero(item.type);

  const { cost: heroRemainingCosts, time: heroRemainingTime } =
    getRemainingCostsAndTime(heroFilter, true);
  const { cost: heroCosts, time: heroTime } =
    getRemainingCostsAndTime(heroFilter);
  //Laboratory
  const labFilter = (item: Base) => isLaboratory(item.type);

  const { cost: labRemainingCosts, time: labRemainingTime } =
    getRemainingCostsAndTime(labFilter, true);
  const { cost: labCosts, time: labTime } = getRemainingCostsAndTime(labFilter);
  //Pet House
  const petHouseFilter = (item: Base) => isPetHouse(item.type);

  const { cost: petHouseRemainingCosts, time: petHouseRemainingTime } =
    getRemainingCostsAndTime(petHouseFilter, true);
  const { cost: petHouseCosts, time: petHouseTime } =
    getRemainingCostsAndTime(petHouseFilter);
  //Walls
  const wallFilter = (item: Base) => isWall(item.type);

  const { cost: wallRemainingCosts } = getRemainingCostsAndTime(
    wallFilter,
    true
  );
  const { cost: wallCosts } = getRemainingCostsAndTime(wallFilter);
  return (
    <Card className="h-full" isHoverable>
      <Card.Header>
        <div>
          <p className="text-center text-xl">Completion status</p>
          <Checkbox
            color={showEntireProgress ? "primary" : "default"}
            isSelected={showEntireProgress}
            onValueChange={setShowEntireProgress}
          >
            Entire progress
          </Checkbox>
        </div>
      </Card.Header>
      <Card.Body>
        <Tabs items={["cost", "time"] satisfies ("time" | "cost")[]}>
          {(tab) => (
            <Tabs.Item key={tab} title={toCapitalize(tab)}>
              <div className="grid grid-cols-12 gap-1">
                <ProgressBar
                  label="All"
                  allCosts={allCosts}
                  achievedCosts={allRemainingCosts}
                  allTime={allTime}
                  achievedTime={allRemainingTime}
                  tab={tab}
                />
                <ProgressBar
                  label="Structures"
                  allCosts={structureCosts}
                  achievedCosts={structureRemainingCosts}
                  allTime={structureTime}
                  achievedTime={structureRemainingTime}
                  tab={tab}
                  includeBuilders={villageData.builder}
                />
                {((village === "home" && data.player.townHallLevel >= 7) ||
                  (village === "builder" &&
                    data.player.builderHallLevel! >= 5)) && (
                  <ProgressBar
                    label="Heroes"
                    allCosts={heroCosts}
                    achievedCosts={heroRemainingCosts}
                    allTime={heroTime}
                    achievedTime={heroRemainingTime}
                    tab={tab}
                    includeBuilders={
                      villageData.builder >
                      (village === "home" ? homeHeroes : builderHeroes).length
                        ? data.player.heroes.filter(
                            (hero) =>
                              !!(
                                village === "home" ? homeHeroes : builderHeroes
                              ).find(
                                (playerItem) =>
                                  playerItem.name.toLowerCase() ===
                                    hero.name.toLowerCase() &&
                                  playerItem.village ===
                                    (hero.village === "home"
                                      ? "home"
                                      : "builder")
                              )
                          ).length
                        : villageData.builder
                    }
                  />
                )}
                {((village === "home" && data.player.townHallLevel >= 3) ||
                  village === "builder") && (
                  <ProgressBar
                    label={`${village === "home" ? "" : "Star "}Laboratory`}
                    allCosts={labCosts}
                    achievedCosts={labRemainingCosts}
                    allTime={labTime}
                    achievedTime={labRemainingTime}
                    tab={tab}
                  />
                )}
                {village === "home" && data.player.townHallLevel >= 14 && (
                  <ProgressBar
                    label="Pet House"
                    allCosts={petHouseCosts}
                    achievedCosts={petHouseRemainingCosts}
                    allTime={petHouseTime}
                    achievedTime={petHouseRemainingTime}
                    tab={tab}
                  />
                )}
                <ProgressBar
                  label="Walls"
                  isWall
                  allCosts={wallCosts}
                  achievedCosts={wallRemainingCosts}
                  tab={tab}
                />
              </div>
            </Tabs.Item>
          )}
        </Tabs>
      </Card.Body>
    </Card>
  );
};

export default CompletionStatus;
