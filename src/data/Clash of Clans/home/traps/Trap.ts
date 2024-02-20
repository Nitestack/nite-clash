import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export default class HomeTrap extends Base {
  constructor(infos: TrapInfo) {
    super({
      id: infos.id,
      name: infos.name,
      type: "trap",
      village: "home",
      levels: infos.levels.map((level) => ({
        ...level,
        costType: "gold",
      })),
      baseImageUrl: `Home/Traps/${infos.name}`,
    });
  }
}

interface TrapInfo {
  id: string;
  name: string;
  levels: ClashOfClansInfoLevel[];
}
