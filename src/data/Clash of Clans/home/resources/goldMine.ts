import HomeResource from "@coc/home/resources/Resource";

export const goldMine = new HomeResource({
  name: "Gold Mine",
  id: "goldMine",
  levels: [
    {
      price: 150,
      upgradeDuration: "10s",
    },
    {
      price: 300,
      upgradeDuration: "1m",
    },
    {
      price: 700,
      upgradeDuration: "4m",
    },
    {
      price: 1400,
      upgradeDuration: "10m",
    },
    {
      price: 3000,
      upgradeDuration: "40m",
    },
    {
      price: 7000,
      upgradeDuration: "3h",
    },
    {
      price: 14000,
      upgradeDuration: "6h",
    },
    {
      price: 28000,
      upgradeDuration: "8h",
    },
    {
      price: 56000,
      upgradeDuration: "10h",
    },
    {
      price: 75000,
      upgradeDuration: "12h",
    },
    {
      price: 100000,
      upgradeDuration: "16h",
    },
    {
      price: 200000,
      upgradeDuration: "20h",
    },
    {
      price: 400000,
      upgradeDuration: "1d 16h",
    },
    {
      price: 800000,
      upgradeDuration: "3d 8h",
    },
    {
      price: 1200000,
      upgradeDuration: "6d",
    },
  ],
});
