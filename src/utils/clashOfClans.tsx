/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  type ClashOfClansInfoLevel,
  type ClashOfClansCostType,
  type ClashOfClansType,
  type ClashOfClansLabTextLevel,
  type ClashOfClansLabLevel,
} from "@coc/Base";
import type Base from "@coc/Base";
import { type APIPlayerItem } from "clashofclans.js";
import { type DBVillageType, type Village, type DBVillage } from "@types";

import ResponsiveImage from "@components/ResponsiveImage";

import { keysFromObject, toCapitalize } from "@utils/index";

import {
  townHall,
  builderHall,
  homeTroops,
  homeDarkTroops,
  homeElixirSpells,
  homeDarkSpells,
  homeSiegeMachines,
  homePets,
  home,
  builder,
  homeWallLimit,
  maxedTownHallLevel,
  builderWallLimit,
  maxedBuilderHallLevel,
  builderTroops,
} from "@constants/clashOfClans";

/**
 * Check if the item is in the API troops list
 * @param type The item type
 */
export function isInApiTroops(type: ClashOfClansType) {
  const apiTroops: ClashOfClansType[] = [
    "troop",
    "darkTroop",
    "siegeMachine",
    "pet",
  ];
  return apiTroops.includes(type);
}

/**
 * Check if the item is in the API spells list
 * @param type The item type
 */
export function isInApiSpells(type: ClashOfClansType) {
  return type === "spell";
}

/**
 * Check if the item is in the API heroes list
 * @param type The item type
 */
export function isInApiHeroes(type: ClashOfClansType) {
  return type === "hero";
}

/**
 * Check if the item is a structure
 * @param type The item type
 */
export function isStructure(type: ClashOfClansType) {
  const structures: ClashOfClansType[] = [
    "army",
    "defense",
    "resource",
    "trap",
  ];
  return structures.includes(type);
}

/**
 * Check if the item is upgradable by the Laboratory
 * @param type The item type
 */
export function isLaboratory(type: ClashOfClansType) {
  const lab: ClashOfClansType[] = [
    "troop",
    "darkTroop",
    "spell",
    "siegeMachine",
  ];
  return lab.includes(type);
}

/**
 * Check if the item is upgradable by the Pet House
 * @param type The item type
 */
export function isPetHouse(type: ClashOfClansType) {
  return type === "pet";
}

/**
 * Check if the item is a wall
 * @param type The item type
 */
export function isWall(type: ClashOfClansType) {
  return type === "wall";
}

/**
 * Check if the item is a hero
 * @param type The item type
 */
export function isHero(type: ClashOfClansType) {
  return type === "hero";
}

/**
 * Check if the item is a hall
 * @param name The item name
 */
export function isHall(name: string) {
  return name.toLowerCase().includes("hall");
}

/**
 * Check if the item is the town hall weapon of the Home Village
 * @param itemName The item name
 */
export function isHomeVillageTownHallWeapon(itemName: string) {
  return itemName.toLowerCase().includes("giga");
}

/**
 * Check if the item is the barracks of the Home Village
 * @param itemName The item name
 */
export function isHomeVillageBarracks(itemName: string) {
  return itemName.toLowerCase() === "barracks";
}

/**
 * Check if the item is the builder barracks of the Builder Base
 * @param itemName The item name
 */
export function isBuilderBaseBuilderBarracks(itemName: string) {
  return itemName.toLowerCase() === "builder barracks";
}

/**
 * Check if the item is the dark barracks of the Home Village
 * @param itemName The item name
 */
export function isHomeVillageDarkBarracks(itemName: string) {
  return itemName.toLowerCase() === "dark barracks";
}

/**
 * Check if the item is the spell factory of the Home Village
 * @param itemName The item name
 */
export function isHomeVillageSpellFactory(itemName: string) {
  return itemName.toLowerCase() === "spell factory";
}

/**
 * Check if the item is the dark spell factory of the Home Village
 * @param itemName The item name
 */
export function isHomeVillageDarkSpellFactory(itemName: string) {
  return itemName.toLowerCase() === "dark spell factory";
}

/**
 * Check if the item is the workshop of the Home Village
 * @param itemName The item name
 */
