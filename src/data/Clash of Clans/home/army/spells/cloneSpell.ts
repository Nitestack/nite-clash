import HomeSpell from "@coc/home/army/spells/Spell";

export const cloneSpell = new HomeSpell({
  name: "Clone Spell",
  costType: "elixir",
  id: "cloneSpell",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Spell Factory Lv. 5",
    },
    {
      price: 2100000,
      upgradeDuration: "1d 18h",
      requiredLabLevel: 8,
    },
    {
      price: 3400000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 4200000,
      upgradeDuration: "4d",
      requiredLabLevel: 9,
    },
    {
      price: 5600000,
      upgradeDuration: "7d",
      requiredLabLevel: 9,
    },
    {
      price: 7200000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
    {
      price: 15500000,
      upgradeDuration: "15d 18h",
      requiredLabLevel: 12,
    },
    {
      price: 18000000,
      upgradeDuration: "17d 12h",
      requiredLabLevel: 13,
    },
  ],
});
