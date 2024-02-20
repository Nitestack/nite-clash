import HomeDefense from "@coc/home/defenses/Defense";

export const xBow = new HomeDefense({
  name: "X-Bow",
  id: "xBow",
  levels: [
    {
      price: 1000000,
      upgradeDuration: "2d",
    },
    {
      price: 1600000,
      upgradeDuration: "4d",
    },
    {
      price: 2400000,
      upgradeDuration: "5d",
    },
    {
      price: 3400000,
      upgradeDuration: "5d 6h",
    },
    {
      price: 4900000,
      upgradeDuration: "6d 6h",
    },
    {
      price: 6800000,
      upgradeDuration: "9d",
    },
    {
      price: 8300000,
      upgradeDuration: "9d 12h",
    },
    {
      price: 10300000,
      upgradeDuration: "10d",
    },
    {
      price: 17400000,
      upgradeDuration: "18d",
    },
    {
      price: 20000000,
      upgradeDuration: "19d",
    },
  ],
});
