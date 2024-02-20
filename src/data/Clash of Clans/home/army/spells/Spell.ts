import HomeOffense, { type OffenseInfo } from "@coc/home/army";

export default class HomeSpell extends HomeOffense {
  constructor(infos: SpellInfo) {
    super({
      ...infos,
      type: "spell",
    });
  }
}

type SpellInfo = Omit<OffenseInfo, "costType" | "type"> & {
  costType: "elixir" | "darkElixir";
};
