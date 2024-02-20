import HomeArmy from "@coc/home/army/Army";

export const darkBarracks = new HomeArmy({
  name: "Dark Barracks",
  id: "darkBarracks",
  levels: [
    {
      price: 200000,
      upgradeDuration: "8h",
    },
    {
      price: 600000,
      upgradeDuration: "1d",
    },
    {
      price: 1000000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 1600000,
      upgradeDuration: "2d",
    },
    {
      price: 2200000,
      upgradeDuration: "3d 12h",
    },
    {
      price: 2900000,
      upgradeDuration: "4d 12h",
    },
    {
      price: 4000000,
      upgradeDuration: "6d 12h",
    },
    {
      price: 7500000,
      upgradeDuration: "8d",
    },
    {
      price: 9000000,
      upgradeDuration: "10d",
    },
    {
      price: 13000000,
      upgradeDuration: "13d",
    },
  ],
});
