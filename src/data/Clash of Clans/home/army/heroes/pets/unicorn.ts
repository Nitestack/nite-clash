import HomePet from "@coc/home/army/heroes/pets/Pet";

export const unicorn = new HomePet({
  name: "Unicorn",
  id: "unicorn",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Pet House Lv. 4",
    },
    {
      price: 210000,
      upgradeDuration: "3d",
    },
    {
      price: 220000,
      upgradeDuration: "4d",
    },
    {
      price: 230000,
      upgradeDuration: "5d",
    },
    {
      price: 240000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 250000,
      upgradeDuration: "6d",
    },
    {
      price: 260000,
      upgradeDuration: "6d 12h",
    },
    {
      price: 270000,
      upgradeDuration: "7d",
    },
    {
      price: 280000,
      upgradeDuration: "7d 12h",
    },
    {
      price: 290000,
      upgradeDuration: "8d",
    },
  ],
});
