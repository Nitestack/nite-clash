import type HomeResource from "@coc/home/resources/Resource";

import { elixirStorage } from "@coc/home/resources/elixirStorage";
import { elixirCollector } from "@coc/home/resources/elixirCollector";
import { goldStorage } from "@coc/home/resources/goldStorage";
import { goldMine } from "@coc/home/resources/goldMine";
import { darkElixirStorage } from "@coc/home/resources/darkElixirStorage";
import { darkElixirDrill } from "@coc/home/resources/darkElixirDrill";

export const resources: HomeResource[] = [
  elixirStorage,
  elixirCollector,
  goldStorage,
  goldMine,
  darkElixirStorage,
  darkElixirDrill,
];
