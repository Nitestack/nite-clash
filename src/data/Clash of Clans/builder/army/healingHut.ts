import BuilderArmy from "@coc/builder/army/Army";

export const healingHut = new BuilderArmy({
  name: "Healing Hut",
  id: "healingHut",
  levels: [
    {
      price: 1500000,
      upgradeDuration: "1d 6h",
    },
    {
      price: 2000000,
      upgradeDuration: "2d",
    },
    {
      price: 2500000,
      upgradeDuration: "3d",
    },
    {
      price: 3250000,
      upgradeDuration: "4d",
    },
    {
      price: 4000000,
      upgradeDuration: "5d",
    },
    {
      price: 5000000,
      upgradeDuration: "6d",
    },
  ],
});
