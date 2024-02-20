import HomeArmy from "@coc/home/army/Army";

export const laboratory = new HomeArmy({
  name: "Laboratory",
  id: "laboratory",
  levels: [
    {
      price: 5000,
      upgradeDuration: "1m",
    },
    {
      price: 25000,
      upgradeDuration: "1h",
    },
    {
      price: 50000,
      upgradeDuration: "2h",
    },
    {
      price: 100000,
      upgradeDuration: "4h",
    },
    {
      price: 200000,
      upgradeDuration: "8h",
    },
    {
      price: 400000,
      upgradeDuration: "16h",
    },
    {
      price: 800000,
      upgradeDuration: "1d",
    },
    {
      price: 1300000,
      upgradeDuration: "1d 18h",
    },
    {
      price: 2100000,
      upgradeDuration: "2d 18h",
    },
    {
      price: 3800000,
      upgradeDuration: "4d",
    },
    {
      price: 5500000,
      upgradeDuration: "6d",
    },
    {
      price: 11500000,
      upgradeDuration: "11d 12h",
    },
    {
      price: 12500000,
      upgradeDuration: "12d",
    },
  ],
});
