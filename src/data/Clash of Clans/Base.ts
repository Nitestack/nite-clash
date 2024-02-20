import { convertTimeToMs, type Units } from "@utils/index";
import { type Village } from "@types";

export default class Base {
  constructor(infos: BaseInfo) {
    this.name = infos.name;
    this.id = infos.id;
    this.type = infos.type;
    this.village = infos.village;
    this.levels = infos.levels.map((level) => {
      const { upgradeDuration, price, ...restLevel } = level;
      const timeInMilliseconds = convertTimeToMs(upgradeDuration);
      const index = infos.levels.indexOf(level);
      return {
        //Default fallback
        costType: "gold",
        imageUrl: `/images/Clash of Clans/${infos.baseImageUrl}/${
          index + 1
        }.png`,
        ...restLevel,
        time: timeInMilliseconds,
        costs: price,
      };
    });
    this.maxLevel = infos.levels.length;
    this.levelNullImagePath = infos.imagePathLv0
      ? infos.imagePathLv0
      : `/images/Clash of Clans/${infos.baseImageUrl}/0.png`;
  }
  public name: string;
  public id: string;
  public type: ClashOfClansType;
  public village: Village;
  public maxLevel: number;
  public levels: ClashOfClansLevel[];
  public levelNullImagePath: string;
}

export type ClashOfClansType =
  | "hall"
  | "defense"
  | "resource"
  | "army"
  | "trap"
  | "troop"
  | "spell"
  | "hero"
  | "pet"
  | "siegeMachine"
  | "darkTroop"
  | "wall";

export type ClashOfClansCostType =
  | "gold"
  | "elixir"
  | "darkElixir"
  | "builderGold"
  | "builderElixir"
  | "goldAndElixir"
  | "builderGoldAndElixir"
  | "gem";

interface BaseInfo {
  name: string;
  id: string;
  village: Village;
  type: ClashOfClansType;
  levels: ClashOfClansInfoLevel[];
  baseImageUrl: string;
  imagePathLv0?: string;
}

export interface ClashOfClansLevel {
  costs: number;
  time: number;
  imageUrl: string;
  text?: string;
  requiredLabLevel?: number;
  costType: ClashOfClansCostType;
}

type TimeUnitString<T extends string> = `${string}${T}`;
type TimeUnit<TUsed extends string = ""> = TUsed extends Units
  ? never
  : TUsed extends ""
  ? TimeUnitString<Units>
  : TimeUnitString<Exclude<Units, TUsed>> | TimeUnit<`${TUsed}${Units}`>;

export interface ClashOfClansInfoLevel {
  costType?: ClashOfClansCostType;
  price: number;
  upgradeDuration: TimeUnit;
  imageUrl?: string;
}

export type ClashOfClansLabTextLevel = ClashOfClansInfoLevel & {
  text: string;
};

export type ClashOfClansLabLevel = ClashOfClansInfoLevel & {
  requiredLabLevel: number;
};