export function isHomeVillageWorkshop(itemName: string) {
  return itemName.toLowerCase() === "workshop";
}

/**
 * Check if the item is the Pet House of the Home Village
 * @param itemName The item name
 */
export function isHomeVillagePetHouse(itemName: string) {
  return itemName.toLowerCase() === "pet house";
}

/**
 * Check if the item is either the Army Camp or the Reinforcement Camp of the Builder Base
 * @param itemName The item name
 */
export function isAnBuilderBaseCamp(itemName: string) {
  return itemName.toLowerCase().includes("camp");
}

/**
 * Returns the amount of instances upgradable
 * @param item The item type and id
 * @param hallLevel The hall level
 * @param village The village
 */
export function getItemAmount(
  item: { id: string; type: ClashOfClansType },
  hallLevel: number,
  village: Village
) {
  const hallItem = getHallItem(item.id, hallLevel, village);
  if (!hallItem) return 0;
  //troops, spells, siege machines, pets or heroes have only one instance to be upgraded
  if (
    isInApiTroops(item.type) ||
    isInApiSpells(item.type) ||
    isInApiHeroes(item.type)
  )
    return 1;
  //structure or walls
  else return typeof hallItem === "number" ? hallItem : hallItem.amount;
}

/**
 * Returns the hall item
 * @param itemId The item id
 * @param hallLevel The hall level
 * @param village The village
 */
export function getHallItem(
  itemId: string,
  hallLevel: number,
  village: Village
) {
  const hall = (village === "home" ? townHall : builderHall)[hallLevel - 1];
  if (hall) return hall[itemId];
}

/**
 * Returns the maxed level of an item
 * @param item The item id and name
 * @param hallLevel The hall level
 * @param village The village
 */
export function getMaxedLevel(
  item: { id: string; name: string },
  hallLevel: number,
  village: Village
) {
  //Get the hall item
  const hallItem = getHallItem(item.id, hallLevel, village);
  if (!hallItem) return 0;
  //Whether it is the home village or not
  if (village === "home") {
    //Alone standing number means the maxed level and amount of one
    return typeof hallItem === "number" ? hallItem : hallItem.maxLevel;
  } else {
    //Alone standing number means the maxed amount and the maxed level of the builder hall
    return typeof hallItem === "object" ? hallItem.maxLevel : hallLevel;
  }
}

/**
 * Returns the season boost number in percentage based on the item tyüe
 * @param type The item type
 * @param builderBoost The builder boost
 * @param researchBoost The research boost
 */
export function getSeasonBoost(
  type: ClashOfClansType,
  builderBoost: number,
  researchBoost: number
) {
  return isLaboratory(type) || isPetHouse(type) ? researchBoost : builderBoost;
}

/**
 * Calculates the cost/time with the season boost applied
 * @param value The cost/time
 * @param percentage The percentage of the season boost
 */
export function calculateSeasonBoost(value: number, percentage: number) {
  return value - (percentage / 100) * value;
}

/**
 * Returns the levels for the item
 * @param item The item id, name and type
 * @param troops The troops of the API player
 * @param spells The spells of the API player
 * @param heroes The heroes of the API player
 * @param hallLevel The hall level
 * @param village The village
 * @param villageSchema The database village
 * @param townHallWeaponLevel The level of the town hall weapon
 */
