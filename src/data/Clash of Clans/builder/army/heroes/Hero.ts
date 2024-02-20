import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

import { mapLevels } from "@utils/clashOfClans";

export default class BuilderHero extends Base {
  constructor(infos: HeroInfo) {
    const basicImageUrl = `Builder/Heroes/${infos.name}`;
    super({
      id: infos.id,
      name: infos.name,
      type: "hero",
      village: "builder",
      levels: mapLevels(infos.levels, infos.startLevel).map((level, i) => {
        let imageLevel = i + 1;
        if (infos.name === "Battle Machine") {
          if (imageLevel >= 1 && imageLevel < 10) imageLevel = 1;
          else if (imageLevel >= 10 && imageLevel < 20) imageLevel = 10;
          else if (imageLevel >= 20 && imageLevel < 26) imageLevel = 20;
          else if (imageLevel >= 26 && imageLevel < 30) imageLevel = 26;
          else if (imageLevel >= 30) imageLevel = 30;
        }
        return {
          ...level,
          costType: "builderElixir",
          imageUrl: `/images/Clash of Clans/${basicImageUrl}/${imageLevel}.png`,
        };
      }),
      baseImageUrl: basicImageUrl,
      imagePathLv0: `/images/Clash of Clans/${basicImageUrl}/0.png`,
    });
  }
}

interface HeroInfo {
  id: string;
  name: string;
  levels: ClashOfClansInfoLevel[];
  startLevel?: number;
}
