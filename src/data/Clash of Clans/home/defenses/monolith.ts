import HomeDefense from "@coc/home/defenses/Defense";

export const monolith = new HomeDefense({
  name: "Monolith",
  id: "monolith",
  levels: [
    {
      price: 300000,
      upgradeDuration: "18d",
    },
    {
      price: 360000,
      upgradeDuration: "19d",
    },
  ],
});
