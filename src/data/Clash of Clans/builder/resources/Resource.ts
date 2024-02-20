import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export default class BuilderResource extends Base {
  constructor(infos: ResourceInfo) {
    super({
      id: infos.id,
      name: infos.name,
      type: "resource",
      village: "builder",
      levels: infos.levels.map((level) => ({
        ...level,
        costType:
          infos.name.includes("Gold") || infos.name === "Clock Tower"
            ? "builderElixir"
            : "builderGold",
      })),
      baseImageUrl: `Builder/Resources/${infos.name}`,
    });
  }
}

interface ResourceInfo {
  id: string;
  name: string;
  levels: ClashOfClansInfoLevel[];
}
