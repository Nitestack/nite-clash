import HomeArmy from "@coc/home/army/Army";

export const darkSpellFactory = new HomeArmy({
  name: "Dark Spell Factory",
  id: "darkSpellFactory",
  levels: [
    {
      price: 150000,
      upgradeDuration: "6h",
    },
    {
      price: 300000,
      upgradeDuration: "18h",
    },
    {
      price: 600000,
      upgradeDuration: "2d",
    },
    {
      price: 1200000,
      upgradeDuration: "4d",
    },
    {
      price: 2500000,
      upgradeDuration: "6d",
    },
  ],
});
