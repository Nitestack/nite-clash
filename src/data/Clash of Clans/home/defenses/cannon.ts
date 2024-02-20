import HomeDefense from "@coc/home/defenses/Defense";

export const cannon = new HomeDefense({
  name: "Cannon",
  id: "cannon",
  levels: [
    {
      price: 250,
      upgradeDuration: "10s",
    },
    {
      price: 1000,
      upgradeDuration: "2m",
    },
    {
      price: 4000,
      upgradeDuration: "10m",
    },
    {
      price: 16000,
      upgradeDuration: "45m",
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
      price: 300000,
      upgradeDuration: "10h",
    },
    {
      price: 500000,
      upgradeDuration: "12h",
    },
    {
      price: 700000,
      upgradeDuration: "18h",
    },
    {
      price: 1000000,
      upgradeDuration: "1d",
    },
    {
      price: 1200000,
      upgradeDuration: "1d 6h",
    },
    {
      price: 1700000,
      upgradeDuration: "2d 6h",
    },
    {
      price: 2100000,
      upgradeDuration: "3d",
    },
    {
      price: 3200000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 4400000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 5600000,
      upgradeDuration: "7d 12h",
    },
    {
      price: 6500000,
      upgradeDuration: "9d",
    },
    {
      price: 7800000,
      upgradeDuration: "9d 12h",
    },
    {
      price: 16500000,
      upgradeDuration: "16d 6h",
    },
    {
      price: 18000000,
      upgradeDuration: "17d",
    },
  ],
});
