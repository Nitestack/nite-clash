import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export default class BuilderArmy extends Base {
  constructor(infos: ArmyInfo) {
    super({
      id: infos.id,
      name: infos.name,
      type: "army",
      village: "builder",
      levels: infos.levels.map((level) => ({
        ...level,
        costType: "builderElixir",
      })),
      baseImageUrl: `Builder/Army/${infos.name}`,
    });
  }
}

interface ArmyInfo {
  id: string;
  name: string;
  levels: ClashOfClansInfoLevel[];
}
