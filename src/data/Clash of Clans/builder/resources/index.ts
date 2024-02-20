import type BuilderResource from "@coc/builder/resources/Resource";

import { elixirStorage } from "@coc/builder/resources/elixirStorage";
import { elixirCollector } from "@coc/builder/resources/elixirCollector";
import { goldStorage } from "@coc/builder/resources/goldStorage";
import { goldMine } from "@coc/builder/resources/goldMine";
import { gemMine } from "@coc/builder/resources/gemMine";
import { clockTower } from "@coc/builder/resources/clockTower";

export const builderResources: BuilderResource[] = [
  elixirStorage,
  elixirCollector,
  goldStorage,
  goldMine,
  gemMine,
  clockTower,
];
