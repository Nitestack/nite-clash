import HomeArmy from "@coc/home/army/Army";

export const armyCamp = new HomeArmy({
  name: "Army Camp",
  id: "armyCamp",
  levels: [
    {
      price: 200,
      upgradeDuration: "5m",
    },
    {
      price: 2000,
      upgradeDuration: "15m",
    },
    {
      price: 10000,
      upgradeDuration: "2h",
    },
    {
      price: 100000,
      upgradeDuration: "5h",
    },
    {
      price: 250000,
      upgradeDuration: "8h",
    },
    {
      price: 750000,
      upgradeDuration: "12h",
    },
    {
      price: 1500000,
      upgradeDuration: "2d",
    },
    {
      price: 2500000,
      upgradeDuration: "3d",
    },
    {
      price: 4200000,
      upgradeDuration: "6d 6h",
    },
    {
      price: 5700000,
      upgradeDuration: "8d 18h",
    },
    {
      price: 9600000,
      upgradeDuration: "9d 12h",
    },
    {
      price: 19000000,
      upgradeDuration: "16d",
    },
  ],
});
