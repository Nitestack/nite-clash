"use client";

import { ClashOfClansUpgradeTrackerStoreProvider } from "@modules/Upgrade Tracker/Clash of Clans/store";

import ClashOfClansUpgradeTracker from "@modules/Upgrade Tracker/Clash of Clans";
import StructureEditorProvider from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor";
import { type DBVillage } from "@types";

//DEV
// import dbVillage from "./data.json";

export default function ClashOfClansUpgradeTrackerClient({
  village,
}: {
  village: DBVillage;
}) {
  return (
    <ClashOfClansUpgradeTrackerStoreProvider
      initializer={(set, get) => ({
        data: village as unknown as DBVillage,
        unlockedBuilderBase: () => !!get().data.player.builderHallLevel,
        updateAPIPlayer: (newAPIPlayer) =>
          set((state) => ({
            data: { ...state.data, player: newAPIPlayer },
          })),
        getVillageData: (village) =>
          get().data[village === "home" ? "homeVillage" : "builderBase"],
        getHallLevel: (village) =>
          get().data.player[
            village === "home" ? "townHallLevel" : "builderHallLevel"
          ]!,
        updateVillageData: (newVillage, village) =>
          set({
            data: {
              ...get().data,
              [village === "home" ? "homeVillage" : "builderBase"]: {
                ...get().data[
                  village === "home" ? "homeVillage" : "builderBase"
                ],
                ...newVillage,
              },
            },
          }),
      })}
    >
      <StructureEditorProvider>
        <ClashOfClansUpgradeTracker />
      </StructureEditorProvider>
    </ClashOfClansUpgradeTrackerStoreProvider>
  );
}
