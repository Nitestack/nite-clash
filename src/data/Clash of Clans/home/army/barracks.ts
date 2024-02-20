import HomeArmy from "@coc/home/army/Army";

export const barracks = new HomeArmy({
  name: "Barracks",
  id: "barracks",
  levels: [
    {
      price: 100,
      upgradeDuration: "10s",
    },
    {
      price: 500,
      upgradeDuration: "1m",
    },
    {
      price: 2500,
      upgradeDuration: "10m",
    },
    {
      price: 5000,
      upgradeDuration: "1h",
    },
    {
      price: 20000,
      upgradeDuration: "8h",
    },
    {
      price: 120000,
      upgradeDuration: "12h",
    },
    {
      price: 270000,
      upgradeDuration: "18h",
    },
    {
      price: 800000,
      upgradeDuration: "1d",
    },
    {
      price: 1200000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 1700000,
      upgradeDuration: "2d 12h",
    },
    {
      price: 2600000,
      upgradeDuration: "4d",
    },
    {
      price: 3700000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 6500000,
      upgradeDuration: "7d 12h",
    },
    {
      price: 8000000,
      upgradeDuration: "9d",
    },
    {
      price: 10000000,
      upgradeDuration: "10d 12h",
    },
    {
      price: 15000000,
      upgradeDuration: "16d",
    },
  ],
});
