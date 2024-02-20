import HomeSpell from "@coc/home/army/spells/Spell";

export const healingSpell = new HomeSpell({
  name: "Healing Spell",
  id: "healingSpell",
  costType: "elixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Spell Factory Lv. 2",
    },
    {
      price: 75000,
      upgradeDuration: "5h",
      requiredLabLevel: 2,
    },
    {
      price: 150000,
      upgradeDuration: "10h",
      requiredLabLevel: 4,
    },
    {
      price: 300000,
      upgradeDuration: "20h",
      requiredLabLevel: 5,
    },
    {
      price: 900000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 6,
    },
    {
      price: 1800000,
      upgradeDuration: "4d",
      requiredLabLevel: 7,
    },
    {
      price: 3000000,
      upgradeDuration: "6d",
      requiredLabLevel: 8,
    },
    {
      price: 8500000,
      upgradeDuration: "9d 12h",
      requiredLabLevel: 11,
    },
    {
      price: 17000000,
      upgradeDuration: "17d",
      requiredLabLevel: 13,
    },
  ],
});
