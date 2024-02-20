import HomeSpell from "@coc/home/army/spells/Spell";

export const skeletonSpell = new HomeSpell({
  name: "Skeleton Spell",
  id: "skeletonSpell",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Spell Factory Lv. 4",
    },
    {
      price: 22000,
      upgradeDuration: "1d 8h",
      requiredLabLevel: 8,
    },
    {
      price: 34000,
      upgradeDuration: "2d 14h",
      requiredLabLevel: 8,
    },
    {
      price: 50000,
      upgradeDuration: "4d 6h",
      requiredLabLevel: 9,
    },
    {
      price: 80000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 100000,
      upgradeDuration: "7d",
      requiredLabLevel: 10,
    },
    {
      price: 150000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
    {
      price: 320000,
      upgradeDuration: "17d 12h",
      requiredLabLevel: 13,
    },
  ],
});
