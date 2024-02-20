/* eslint-disable no-var */
import { type APIClients } from "@lib/api";
import { type PrismaClient } from "@prisma/client";

//Enviroment Variables
declare global {
  var api: APIClients;
  var prisma: PrismaClient;
}

export type CategoryTab =
  | "army"
  | "resources"
  | "defenses"
  | "walls"
  | "traps"
  | "heroes"
  | "laboratory"
  | "petHouse"
  | "builder"
  | "stats";

import { type ClashOfClansVillage } from "@prisma/client";
import { type APIPlayer } from "clashofclans.js";

export type { Village } from "@prisma/client";

export type DBVillageType = Record<string, number[]> & {
  walls: Record<string, number>;
  builder: number;
};

export type HallType = Record<
  string,
  | {
      amount: number;
      maxLevel: number;
    }
  | number
>;

export interface DBVillage
  extends Omit<
    ClashOfClansVillage,
    | "player"
    | "homeVillage"
    | "builderBase"
    | "createdAt"
    | "updatedAt"
    | "deletedAt"
  > {
  player: APIPlayer;
  homeVillage: DBVillageType;
  builderBase: DBVillageType & {
    ottosOutpost: number[];
  };
}

//Routes
import { type ReactNode } from "react";

export interface NavbarLink {
  name: string;
  url: string;
}

export interface NavbarItem extends NavbarLink {
  links?: NavbarDropdownItem[];
}

export interface NavbarDropdownItem extends NavbarLink {
  description?: string;
  icon?: ReactNode;
}

export type Color =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type ReactRenderPropFunction<Args extends any[]> = (
  ...args: Args
) => ReactNode;

export type ReactRenderProp<Args extends any[]> =
  | ReactNode
  | ((...args: Args) => ReactNode);
