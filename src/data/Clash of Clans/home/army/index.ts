import Base, {
  type ClashOfClansLabLevel,
  type ClashOfClansLabTextLevel,
} from "@coc/Base";
import type HomeArmy from "@coc/home/army/Army";

import { clanCastle } from "@coc/home/army/clanCastle";
import { armyCamp } from "@coc/home/army/armyCamp";
import { barracks } from "@coc/home/army/barracks";
import { laboratory } from "@coc/home/army/laboratory";
import { spellFactory } from "@coc/home/army/spellFactory";
import { darkBarracks } from "@coc/home/army/darkBarracks";
import { darkSpellFactory } from "@coc/home/army/darkSpellFactory";
import { workshop } from "@coc/home/army/workshop";
import { petHouse } from "@coc/home/army/petHouse";

import { getLabLevels } from "@utils/clashOfClans";

export default class HomeOffense extends Base {
  constructor(infos: OffenseInfo) {
    const basicImageUrl = `Home/${
      infos.type.toLowerCase().includes("troop")
        ? "Troops"
        : infos.type === "spell"
        ? "Spells"
        : "Siege Machines"
    }/${infos.name}`;
    super({
      id: infos.id,
      name: infos.name,
      type: infos.type,
      village: "home",
      levels: getLabLevels(
        infos.levels,
        infos.type === "siegeMachine" || infos.type === "troop"
          ? "elixir"
          : infos.type === "darkTroop"
          ? "darkElixir"
          : infos.costType!, //Cost type must be specified for spells
        (i) =>
          `/images/Clash of Clans/${basicImageUrl}${
            infos.type === "spell" ? ".png" : `/${i + 1}.png`
          }`
      ),
      baseImageUrl: basicImageUrl,
      imagePathLv0: `/images/Clash of Clans/${basicImageUrl}${
        infos.type === "spell" ? "_Locked.png" : "/0.png"
      }`,
    });
  }
}

export interface OffenseInfo {
  id: string;
  name: string;
  levels: (ClashOfClansLabTextLevel | ClashOfClansLabLevel)[];
  costType?: "elixir" | "darkElixir";
  type: "troop" | "spell" | "siegeMachine" | "darkTroop";
}

export const army: HomeArmy[] = [
  clanCastle,
  armyCamp,
  barracks,
  laboratory,
  spellFactory,
  darkBarracks,
  darkSpellFactory,
  workshop,
  petHouse,
];
