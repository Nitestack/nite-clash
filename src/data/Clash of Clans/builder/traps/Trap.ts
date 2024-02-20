import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export default class BuilderTrap extends Base {
  constructor(infos: TrapInfo) {
    super({
      id: infos.id,
      name: infos.name,
      type: "trap",
      village: "builder",
      levels: infos.levels.map((level) => ({
        ...level,
        costType: "builderGold",
      })),
      baseImageUrl: `Builder/Traps/${infos.name}`,
    });
  }
}

interface TrapInfo {
  id: string;
  name: string;
  levels: ClashOfClansInfoLevel[];
}
