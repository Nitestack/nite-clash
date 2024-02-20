import Base from "@bb/Base";
import { BoomBeachLevel } from "@bb/Base";

export default class Support extends Base {
  constructor(infos: SupportInfo) {
    const easyArray: BoomBeachLevel[] = [];
    const basicImageUrl = `Support/${infos.name}`;
    for (let i = 0; i < infos.levels.length; i++) {
      const pushObject: BoomBeachLevel = {
        ...infos.levels[i],
        costType: "woodStoneIron",
      };
      if (infos.name === "Submarine")
        pushObject.imageUrl = `/images/Boom Beach/${basicImageUrl}.png`;
      easyArray.push(pushObject);
    }
    super({
      name: infos.name,
      levels: easyArray,
      type: "support",
      baseImageUrl: basicImageUrl,
    });
  }
}

interface SupportInfo {
  name: string;
  levels: BoomBeachLevel[];
}
