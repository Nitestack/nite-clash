import HomeDefense from "@coc/home/defenses/Defense";

export const hiddenTesla = new HomeDefense({
  name: "Hidden Tesla",
  id: "hiddenTesla",
  levels: [
    {
      price: 300000,
      upgradeDuration: "2h",
    },
    {
      price: 450000,
      upgradeDuration: "5h",
    },
    {
      price: 650000,
      upgradeDuration: "10h",
    },
    {
      price: 850000,
      upgradeDuration: "18h",
    },
    {
      price: 1100000,
      upgradeDuration: "1d",
    },
    {
      price: 1300000,
      upgradeDuration: "2d",
    },
    {
      price: 1800000,
      upgradeDuration: "3d",
    },
    {
      price: 2100000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 3100000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 5000000,
      upgradeDuration: "8d 18h",
    },
    {
      price: 7700000,
      upgradeDuration: "9d 12h",
    },
    {
      price: 9000000,
      upgradeDuration: "10d",
    },
    {
      price: 17100000,
      upgradeDuration: "17d",
    },
    {
      price: 19100000,
      upgradeDuration: "18d",
    },
  ],
});
