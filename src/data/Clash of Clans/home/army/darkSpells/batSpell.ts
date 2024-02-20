import HomeSpell from "@coc/home/army/spells/Spell";

export const batSpell = new HomeSpell({
  name: "Bat Spell",
  id: "batSpell",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Spell Factory Lv. 5",
    },
    {
      price: 26000,
      upgradeDuration: "1d 18h",
      requiredLabLevel: 8,
    },
    {
      price: 51000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 70000,
      upgradeDuration: "5d 6h",
      requiredLabLevel: 9,
    },
    {
      price: 95000,
      upgradeDuration: "6d",
      requiredLabLevel: 10,
    },
    {
      price: 330000,
      upgradeDuration: "18d",
      requiredLabLevel: 13,
    },
  ],
});
