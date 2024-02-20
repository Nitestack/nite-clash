import HomeSpell from "@coc/home/army/spells/Spell";

export const rageSpell = new HomeSpell({
  name: "Rage Spell",
  id: "rageSpell",
  costType: "elixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Spell Factory Lv. 3",
    },
    {
      price: 400000,
      upgradeDuration: "12h",
      requiredLabLevel: 3,
    },
    {
      price: 800000,
      upgradeDuration: "1d",
      requiredLabLevel: 4,
    },
    {
      price: 1600000,
      upgradeDuration: "2d",
      requiredLabLevel: 5,
    },
    {
      price: 2400000,
      upgradeDuration: "4d",
      requiredLabLevel: 6,
    },
    {
      price: 7000000,
      upgradeDuration: "7d",
      requiredLabLevel: 10,
    },
  ],
});
