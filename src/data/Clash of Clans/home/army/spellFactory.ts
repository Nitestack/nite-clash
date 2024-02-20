import HomeArmy from "@coc/home/army/Army";

export const spellFactory = new HomeArmy({
  name: "Spell Factory",
  id: "spellFactory",
  levels: [
    {
      price: 150000,
      upgradeDuration: "8h",
    },
    {
      price: 300000,
      upgradeDuration: "1d",
    },
    {
      price: 600000,
      upgradeDuration: "2d",
    },
    {
      price: 1200000,
      upgradeDuration: "3d 12h",
    },
    {
      price: 2000000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 3500000,
      upgradeDuration: "5d",
    },
    {
      price: 9000000,
      upgradeDuration: "9d",
    },
  ],
});
