import HomeSpell from "@coc/home/army/spells/Spell";

export const invisibilitySpell = new HomeSpell({
  name: "Invisibility Spell",
  id: "invisibilitySpell",
  costType: "elixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Spell Factory Lv. 6",
    },
    {
      price: 5600000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 9,
    },
    {
      price: 7500000,
      upgradeDuration: "7d",
      requiredLabLevel: 10,
    },
    {
      price: 9000000,
      upgradeDuration: "9d 12h",
      requiredLabLevel: 11,
    },
  ],
});
