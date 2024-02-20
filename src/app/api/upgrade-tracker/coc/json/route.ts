import { tNRH } from "@server/tnrpc";

import { z } from "zod";

export const fetchCache = "default-cache";

export const { GET, tNRHFetch: getClashOfClansJSONData } = tNRH.get(
  z.object({
    path: z.enum([
      "lang/texts_AR",
      "lang/texts_CN",
      "lang/texts_CNT",
      "lang/texts_DE",
      "lang/texts_EN",
      "lang/texts_ES",
      "lang/texts_FA",
      "lang/texts_FI",
      "lang/texts_FR",
      "lang/texts_ID",
      "lang/texts_IT",
      "lang/texts_JP",
      "lang/texts_KR",
      "lang/texts_MS",
      "lang/texts_NL",
      "lang/texts_NO",
      "lang/texts_PT",
      "lang/texts_RU",
      "lang/texts_TH",
      "lang/texts_TR",
      "lang/texts_VI",
      "boosters",
      "buildings",
      "capital_buildings",
      "capital_characters",
      "capital_obstacles",
      "capital_projectiles",
      "capital_spells",
      "capital_traps",
      "characters",
      "client_globals",
      "globals",
      "heroes",
      "languages",
      "object_ids",
      "obstacles",
      "pass_tasks",
      "pets",
      "projectiles",
      "replay",
      "spells",
      "supers",
      "tasks",
      "townhall_levels",
      "traps",
      "upgrade_tasks",
      "weapons",
    ]),
  })
)(
  async ({ input: { path } }) => {
    const response = await fetch(`https://coc.guide/static/json/${path}.json`);
    if (response.ok) return await response.json();
  },
  {
    url: "/api/upgrade-tracker/coc/json",
  }
);
