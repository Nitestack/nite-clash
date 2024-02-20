/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Client } from "clashofclans.js";
//@ts-expect-error: No types for this library
import { Token, ClashRoyale, BrawlStars } from "supercell-apis";

import { env } from "@env";

const client = new Client();

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = globalThis.api;

if (!cached) cached = {} as APIClients;

export interface APIClients {
  coc: Client;
  cr: any;
  bs: any;
}

export default async function getAPI<K extends keyof APIClients>(
  api: K
): Promise<APIClients[K]> {
  if (cached.coc && api === "coc") return cached.coc;
  else if (cached.cr && api === "cr") return cached.cr;
  else if (cached.bs && api === "bs") return cached.bs;
  if (api === "coc" && !cached.coc) {
    await client.login({
      email: env.EMAIL,
      password: env.PASSWORD,
    });
    cached.coc = client;
  } else if (api === "cr" && !cached.cr) {
    const token = await new Token(
      "clashroyale",
      env.EMAIL,
      env.PASSWORD
    ).init();
    cached.cr = new ClashRoyale(token);
  } else if (api === "bs" && !cached.bs) {
    const token = await new Token("brawlstars", env.EMAIL, env.PASSWORD).init();
    cached.bs = new BrawlStars(token);
  }
  if (api === "coc") return cached.coc;
  else if (api === "cr") return cached.cr;
  else if (api === "bs") return cached.bs;
}
