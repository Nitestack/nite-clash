import HomeOffense from "@coc/home/army";

export const pekka = new HomeOffense({
  name: "P.E.K.K.A",
  id: "pEKKA",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 10",
    },
    {
      price: 1200000,
      upgradeDuration: "12h",
      requiredLabLevel: 6,
    },
    {
      price: 1800000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 2800000,
      upgradeDuration: "2d",
      requiredLabLevel: 7,
    },
    {
      price: 3200000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 4200000,
      upgradeDuration: "4d 18h",
      requiredLabLevel: 8,
    },
    {
      price: 5200000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 7000000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 8500000,
      upgradeDuration: "9d 12h",
      requiredLabLevel: 11,
    },
    {
      price: 18000000,
      upgradeDuration: "16d 12h",
      requiredLabLevel: 13,
    },
  ],
});
