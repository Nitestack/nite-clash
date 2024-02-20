import { type FC, useState, useEffect } from "react";
import { type Village } from "@types";

import {
  useStructureStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/store";
import { useClashOfClansUpgradeTrackerStore } from "@modules/Upgrade Tracker/Clash of Clans/store";

import { getSliderValues } from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/store";
import { getItems } from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor";

import Tabs from "@components/Tabs";

/*Components*/
import ClashOfClansUpgradeTrackerProfile from "@modules/Upgrade Tracker/Clash of Clans/Profile";
import ClashOfClansUpgradeTrackerInfo from "@modules/Upgrade Tracker/Clash of Clans/Info";
//-Header
import PlayerDisplay from "@modules/Upgrade Tracker/Clash of Clans/Header/PlayerDisplay";
import { keysFromObject } from "@utils/index";

import Constants from "@constants/index";

//Villages
export const villages: Record<Village, string> = {
  home: "Home Village",
  builder: "Builder Base",
};

const ClashOfClansUpgradeTracker: FC = () => {
  //Store
  const { unlockedBuilderBase, data } = useClashOfClansUpgradeTrackerStore(
    (state) => ({
      unlockedBuilderBase: state.unlockedBuilderBase,
      data: state.data,
    }),
    shallow
  );
  const setStore = useStructureStore((state) => state.setStore);
  //State
  const [village, setStateVillage] = useState<Village>("home");
  //Set location hash
  function setHash(newHash: string) {
    location.hash = newHash;
  }
  //Set state and location href
  function setVillage(newVillage?: Village, noHash?: boolean) {
    //If there is no village specified, swap
    if (!newVillage) newVillage = village === "home" ? "builder" : "home";
    //Change village state
    setStateVillage(newVillage);
    //Set structure store (manually setting store because of closure)
    const hallLevel =
      newVillage === "home"
        ? data.player.townHallLevel
        : data.player.builderHallLevel!;
    setStore(
      getSliderValues(
        getItems(newVillage, hallLevel),
        data[newVillage === "home" ? "homeVillage" : "builderBase"],
        hallLevel,
        newVillage
      )
    );
    //Default hash setting
    if (!noHash) setHash(newVillage);
  }
  //Initial village setting
  useEffect(() => {
    //Get the hash of the next router
    const hash = location.hash.replace(/#/g, "");
    //If hash is specified and the value is valid and builder base is unlocked
    if (hash && Object.keys(villages).includes(hash) && unlockedBuilderBase())
      setVillage(hash as Village, true);
    else setHash("home"); //Default to "home"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Tabs
      items={keysFromObject(villages).filter(
        (village) =>
          village === "home" || (village === "builder" && unlockedBuilderBase())
      )}
      aria-label="Village switch"
      variant="underlined"
      size="xl"
      color={Constants.MAIN_COLOR}
      selectedKey={village}
      onSelectionChange={(newVillage) => setVillage(newVillage as Village)}
    >
      {(village) => (
        <Tabs.Item
          className="flex items-center justify-center"
          key={village}
          title={villages[village]}
        >
          <div className="container flex flex-col items-center py-4">
            <PlayerDisplay />
            <ClashOfClansUpgradeTrackerProfile />
            <ClashOfClansUpgradeTrackerInfo village={village} />
          </div>
        </Tabs.Item>
      )}
    </Tabs>
  );
};
export default ClashOfClansUpgradeTracker;
