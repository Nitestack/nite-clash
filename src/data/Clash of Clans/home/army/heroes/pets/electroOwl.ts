import HomePet from "@coc/home/army/heroes/pets/Pet";

export const electroOwl = new HomePet({
  name: "Electro Owl",
  id: "electroOwl",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Pet House Lv. 3",
    },
    {
      price: 135000,
      upgradeDuration: "3d",
    },
    {
      price: 150000,
      upgradeDuration: "4d",
    },
    {
      price: 165000,
      upgradeDuration: "5d",
    },
    {
      price: 180000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 195000,
      upgradeDuration: "6d",
    },
    {
      price: 210000,
      upgradeDuration: "6d 12h",
    },
    {
      price: 225000,
      upgradeDuration: "7d",
    },
    {
      price: 240000,
      upgradeDuration: "7d 12h",
    },
    {
      price: 255000,
      upgradeDuration: "8d",
    },
  ],
});
