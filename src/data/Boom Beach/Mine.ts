import Base from "@bb/Base";
import { BoomBeachLevel } from "@bb/Base";

export default class Mine extends Base {
  constructor(infos: MineInfo) {
    const easyArray: BoomBeachLevel[] = [];
    const basicImageUrl = `Mines/${infos.name}`;
    for (let i = 0; i < infos.levels.length; i++)
      easyArray.push({
        ...infos.levels[i],
        costType: "gold",
        imageUrl: `/images/Boom Beach/${basicImageUrl}.png`,
      });
    super({
      name: infos.name,
      levels: easyArray,
      type: "mine",
      baseImageUrl: basicImageUrl,
    });
  }
}

interface MineInfo {
  name: string;
  levels: BoomBeachLevel[];
}
