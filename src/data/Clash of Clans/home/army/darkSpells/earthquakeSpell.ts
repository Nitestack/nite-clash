import HomeSpell from "@coc/home/army/spells/Spell";

export const earthquakeSpell = new HomeSpell({
  name: "Earthquake Spell",
  id: "earthquakeSpell",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Spell Factory Lv. 2",
    },
    {
      price: 15000,
      upgradeDuration: "18h",
      requiredLabLevel: 6,
    },
    {
      price: 30000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 51000,
      upgradeDuration: "4d 6h",
      requiredLabLevel: 8,
    },
    {
      price: 84000,
      upgradeDuration: "7d 18h",
      requiredLabLevel: 9,
    },
  ],
});
