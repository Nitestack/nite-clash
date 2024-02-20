import Base from "@bb/Base";
import { type BoomBeachLevel } from "@bb/Base";

export default class Hero extends Base {
  constructor(infos: HeroInfo) {
    const easyArray: BoomBeachLevel[] = [];
    const basicImageUrl = `Heroes/${infos.name}`;
    for (let i = 0; i < infos.levels.length; i++)
      easyArray.push({
        ...infos.levels[i],
        costType: "gold",
        imageUrl: `/images/Boom Beach/${basicImageUrl}.png`,
      });
    super({
      name: infos.name,
      levels: easyArray,
      type: "hero",
      baseImageUrl: basicImageUrl,
    });
  }
}

interface HeroInfo {
  name: string;
  levels: BoomBeachLevel[];
}