export function getLevels(
  item: {
    type: ClashOfClansType;
    name: string;
    id: string;
  },
  troops: APIPlayerItem[],
  spells: APIPlayerItem[],
  heroes: APIPlayerItem[],
  hallLevel: number,
  village: Village,
  villageSchema: DBVillageType,
  townHallWeaponLevel?: number
) {
  const amount = getItemAmount(item, hallLevel, village);

  let levels: number[];

  //If the item is the town hall weapon
  if (isHomeVillageTownHallWeapon(item.name)) levels = [townHallWeaponLevel!];
  //If the item is a hero
  else if (isInApiHeroes(item.type))
    levels = [
      heroes.find(
        (hero) =>
          hero.name.toLowerCase() === item.name.toLowerCase() &&
          hero.village === (village === "home" ? "home" : "builderBase")
      )?.level ?? 0,
    ];
  //If the item is a troop, siege machine or pet
  else if (isInApiTroops(item.type))
    levels = [
      troops.find(
        (playerItem) =>
          playerItem.name.toLowerCase() === item.name.toLowerCase() &&
          playerItem.village === (village === "home" ? "home" : "builderBase")
      )?.level ?? 0,
    ];
  //If the item is a spell
  else if (isInApiSpells(item.type))
    levels = [
      spells.find(
        (spell) =>
          spell.name.toLowerCase() === item.name.toLowerCase() &&
          spell.village === (village === "home" ? "home" : "builderBase")
      )?.level ?? 0,
    ];
  //If the item is the barracks of the home village
  else if (isHomeVillageBarracks(item.name))
    levels = [
      troops.filter(
        (troop) =>
          !!homeTroops.find(
            (playerItem) =>
              playerItem.name.toLowerCase() === troop.name.toLowerCase() &&
              playerItem.village ===
                (troop.village === "home" ? "home" : "builder")
          )
      ).length,
    ];
  //If the item is the dark barracks of the home village
  else if (isHomeVillageDarkBarracks(item.name))
    levels = [
      troops.filter(
        (troop) =>
          !!homeDarkTroops.find(
            (playerItem) =>
              playerItem.name.toLowerCase() === troop.name.toLowerCase() &&
              playerItem.village ===
                (troop.village === "home" ? "home" : "builder")
          )
      ).length,
    ];
  //If the item is the Builder Barracks of the Builder Base
  else if (isBuilderBaseBuilderBarracks(item.name))
    levels = [
      troops.filter(
        (troop) =>
          !!builderTroops.find(
            (playerItem) =>
              playerItem.name.toLowerCase() === troop.name.toLowerCase() &&
              playerItem.village ==
                (troop.village === "home" ? "home" : "builder")
          )
      ).length,
    ];
  //If the item is the spell factory of the home village
  else if (isHomeVillageSpellFactory(item.name)) {
    const spellsUnlocked = spells.filter(
      (spell) =>
        !!homeElixirSpells.find(
          (playerItem) =>
            playerItem.name.toLowerCase() === spell.name.toLowerCase() &&
            playerItem.village ===
              (spell.village === "home" ? "home" : "builder")
        )
    );
    //At Spell Factory Lv. 4 you get two spells, leading to remove one
    if (spellsUnlocked.length >= 5) levels = [spellsUnlocked.length - 1];
    else levels = [spellsUnlocked.length];
  } //If the item is the dark spell factory of the home village
  else if (isHomeVillageDarkSpellFactory(item.name))
    levels = [
      spells.filter((spell) =>
        homeDarkSpells.find(
          (playerItem) =>
            playerItem.name.toLowerCase() === spell.name.toLowerCase() &&
            playerItem.village ===
              (spell.village === "home" ? "home" : "builder")
        )
      ).length,
    ];
  //If the item is the workshop of the home village
  else if (isHomeVillageWorkshop(item.name))
    levels = [
      troops.filter((troop) =>
        homeSiegeMachines.find(
          (playerItem) =>
            playerItem.name.toLowerCase() === troop.name.toLowerCase() &&
            playerItem.village ===
              (troop.village === "home" ? "home" : "builder")
        )
      ).length,
    ];
  //If the item is the Pet House of the home village
  else if (isHomeVillagePetHouse(item.name))
    levels = [
      troops.filter((troop) =>
        homePets.find(
          (playerItem) =>
            playerItem.name.toLowerCase() === troop.name.toLowerCase() &&
            playerItem.village ===
              (troop.village === "home" ? "home" : "builder")
        )
      ).length,
    ];
  //Rest of the structures
  else levels = villageSchema[item.id] ?? [0];

  //If there are structures left, leave them at level 0
  if (levels.length < amount)
    levels = [
      ...levels,
      ...(Array(amount - levels.length).fill(0) as number[]),
    ];

  return levels;
}

/**
 * Returns the remaining cost and time
 * @param hallLevel The hall level
 * @param builderSeasonBoost The builder season boost
 * @param researchSeasonBoost The builder season boost
 * @param village The village
 * @param filter Optional filter applied to items
 * @param data The database data
 * @param lastHallLevelMaxed Whether the remaining cost should be calculated since the last maxed hall level
 */
