import HomePet from "@coc/home/army/heroes/pets/Pet";

export const frosty = new HomePet({
  name: "Frosty",
  id: "frosty",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Pet House Lv. 4",
    },
    {
      price: 215000,
      upgradeDuration: "3d",
    },
    {
      price: 225000,
      upgradeDuration: "4d",
    },
    {
      price: 235000,
      upgradeDuration: "5d",
    },
    {
      price: 245000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 255000,
      upgradeDuration: "6d",
    },
    {
      price: 265000,
      upgradeDuration: "6d 12h",
    },
    {
      price: 275000,
      upgradeDuration: "7d",
    },
    {
      price: 285000,
      upgradeDuration: "7d 12h",
    },
    {
      price: 295000,
      upgradeDuration: "8d",
    },
  ],
});
