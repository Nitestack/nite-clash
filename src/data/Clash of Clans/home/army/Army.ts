import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export default class HomeArmy extends Base {
  constructor(infos: ArmyInfo) {
    super({
      id: infos.id,
      name: infos.name,
      type: "army",
      village: "home",
      levels: infos.levels.map((level) => ({
        ...level,
        costType: "elixir",
      })),
      baseImageUrl: `Home/Army/${infos.name}`,
    });
  }
}

interface ArmyInfo {
  id: string;
  name: string;
  levels: ClashOfClansInfoLevel[];
}
