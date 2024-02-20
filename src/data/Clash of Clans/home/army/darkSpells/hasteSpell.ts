import HomeSpell from "@coc/home/army/spells/Spell";

export const hasteSpell = new HomeSpell({
  name: "Haste Spell",
  id: "hasteSpell",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Spell Factory Lv. 3",
    },
    {
      price: 20000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 34000,
      upgradeDuration: "2d 14h",
      requiredLabLevel: 8,
    },
    {
      price: 60000,
      upgradeDuration: "5d",
      requiredLabLevel: 8,
    },
    {
      price: 77000,
      upgradeDuration: "7d 18h",
      requiredLabLevel: 9,
    },
  ],
});
