import BuilderArmy from "@coc/builder/army/Army";

export const armyCamp = new BuilderArmy({
  //THERE IS ONLY ONE LEVEL! THE LEVELS LISTED BELOW SHOW THE COST OF BUILDING THE ARMY CAMP
  name: "Army Camp",
  id: "armyCamp",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
    },
    {
      price: 12000,
      upgradeDuration: "5m",
    },
    {
      price: 180000,
      upgradeDuration: "3h",
    },
    {
      price: 350000,
      upgradeDuration: "8h",
    },
    {
      price: 2000000,
      upgradeDuration: "3d",
    },
    {
      price: 3000000,
      upgradeDuration: "6d",
    },
  ],
});
