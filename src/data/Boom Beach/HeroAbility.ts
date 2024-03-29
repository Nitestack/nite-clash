import Base from "@bb/Base";
import { type BoomBeachLevel } from "@bb/Base";

export default class HeroAbility extends Base {
  constructor(infos: HeroAbilityInfo) {
    const easyArray: BoomBeachLevel[] = [];
    const basicImageUrl = `Heroes/Hero Abilities/${infos.name}`;
    for (let i = 0; i < 4; i++)
      easyArray.push({
        upgradeDuration:
          i === 0
            ? "8h"
            : i === 1
            ? "16h"
            : i === 2
            ? "1d 8h"
            : i === 3
            ? "2d 16h"
            : "5d 8h",
        expPoints: 0,
        costType: "heroToken",
        price: [i === 0 ? 8 : i === 1 ? 16 : i === 2 ? 32 : i === 3 ? 64 : 128],
        imageUrl: `/images/Boom Beach/${basicImageUrl}.png`,
      });
    super({
      name: infos.name,
      levels: easyArray,
      type: "heroAbility",
      baseImageUrl: basicImageUrl,
    });
  }
}

interface HeroAbilityInfo {
  name: string;
}
