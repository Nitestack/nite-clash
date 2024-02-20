import Base from "@bb/Base";
import { type BoomBeachLevel } from "@bb/Base";

export default class Economy extends Base {
  constructor(infos: EconomyInfo) {
    const easyArray: BoomBeachLevel[] = [];
    for (let i = 0; i < infos.levels.length; i++)
      easyArray.push({
        ...infos.levels[i],
        costType:
          infos.name === "Iron Mine"
            ? "woodStone"
            : infos.name === "Sawmill"
            ? "stoneIron"
            : infos.name === "Quarry"
            ? "woodIron"
            : "woodStoneIron",
      });
    super({
      name: infos.name,
      levels: easyArray,
      type: "economy",
      baseImageUrl: `Economy/${infos.name}`,
    });
  }
}

interface EconomyInfo {
  name: string;
  levels: BoomBeachLevel[];
}
