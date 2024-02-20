import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export default class HomeHero extends Base {
  constructor(infos: HeroInfo) {
    const basicImageUrl = `Home/Heroes/${infos.name}`;
    super({
      id: infos.id,
      name: infos.name,
      type: "hero",
      village: "home",
      levels: infos.levels.map((level, i) => {
        let imageLevel = i + 1;
        if (infos.name === "Barbarian King" || infos.name === "Archer Queen") {
          if (imageLevel >= 1 && imageLevel < 10) imageLevel = 1;
          else if (imageLevel >= 10 && imageLevel < 20) imageLevel = 10;
          else if (imageLevel >= 20 && imageLevel < 41) imageLevel = 20;
          else if (imageLevel >= 41) imageLevel = 41;
        } else if (infos.name === "Grand Warden") {
          if (imageLevel >= 1 && imageLevel < 10) imageLevel = 1;
          else if (imageLevel >= 10) imageLevel = 10;
        } else {
          if (imageLevel >= 1) imageLevel = 1;
        }
        return {
          ...level,
          costType: infos.name === "Grand Warden" ? "elixir" : "darkElixir",
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
}
