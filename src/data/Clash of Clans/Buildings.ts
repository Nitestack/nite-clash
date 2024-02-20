export interface Building {
  AltBuildResource: AltBuildResource[];
  BuildResource: Resource[];
  BuildingClass: BuildingClass[];
  BuildingLevel: number[];
  TownHallLevel: number[];
  BuildCost: number[];
  BuildTimeD: number[];
  BuildTimeH: number[];
  BuildTimeM?: number[];
  BuildTimeS?: number[];
  VillageType?: number[];
}

type BuildingClass =
  | "Defense"
  | "Army"
  | "Worker2"
  | "Resource"
  | "Npc"
  | "Npc Town Hall"
  | "Town Hall2"
  | "Town Hall"
  | "Wall"
  | "Worker";

export type ClashOfClansJSONBuildings = Record<string, Building>;

export const jsonNameToBuildingName: Record<string, string> = {
  "Air Blaster": "Air Sweeper",
  "Air Defense": "Air Defense",
  "Air Defense Mini": "Firecrackers",
  "Air Defense2": "Air Bombs",
  "Alliance Castle": "Clan Castle",
  "Ancient Artillery": "Eagle Artillery",
  "Archer Tower": "Archer Tower",
  "Archer Tower2": "Archer Tower",
  Barrack: Barrack;
  Barrack2: Barrack2;
  "Battle Copter Altar": BattleCopterAltar;
  "Bomb Tower": BombTower;
  Bow: Bow;
  Builder6Home: Builder6Home;
  Builder6Unlock: Builder6Unlock;
  Cannon: Cannon;
  Cannon2: Cannon2;
  CannonNPC: CannonNPC;
  "Clock Tower": ClockTower;
  "Communications mast": CommunicationsMast;
  Crusher: Crusher;
  "Dark Elixir Barrack": DarkElixirBarrack;
  "Dark Elixir Pump": DarkElixirPump;
  "Dark Elixir Storage": DarkElixirStorage;
  "Dark Tower": DarkTower;
  "Double Cannon": DoubleCannon;
  "Dragon Cave": DragonCave;
  "Elixir Pump": ElixirPump;
  "Elixir Pump2": ElixirPump2;
  "Elixir Storage": ElixirStorage;
  "Elixir Storage2": ElixirStorage2;
  Flamer: Flamer;
  "Gem Mine": GemMine;
  "Giant Cannon": GiantCannon;
  "Goblin Castle": GoblinCastle;
  "Goblin boss TH": GoblinBossTH;
  "Goblin hut": GoblinHut;
  "Goblin main building": GoblinMainBuilding;
  "Gold Mine": GoldMine;
  "Gold Mine2": GoldMine2;
  "Gold Storage": GoldStorage;
  "Gold Storage2": GoldStorage2;
  "Guard Post": GuardPost;
  "Hero Altar Archer Queen": HeroAltarArcherQueen;
  "Hero Altar Barbarian King": HeroAltarBarbarianKing;
  "Hero Altar Grand Warden": HeroAltarGrandWarden;
  "Hero Altar Royal Champion": HeroAltarRoyalChampion;
  "Hero Altar Warmachine": HeroAltarWarmachine;
  Laboratory: Laboratory;
  Laboratory2: Laboratory2;
  LavaLauncher: LavaLauncher;
  "Mega Tesla": MegaTesla;
  "Mini Spell Factory": MiniSpellFactory;
  Monolith: Monolith;
  Mortar: Mortar;
  "Multi Mortar": MultiMortar;
  "Outpost Stage2": OutpostStage2;
  "Pet Shop": PetShop;
  "Recovery Building": RecoveryBuilding;
  "Reinforcement Camp": ReinforcementCamp;
  Scattershot: Scattershot;
  SiegeWorkshop: SiegeWorkshop;
  "Spell Forge": SpellForge;
  "Spell Tower": SpellTower;
  "Tesla Tower": TeslaTower;
  "Tesla Tower2": TeslaTower2;
  "Town Hall": TownHall;
  "Town Hall2": TownHall2;
  "Troop Housing": TroopHousing;
  "Troop Housing2": TroopHousing2;
  Unused1: Unused1;
  Unused2: Unused2;
  Unused3: Unused3;
  Unused4: Unused4;
  Unused5: Unused5;
  Unused6: Unused6;
  Unused7: Unused7;
  Wall: Wall;
  WallStraight: WallStraight;
  "Wizard Tower": WizardTower;
  "Worker Building": WorkerBuilding;
  "Worker Building2": WorkerBuilding2;
  Xbow_BB: XbowBb;
}

type Resource =
  | "Gold"
  | "Gold2"
  | "DarkElixir"
  | "Elixir"
  | "Elixir2"
  | "Diamonds";

type AltBuildResource = "" | "Elixir" | "Elixir2";
