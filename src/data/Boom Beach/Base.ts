import Util from "@util";

export default class Base {
  constructor(infos: BaseInfo) {
    this.name = infos.name;
    this.type = infos.type;
    this.levels = infos.levels.map((level) => ({
      convertedPrice: level.costs.map((cost) => Util.convertNumber(cost)),
      upgradeDurationInSeconds:
        Util.convertMilliseconds(level.upgradeDuration) / 1000,
      imageUrl: `/images/Boom Beach/${infos.baseImageUrl}/${
        infos.levels.indexOf(level) + 1
      }.png`,
      ...level,
    }));
    this.maxLevel = infos.levels.length;
  }
  public name: string;
  public type: Type;
  public maxLevel: number;
  public levels: (
    | BoomBeachConvertedLevel
    | (BoomBeachConvertedLevel & {
        requiredArmoryLevel: number;
      })
  )[];
}

export type Type =
  | "defense"
  | "economy"
  | "support"
  | "mine"
  | "troop"
  | "gunboatAbility"
  | "hero"
  | "heroAbility";

interface BaseInfo {
  name: string;
  type: Type;
  levels: (
    | BoomBeachLevel
    | (BoomBeachLevel & {
        requiredArmoryLevel: number;
      })
  )[];
  baseImageUrl: string;
}

type BoomBeachConvertedLevel = BoomBeachLevel & {
  convertedPrice: string[];
  upgradeDurationInSeconds: number;
  imageUrl: string;
  costType?:
    | "gold"
    | "heroToken"
    | "woodStoneIron"
    | "stoneIron"
    | "woodIron"
    | "woodStone";
};

export interface BoomBeachLevel {
  costType?:
    | "gold"
    | "heroToken"
    | "woodStoneIron"
    | "stoneIron"
    | "woodIron"
    | "woodStone";
  price: number[];
  upgradeDuration: string;
  expPoints?: number;
  imageUrl?: string;
}
