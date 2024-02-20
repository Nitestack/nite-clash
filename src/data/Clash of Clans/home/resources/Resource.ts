import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export default class HomeResource extends Base {
  constructor(infos: ResourceInfo) {
    super({
      id: infos.id,
      name: infos.name,
      type: "resource",
      village: "home",
      levels: infos.levels.map((level) => ({
        ...level,
        costType:
          infos.name.includes("Gold") || infos.name.includes("Dark")
            ? "elixir"
            : "gold",
      })),
      baseImageUrl: `Home/Resources/${infos.name}`,
    });
  }
}

interface ResourceInfo {
  id: string;
  name: string;
  levels: ClashOfClansInfoLevel[];
}
