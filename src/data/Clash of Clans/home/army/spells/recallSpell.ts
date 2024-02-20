import HomeSpell from "@coc/home/army/spells/Spell";

export const recallSpell = new HomeSpell({
  name: "Recall Spell",
  id: "recallSpell",
  costType: "elixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Spell Factory Lv. 7",
    },
    {
      price: 7500000,
      upgradeDuration: "11d 12h",
      requiredLabLevel: 11,
    },
    {
      price: 14000000,
      upgradeDuration: "15d 12h",
      requiredLabLevel: 12,
    },
    {
      price: 17500000,
      upgradeDuration: "17d 12h",
      requiredLabLevel: 13,
    },
  ],
});
