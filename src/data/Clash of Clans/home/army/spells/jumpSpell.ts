import HomeSpell from "@coc/home/army/spells/Spell";

export const jumpSpell = new HomeSpell({
  name: "Jump Spell",
  id: "jumpSpell",
  costType: "elixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Spell Factory Lv. 4",
    },
    {
      price: 2000000,
      upgradeDuration: "4d",
      requiredLabLevel: 5,
    },
    {
      price: 3400000,
      upgradeDuration: "6d",
      requiredLabLevel: 8,
    },
    {
      price: 7200000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
    {
      price: 16500000,
      upgradeDuration: "16d 12h",
      requiredLabLevel: 13,
    },
  ],
});
