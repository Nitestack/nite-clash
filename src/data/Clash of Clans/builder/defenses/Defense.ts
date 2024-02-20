import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export default class BuilderDefense extends Base {
  constructor(infos: DefenseInfo) {
    super({
      id: infos.id,
      name: infos.name,
      type: infos.name === "Wall" ? "wall" : "defense",
      village: "builder",
      levels: infos.levels.map((level, i) => ({
        ...level,
        costType:
          infos.name === "Wall" && i >= 6
            ? "builderGoldAndElixir"
            : "builderGold",
      })),
      baseImageUrl: `Builder/Defenses/${infos.name}`,
    });
  }
}

interface DefenseInfo {
  id: string;
  name: string;
  levels: ClashOfClansInfoLevel[];
}
