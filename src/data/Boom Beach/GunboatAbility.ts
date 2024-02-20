import Base from "@bb/Base";
import { BoomBeachLevel } from "@bb/Base";

export default class GunboatAbility extends Base {
  constructor(infos: GunboatAbilityInfo) {
    const easyArray: BoomBeachLevel[] = [];
    const basicImageUrl = `Gunboat Abilities/${infos.name}`;
    for (let i = 0; i < infos.levels.length; i++)
      easyArray.push({
        ...infos.levels[i],
        costType: "gold",
        imageUrl: `/images/Boom Beach/${basicImageUrl}.png`,
      });
    super({
      name: infos.name,
      levels: easyArray,
      type: "gunboatAbility",
      baseImageUrl: basicImageUrl,
    });
  }
}

interface GunboatAbilityInfo {
  name: string;
  levels: BoomBeachLevel[];
}
