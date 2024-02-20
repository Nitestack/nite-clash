import HomeSpell from "@coc/home/army/spells/Spell";

export const lightningSpell = new HomeSpell({
  name: "Lightning Spell",
  id: "lightningSpell",
  costType: "elixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Spell Factory Lv. 1",
    },
    {
      price: 50000,
      upgradeDuration: "4h",
      requiredLabLevel: 1,
    },
    {
      price: 100000,
      upgradeDuration: "8h",
      requiredLabLevel: 2,
    },
    {
      price: 200000,
      upgradeDuration: "12h",
      requiredLabLevel: 3,
    },
    {
      price: 600000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 1500000,
      upgradeDuration: "4d",
      requiredLabLevel: 7,
    },
    {
      price: 2500000,
      upgradeDuration: "6d",
      requiredLabLevel: 8,
    },
    {
      price: 4200000,
      upgradeDuration: "7d 6h",
      requiredLabLevel: 9,
    },
    {
      price: 6300000,
      upgradeDuration: "8d",
      requiredLabLevel: 10,
    },
    {
      price: 16000000,
      upgradeDuration: "16d",
      requiredLabLevel: 13,
    },
  ],
});
