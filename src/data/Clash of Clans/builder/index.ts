import type Base from "@coc/Base";

import { builderArmy } from "@coc/builder/army";
import { builderHeroes } from "@coc/builder/army/heroes";
import { builderTroops } from "@coc/builder/army/troops";
import { builderDefenses } from "@coc/builder/defenses";
import { builderResources } from "@coc/builder/resources";
import { builderTraps } from "@coc/builder/traps";
import { builderHall } from "@coc/builder/builderHall";
import { ottosOutpost } from "@coc/builder/ottosOutpost";

export const builder: Base[] = [
  builderHall,
  ottosOutpost,
  ...builderDefenses,
  ...builderArmy,
  ...builderTraps,
  ...builderResources,
  ...builderHeroes,
  ...builderTroops,
];
