import HomeSpell from "@coc/home/army/spells/Spell";

export const freezeSpell = new HomeSpell({
  name: "Freeze Spell",
  costType: "elixir",
  id: "freezeSpell",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Spell Factory Lv. 4",
    },
    {
      price: 1200000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 1700000,
      upgradeDuration: "2d 14h",
      requiredLabLevel: 8,
    },
    {
      price: 3000000,
      upgradeDuration: "4d 6h",
      requiredLabLevel: 8,
    },
    {
      price: 4200000,
      upgradeDuration: "6d",
      requiredLabLevel: 8,
    },
    {
      price: 6000000,
      upgradeDuration: "7d 18h",
      requiredLabLevel: 9,
    },
    {
      price: 7000000,
      upgradeDuration: "8d",
      requiredLabLevel: 10,
    },
  ],
});
