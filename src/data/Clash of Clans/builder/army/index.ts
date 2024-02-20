import Base, {
  type ClashOfClansLabLevel,
  type ClashOfClansLabTextLevel,
} from "@coc/Base";
import type BuilderArmy from "@coc/builder/army/Army";

import { builderBarracks } from "@coc/builder/army/builderBarracks";
import { armyCamp } from "@coc/builder/army/armyCamp";
import { starLaboratory } from "@coc/builder/army/starLaboratory";
import { reinforcementCamp } from "@coc/builder/army/reinforcementCamp";
import { healingHut } from "@coc/builder/army/healingHut";

import { getLabLevels } from "@utils/clashOfClans";

export default class BuilderTroop extends Base {
  constructor(infos: TroopInfo) {
    const basicImageUrl = `Builder/Troops/${infos.name}`;
    super({
      id: infos.id,
      name: infos.name,
      type: "troop",
      village: "builder",
      levels: getLabLevels(
        infos.levels,
        "builderElixir",
        basicImageUrl,
        infos.startLevel
      ),
      baseImageUrl: basicImageUrl,
      imagePathLv0: `/images/Clash of Clans/${basicImageUrl}/0.png`,
    });
  }
}

interface TroopInfo {
  id: string;
  name: string;
  levels: (ClashOfClansLabTextLevel | ClashOfClansLabLevel)[];
  startLevel?: number;
}

export const builderArmy: BuilderArmy[] = [
  builderBarracks,
  armyCamp,
  starLaboratory,
  healingHut,
  reinforcementCamp,
];
