import HomeDefense from "@coc/home/defenses/Defense";

export const spellTower = new HomeDefense({
  name: "Spell Tower",
  id: "spellTower",
  levels: [
    {
      price: 14000000,
      upgradeDuration: "14d",
    },
    {
      price: 16000000,
      upgradeDuration: "16d",
    },
    {
      price: 18000000,
      upgradeDuration: "18d",
    },
  ],
});
