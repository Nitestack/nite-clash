import HomePet from "@coc/home/army/heroes/pets/Pet";

export const phoenix = new HomePet({
  name: "Phoenix",
  id: "phoenix",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Pet House Lv. 4",
    },
    {
      price: 230000,
      upgradeDuration: "3d",
    },
    {
      price: 240000,
      upgradeDuration: "4d",
    },
    {
      price: 250000,
      upgradeDuration: "5d",
    },
    {
      price: 260000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 270000,
      upgradeDuration: "6d",
    },
    {
      price: 280000,
      upgradeDuration: "6d 12h",
    },
    {
      price: 290000,
      upgradeDuration: "7d",
    },
    {
      price: 300000,
      upgradeDuration: "7d 12h",
    },
    {
      price: 310000,
      upgradeDuration: "8d",
    },
  ],
});