export function getRemainingCostsAndTime(
  hallLevel: number,
  builderSeasonBoost: number,
  researchSeasonBoost: number,
  village: Village,
  filter?: (value: Base, index: number, array: Base[]) => boolean,
  data?: DBVillage,
  lastHallLevelMaxed?: boolean
): {
  cost: Record<ClashOfClansCostType, number>;
  time: number;
} {
  //All hall items
  const hall = (village === "home" ? townHall : builderHall)[hallLevel - 1]!;
  //All costs with an optional filtering function
  const allCosts = (village === "home" ? home : builder).filter(
    filter ?? (() => true)
  );

  //@ts-expect-error Total cost (only necessary keys are added)
  const totalCosts: Record<ClashOfClansCostType, number> = {};

  //Total time
  let totalTime = 0;

  //Loop over all hall items
  for (const itemKey of keysFromObject(hall).filter(
    (itemKey) => itemKey !== "wall" && !!allCosts.find((i) => i.id === itemKey)
  )) {
    //Item cost information
    const item = allCosts.find((i) => i.id === itemKey)!;

    //Previous level hall item
    const previousHallItem = getHallItem(item.id, hallLevel - 1, village);
    const previousMaxedLevel = previousHallItem
      ? getMaxedLevel(item, hallLevel - 1, village)
      : 0;
    const previousAmount = previousHallItem
      ? getItemAmount(item, hallLevel - 1, village)
      : 0;
    //Current level hall item
    const maxedLevel = getMaxedLevel(item, hallLevel, village);
    const amount = getItemAmount(item, hallLevel, village);

    /**
     * Levels
     *
     * if there is data, get the levels of the item out of the data
     *
     * if "lastHallLevelMaxed" is true, get the previous maxed levels of the item
     *
     * if neither of that is specified, get the amount of items filled with level 0
     */
    const levels = data
      ? getLevels(
          item,
          data.player.troops,
          data.player.spells,
          data.player.heroes,
          hallLevel,
          village,
          data[village === "home" ? "homeVillage" : "builderBase"],
          data.player.townHallWeaponLevel
        )
      : lastHallLevelMaxed
      ? [
          ...(Array(previousAmount).fill(previousMaxedLevel) as number[]),
          ...(Array(amount - previousAmount).fill(0) as number[]),
        ]
      : (Array(amount).fill(0) as number[]);

    const _isAnBuilderBaseCamp =
      village === "builder" && isAnBuilderBaseCamp(item.name);

    //If there is progress already
    if (data || lastHallLevelMaxed)
      //Loop over all levels of the item
      for (const level of levels) {
        if (level === maxedLevel) continue;

        if (_isAnBuilderBaseCamp) {
          //The costs
          const levelItem = item.levels[levels.indexOf(level)];
          if (!levelItem) continue;
          //If the resource key doesn't exist yet, create it
          if (!totalCosts[levelItem.costType])
            totalCosts[levelItem.costType] = 0;
          //Assign the costs to the item
          totalCosts[levelItem.costType] += calculateSeasonBoost(
            levelItem.costs,
            getSeasonBoost(item.type, builderSeasonBoost, researchSeasonBoost)
          );

          //Assign the item time to the total time
          totalTime += calculateSeasonBoost(
            levelItem.time,
            getSeasonBoost(item.type, builderSeasonBoost, researchSeasonBoost)
          );
        } else {
          //The costs object
          const costs = getCost(item, maxedLevel, level);
          //Loop over all keys of the cost object
          for (const resourceKey of keysFromObject(costs)) {
            //If the resource key doesn't exist yet, create it
            if (!totalCosts[resourceKey]) totalCosts[resourceKey] = 0;
            //Assign the costs to the item
            totalCosts[resourceKey] += costs[resourceKey];
          }

          //Assign the item total time to the total time
          totalTime += getTime(item, maxedLevel, level);
        }
      }
    else {
      if (_isAnBuilderBaseCamp) {
        for (const levelItem of item.levels) {
          //If the resource key doesn't exist yet, create it
          if (!totalCosts[levelItem.costType])
            totalCosts[levelItem.costType] = 0;
          //Assign the costs to the item
          totalCosts[levelItem.costType] += calculateSeasonBoost(
            levelItem.costs,
            getSeasonBoost(item.type, builderSeasonBoost, researchSeasonBoost)
          );

          //Assign the item time to the total time
          totalTime += calculateSeasonBoost(
            levelItem.time,
            getSeasonBoost(item.type, builderSeasonBoost, researchSeasonBoost)
          );
        }
      } else {
        //The costs object
        const costs = getCost(item, maxedLevel);
        //Loop over all keys of the cost object
        for (const resourceKey of keysFromObject(costs)) {
          //If the resource key doesn't exist yet, create it
          if (!totalCosts[resourceKey]) totalCosts[resourceKey] = 0;
          //Assign the costs to the item
          totalCosts[resourceKey] += costs[resourceKey] * amount;
        }

        //Asign the item total time to the total time
        totalTime += getTime(item, maxedLevel) * amount;
      }
    }
  }

  //Hall
  const hallCosts = allCosts.find(
    (item) => item.name === `${village === "home" ? "Town" : "Builder"} Hall`
  );
  if (hallCosts) {
    //If the resource key doesn't exist yet, create it
    if (!totalCosts[village === "home" ? "gold" : "builderGold"])
      totalCosts[village === "home" ? "gold" : "builderGold"] = 0;
    if (lastHallLevelMaxed) {
      //Assign the cost of the current hall level
      totalCosts[village === "home" ? "gold" : "builderGold"] +=
        calculateSeasonBoost(
          hallCosts.levels[hallLevel - 1]!.costs,
          getSeasonBoost(
            hallCosts.type,
            builderSeasonBoost,
            researchSeasonBoost
          )
        );
      //Assign the time of the current hall level
      totalTime += calculateSeasonBoost(
        hallCosts.levels[hallLevel - 1]!.time,
        getSeasonBoost(hallCosts.type, builderSeasonBoost, researchSeasonBoost)
      );
    } else if (!data) {
      //Assign the total costs of the hall
      totalCosts[village === "home" ? "gold" : "builderGold"] += getCost(
        hallCosts,
        hallLevel,
        1
      )[village === "home" ? "gold" : "builderGold"];
      //Assign the total time of the hall
      totalTime += getTime(hallCosts, hallLevel);
    }
  }

  //Walls
  const wallCosts = allCosts.find((item) => item.name === "Wall");
  if (wallCosts) {
    //Previous wall item
    const previousWallMaxedLevel = getMaxedLevel(
      wallCosts,
      hallLevel - 1,
      village
    );
    const previousWallMaxedAmount = getItemAmount(
      wallCosts,
      hallLevel - 1,
      village
    );
    //Current wall item
    const wallMaxedLevel = getMaxedLevel(wallCosts, hallLevel, village);
    const wallMaxedAmount = getItemAmount(wallCosts, hallLevel, village);

    const previousWallMaxedLevelString = previousWallMaxedLevel.toString();

    /**
     * Levels
     *
     * if there is data, get the levels of the item out of the data
     *
     * if "lastHallLevelMaxed" is true, get the previous maxed levels of the item
     *
     * if neither of that is specified, get the amount of items filled with level 0
     */
    const levels = data
      ? data[village === "home" ? "homeVillage" : "builderBase"].walls
      : lastHallLevelMaxed
      ? {
          ...(wallMaxedAmount - previousWallMaxedAmount > 0
            ? {
                "0": wallMaxedAmount - previousWallMaxedAmount,
              }
            : {}),
          [previousWallMaxedLevelString]: previousWallMaxedAmount,
        }
      : {
          "0": wallMaxedAmount,
        };

    //Loop over all levels of the item
    for (const level of keysFromObject(levels).filter(
      (lvl) => parseInt(lvl) != wallMaxedLevel
    )) {
      //Loop over the rest levels of the wall levels
      for (let i = parseInt(level); i < wallMaxedLevel; i++) {
        const levelItem = wallCosts.levels[i]!;
        //If the resource key doesn't exist yet, create it
        if (!totalCosts[levelItem.costType]) totalCosts[levelItem.costType] = 0;
        //Assign the costs of the walls to the total costs
        totalCosts[levelItem.costType] +=
          calculateSeasonBoost(levelItem.costs, builderSeasonBoost) *
          levels[level]!;
      }
    }
    //Wall limit: if home limit is given by Supercell and the hall level is maxed
    if (
      (homeWallLimit &&
        village === "home" &&
        hallLevel === maxedTownHallLevel) ||
      (builderWallLimit &&
        village === "builder" &&
        hallLevel === maxedBuilderHallLevel)
    ) {
      const maxedWallItem = wallCosts.levels[wallCosts.levels.length - 1]!;
      //If the resource key doesn't exist yet, create it
      if (!totalCosts[maxedWallItem.costType])
        totalCosts[maxedWallItem.costType] = 0;
      //Subtract the costs for the walls that are locked by Supercell
      totalCosts[maxedWallItem.costType] -=
        (getItemAmount(wallCosts, hallLevel, village) -
          (village === "home" ? homeWallLimit! : builderWallLimit!)) *
        calculateSeasonBoost(maxedWallItem.costs, builderSeasonBoost);
    }
  }

  //Function to calculate the remaining cost for one item to be maxed for the hall level
  function getCost(item: Base, maxedLevel: number, level?: number) {
    //@ts-expect-error total item cost (only necessary keys are added)
    const totalItemCost: Record<ClashOfClansCostType, number> = {};

    //Loop through all levels of the item
    for (let i = level ?? 0; i < maxedLevel; i++) {
      //Get the level specific information
      const levelItem = item.levels[i];

      if (!levelItem) continue;

      //If the resource key doesn't exist yet, create it
      if (!totalItemCost[levelItem.costType])
        totalItemCost[levelItem.costType] = 0;
      //Assign the costs to the item
      totalItemCost[levelItem.costType] += calculateSeasonBoost(
        levelItem.costs,
        getSeasonBoost(item.type, builderSeasonBoost, researchSeasonBoost)
      );
    }

    return totalItemCost;
  }
  //Function to calculate the remaining time for one item to be maxed for the hall level
  function getTime(item: Base, maxedLevel: number, level?: number) {
    //Total item time
    let totalItemTime = 0;

    //Loop through all levels of the item
    for (let i = level ?? 0; i < maxedLevel; i++) {
      //Get the level specific information
      const levelItem = item.levels[i];

      if (!levelItem) continue;

      totalItemTime += calculateSeasonBoost(
        levelItem.time,
        getSeasonBoost(item.type, builderSeasonBoost, researchSeasonBoost)
      );
    }
    return totalItemTime;
  }

  return {
    time: totalTime,
    cost: totalCosts,
  };
}

