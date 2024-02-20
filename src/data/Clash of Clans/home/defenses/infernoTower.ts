import HomeDefense from "@coc/home/defenses/Defense";

export const infernoTower = new HomeDefense({
  name: "Inferno Tower",
  id: "infernoTower",
  levels: [
    {
      price: 1700000,
      upgradeDuration: "2d 12h",
    },
    {
      price: 2500000,
      upgradeDuration: "3d 6h",
    },
    {
      price: 3800000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 4200000,
      upgradeDuration: "5d",
    },
    {
      price: 5200000,
      upgradeDuration: "6d 6h",
    },
    {
      price: 6500000,
      upgradeDuration: "9d",
    },
    {
      price: 10500000,
      upgradeDuration: "11d",
    },
    {
      price: 18000000,
      upgradeDuration: "18d",
    },
    {
      price: 21000000,
      upgradeDuration: "19d",
    },
  ],
});
