import { getClashOfClansUpgradeTrackerVillage } from "@app/api/upgrade-tracker/coc/route";
import { getClashOfClansJSONData } from "@app/api/upgrade-tracker/coc/json/route";
import ClashOfClansUpgradeTrackerClient from "@app/upgrade-tracker/coc/[playerTag]/client";

import { type ClashOfClansJSONBuildings } from "@coc/Buildings";

async function getVillage(id: string) {
  const res = await getClashOfClansUpgradeTrackerVillage(
    { playerTag: id },
    {
      cachingBehavior: "refresh",
    }
  );
  // if (!res.ok) throw new Error("No village found!");
  return res.json();
}

async function getJSONBuildings() {
  const res = await getClashOfClansJSONData(
    { path: "buildings" },
    {
      cachingBehavior: "static",
    }
  );
  if (!res.ok) throw new Error("No buildings data!");
  return res.json() as Promise<ClashOfClansJSONBuildings>;
}

async function getJSONTroopsAndSieges() {
  const res = await getClashOfClansJSONData(
    { path: "characters" },
    {
      cachingBehavior: "static",
    }
  );
  if (!res.ok) throw new Error("No buildings data!");
  return res.json();
}

async function getJSONHeroes() {
  const res = await getClashOfClansJSONData(
    { path: "heroes" },
    {
      cachingBehavior: "static",
    }
  );
  if (!res.ok) throw new Error("No buildings data!");
  return res.json();
}

async function getJSONPets() {
  const res = await getClashOfClansJSONData(
    { path: "pets" },
    {
      cachingBehavior: "static",
    }
  );
  if (!res.ok) throw new Error("No buildings data!");
  return res.json();
}

async function getJSONSpells() {
  const res = await getClashOfClansJSONData(
    { path: "spells" },
    {
      cachingBehavior: "static",
    }
  );
  if (!res.ok) throw new Error("No buildings data!");
  return res.json();
}

async function getJSONHall() {
  const res = await getClashOfClansJSONData(
    { path: "townhall_levels" },
    {
      cachingBehavior: "static",
    }
  );
  if (!res.ok) throw new Error("No buildings data!");
  return res.json();
}

async function getJSONTraps() {
  const res = await getClashOfClansJSONData(
    { path: "traps" },
    {
      cachingBehavior: "static",
    }
  );
  if (!res.ok) throw new Error("No buildings data!");
  return res.json();
}

async function getJSONWeapons() {
  const res = await getClashOfClansJSONData(
    { path: "weapons" },
    {
      cachingBehavior: "static",
    }
  );
  if (!res.ok) throw new Error("No buildings data!");
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { playerTag: string };
}) {
  const village = await getVillage(params.playerTag);
  if (village)
    return {
      title: `${village.player.name} ${village.player.tag} - Clash of Clans - Upgrade Tracker`,
    };
  else
    return {
      title: "Loading",
    };
}

export default async function ClashOfClansUpgradeTrackerPlayerPageComponent({
  params,
}: {
  params: { playerTag: string };
}) {
  const villageData = getVillage(params.playerTag);

  const buildingsData = getJSONBuildings();
  const troopsAndSiegesData = getJSONTroopsAndSieges();
  const heroesData = getJSONHeroes();
  const petsData = getJSONPets();
  const spellsData = getJSONSpells();
  const hallData = getJSONHall();
  const trapsData = getJSONTraps();
  const townHallWeaponsData = getJSONWeapons();

  const [
    village,
    buildings,
    troopsAndSieges,
    heroes,
    pets,
    spells,
    hall,
    traps,
    townHallWeapons,
  ] = await Promise.all([
    villageData,
    buildingsData,
    troopsAndSiegesData,
    heroesData,
    petsData,
    spellsData,
    hallData,
    trapsData,
    townHallWeaponsData,
  ]);

  return <ClashOfClansUpgradeTrackerClient village={village} />;
}