/**
 * Checks if the item level can be found/calculated through the API
 * @param item The item name and type
 * @param excludeWalls If it should exclude walls
 */
export function isNotInApi(
  {
    name,
    type,
  }: {
    name: string;
    type: ClashOfClansType;
  },
  excludeWalls?: boolean
) {
  return (
    //Data of API
    !isInApiTroops(type) &&
    !isInApiHeroes(type) &&
    !isInApiSpells(type) &&
    !isHomeVillageTownHallWeapon(name) &&
    !isHall(name) &&
    //Data calculated through API
    !isHomeVillageBarracks(name) &&
    !isBuilderBaseBuilderBarracks(name) &&
    !isHomeVillageDarkBarracks(name) &&
    !isHomeVillageSpellFactory(name) &&
    !isHomeVillageDarkSpellFactory(name) &&
    !isHomeVillageWorkshop(name) &&
    !isHomeVillagePetHouse(name) &&
    (excludeWalls ? !isWall(type) : true)
  );
}

/**
 * Checks if the resource is a regular resource
 * @param type The resource type
 */
export function isRegularResource(type: ClashOfClansCostType) {
  return (
    type === "gold" ||
    type === "builderElixir" ||
    type === "builderGold" ||
    type === "builderGoldAndElixir" ||
    type === "elixir" ||
    type === "goldAndElixir"
  );
}

