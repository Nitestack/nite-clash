import {
  type Village,
  type DBVillage,
  type CategoryTab,
  type DBVillageType,
} from "@types";
import { type APIPlayer } from "clashofclans.js";

import { createZustandContextStore } from "@utils/createZustandContextStore";

export interface ClashOfClansUpgradeTrackerStoreType {
  data: DBVillage;
  categoryTab: CategoryTab;

  getVillageData: (village: Village) => DBVillageType;
  getHallLevel: (village: Village) => number;
  unlockedBuilderBase: () => boolean;
  updateAPIPlayer: (newAPIPlayer: APIPlayer) => void;
  updateVillageData: (
    newVillageData: Partial<DBVillageType>,
    village: Village
  ) => void;
}

export const [
  ClashOfClansUpgradeTrackerStoreProvider,
  useClashOfClansUpgradeTrackerStore,
  shallow,
] = createZustandContextStore<
  ClashOfClansUpgradeTrackerStoreType,
  Omit<
    ClashOfClansUpgradeTrackerStoreType,
    | "data"
    | "unlockedBuilderBase"
    | "updateAPIPlayer"
    | "getVillageData"
    | "getHallLevel"
    | "updateVillageData"
  >
>(() => ({
  categoryTab: "army",
}));
