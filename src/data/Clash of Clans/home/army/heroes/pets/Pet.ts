import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

import { required } from "@utils/clashOfClans";

export default class HomePet extends Base {
  constructor(infos: PetInfo) {
    const basicImageUrl = `Home/Pets/${infos.name}`;
    super({
      id: infos.id,
      name: infos.name,
      type: "pet",
      village: "home",
      levels: infos.levels.map((level) => ({
        ...level,
        costType: "darkElixir",
        imageUrl: `/images/Clash of Clans/${basicImageUrl}.png`,
        text: level.text ? required(level.text) : null,
        upgradeDuration: level.text ? "0s" : level.upgradeDuration,
        price: level.text ? 0 : level.price,
      })),
      baseImageUrl: basicImageUrl,
      imagePathLv0: `/images/Clash of Clans/${basicImageUrl}_Locked.png`,
    });
  }
}

interface PetInfo {
  id: string;
  name: string;
  levels: (ClashOfClansInfoLevel & {
    text?: string;
  })[];
}