/**
 * Returns an image for the specified resource
 * @param resource
 */
export function getResourceImage(resource: ClashOfClansCostType) {
  const resourceName =
    toCapitalize(
      resource.toLowerCase().includes("builder") ? "Builder" : "Home"
    ) +
    "/" +
    toCapitalize(resource.replace(/([A-Z]+)/g, " $1").trim());
  return (
    <ResponsiveImage
      className="h-6 w-6"
      alt={resourceName}
      src={`/images/Clash of Clans/${resourceName}.png`}
    />
  );
}

/**
 * Returns the clock image
 */
export function getTimeImage() {
  return (
    <ResponsiveImage
      className="h-8 w-8"
      alt="Clock"
      src="/images/Clash of Clans/Clock.png"
    />
  );
}

/**
 * Returns the name of a town hall weapon
 * @param townHallLevel The town hall level
 * @param withoutNumber Whether to show the version of the weapon
 */
export function getTownHallWeapon(
  townHallLevel: number,
  withoutNumber?: boolean
) {
  if (townHallLevel === 12) return "Giga Tesla";
  else if (townHallLevel >= 13)
    return `Giga Inferno${withoutNumber ? "" : ` ${townHallLevel - 12}`}`;
  else return "";
}

/**
 * Returns an image url for the specified hall level
 * @param hallLevel The hall level
 * @param townHallWeaponLevel The Town Hall Weapon level
 */
