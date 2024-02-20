import HomeSpell from "@coc/home/army/spells/Spell";

export const poisonSpell = new HomeSpell({
  name: "Poison Spell",
  id: "poisonSpell",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Spell Factory Lv. 1",
    },
    {
      price: 12000,
      upgradeDuration: "8h",
      requiredLabLevel: 6,
    },
    {
      price: 25000,
      upgradeDuration: "1d",
      requiredLabLevel: 7,
    },
    {
      price: 43000,
      upgradeDuration: "2d 14h",
      requiredLabLevel: 8,
    },
    {
      price: 70000,
      upgradeDuration: "6d 6h",
      requiredLabLevel: 9,
    },
    {
      price: 110000,
      upgradeDuration: "7d",
      requiredLabLevel: 10,
    },
    {
      price: 155000,
      upgradeDuration: "9d 12h",
      requiredLabLevel: 11,
    },
    {
      price: 285000,
      upgradeDuration: "16d 18h",
      requiredLabLevel: 12,
    },
    {
      price: 320000,
      upgradeDuration: "17d 12h",
      requiredLabLevel: 13,
    },
  ],
});
