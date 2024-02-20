import HomeDefense from "@coc/home/defenses/Defense";

export const eagleArtillery = new HomeDefense({
  name: "Eagle Artillery",
  id: "eagleArtillery",
  levels: [
    {
      price: 6000000,
      upgradeDuration: "5d",
    },
    {
      price: 8000000,
      upgradeDuration: "8d 12h",
    },
    {
      price: 10000000,
      upgradeDuration: "10d",
    },
    {
      price: 13000000,
      upgradeDuration: "13d",
    },
    {
      price: 19000000,
      upgradeDuration: "19d",
    },
    {
      price: 21500000,
      upgradeDuration: "20d",
    },
  ],
});