export function getHallImage(
  village: Village,
  hallLevel: number,
  townHallWeaponLevel?: number
) {
  //No weaponized town hall
  if ((village === "home" && !townHallWeaponLevel) || village === "builder") {
    const hallCosts = (village === "home" ? home : builder).find(
      (item) => item.name === `${village === "home" ? "Town" : "Builder"} Hall`
    )!;
    return [
      hallCosts.levelNullImagePath,
      ...hallCosts.levels.map((level) => level.imageUrl),
    ][hallLevel]!;
  } else {
    const townHallWeapon = home.find(
      (item) =>
        item.name.toLowerCase() === getTownHallWeapon(hallLevel).toLowerCase()
    )!;
    return townHallWeapon.levels[townHallWeaponLevel! - 1]?.imageUrl as string;
  }
}

/**
 * Get's a text for the required argument
 * @param text The requirement text
 */
export function required(text: string) {
  const arrayOfText = text.split(" ");
  return `Level ${arrayOfText[arrayOfText.length - 1]!} ${arrayOfText
    .slice(0, arrayOfText.length - 2)
    .join(" ")} Required!`;
}

export function getLabLevels(
  levels: (ClashOfClansLabTextLevel | ClashOfClansLabLevel)[],
  costType: ClashOfClansCostType,
  basicImageUrl: string | ((i: number) => string),
  startLevel?: number
): ClashOfClansInfoLevel[] {
  return mapLevels<ClashOfClansLabTextLevel | ClashOfClansLabLevel>(
    levels,
    startLevel
  ).map((level, i) => ({
    ...level,
    costType: costType,
    price: (level as ClashOfClansLabTextLevel).text ? 0 : level.price,
    upgradeDuration: (level as ClashOfClansLabTextLevel).text
      ? "0s"
      : level.upgradeDuration,
    text: (level as ClashOfClansLabTextLevel).text
      ? required((level as ClashOfClansLabTextLevel).text)
      : null,
    requiredLabLevel:
      i === 0 ? null : (level as ClashOfClansLabLevel).requiredLabLevel ?? 0,
    imageUrl: `/images/Clash of Clans/${
      typeof basicImageUrl === "string" ? basicImageUrl : basicImageUrl(i)
    }/${i + 1}.png`,
  }));
}

/**
 * Map levels when unlocking an item has an initial level
 * @param levels The levels
 * @param startLevel The start level of the item
 */
export function mapLevels<
  Info extends ClashOfClansInfoLevel = ClashOfClansInfoLevel
>(levels: Info[], startLevel?: number) {
  return [
    ...((startLevel
      ? Array(startLevel - 1).fill({
          price: 0,
          upgradeDuration: "0s",
        } as unknown as Info)
      : []) as Info[]),
    ...levels,
  ];
}
