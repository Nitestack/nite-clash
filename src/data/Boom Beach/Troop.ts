import Base from "@bb/Base";
import { BoomBeachLevel } from "@bb/Base";

export default class Troop extends Base {
  constructor(infos: TroopInfo) {
    const easyArray: BoomBeachLevel[] = [];
    const basicImageUrl = `Troops/${infos.name}`;
    for (let i = 0; i < infos.levels.length; i++)
      easyArray.push({
        ...infos.levels[i],
        costType: "gold",
        imageUrl: `/images/Boom Beach/${basicImageUrl}.png`,
      });
    super({
      name: infos.name,
      levels: easyArray,
      type: "troop",
      baseImageUrl: basicImageUrl,
    });
  }
}

interface TroopInfo {
  name: string;
  levels: BoomBeachLevel[];
}
