import { type FC, type PropsWithChildren } from "react";
import { type Village } from "@types";

import {
  useClashOfClansUpgradeTrackerStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/store";

import { home, builder } from "@constants/clashOfClans";
import { isNotInApi, getHallItem } from "@utils/clashOfClans";

import {
  StructureStoreProvider,
  getSliderValues,
} from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/store";

export function getItems(village: Village, hallLevel: number) {
  return (village === "home" ? home : builder).filter(
    (item) =>
      isNotInApi(item, true) && !!getHallItem(item.id, hallLevel, village)
  );
}

const StructureEditorProvider: FC<PropsWithChildren> = ({ children }) => {
  //State
  const { getVillageData, getHallLevel } = useClashOfClansUpgradeTrackerStore(
    (state) => ({
      getVillageData: state.getVillageData,
      getHallLevel: state.getHallLevel,
    }),
    shallow
  );
  return (
    <StructureStoreProvider
      initializer={() =>
        getSliderValues(
          getItems("home", getHallLevel("home")),
          getVillageData("home"),
          getHallLevel("home"),
          "home"
        )
      }
    >
      {children}
    </StructureStoreProvider>
  );
};

export default StructureEditorProvider;
