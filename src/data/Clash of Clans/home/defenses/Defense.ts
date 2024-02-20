import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export default class HomeDefense extends Base {
  constructor(infos: DefenseInfo) {
    super({
      id: infos.id,
      name: infos.name,
      type: infos.name === "Wall" ? "wall" : "defense",
      village: "home",
      levels: infos.levels.map((level, i) => ({
        ...level,
        costType:
          infos.name === "Wall" && i >= 4
            ? "goldAndElixir"
            : infos.name === "Monolith"
            ? "darkElixir"
            : "gold",
      })),
      baseImageUrl: `Home/Defenses/${infos.name}`,
    });
  }
}

interface DefenseInfo {
  id: string;
  name: string;
  levels: ClashOfClansInfoLevel[];
}
