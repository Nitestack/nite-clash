import { type DBVillageType, type DBVillage } from "@types";

import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@trpc";

import { Util } from "clashofclans.js";

import { TRPCError } from "@trpc/server";

export const coc = createTRPCRouter({
  getVillage: protectedProcedure
    .input(
      z.object({
        playerTag: z.string(),
      })
    )
    .mutation(
      async ({
        input: { playerTag },
        ctx: {
          prisma,
          session: { user },
        },
      }) => {
        const village = (await prisma.clashOfClansVillage.findUnique({
          where: {
            playerTag: Util.formatTag(playerTag),
          },
          include: {
            builder: true,
            laboratory: true,
            petHouse: true,
          },
        })) as unknown as
          | (DBVillage & {
              createdAt?: Date;
              updatedAt?: Date;
              deletedAt?: Date | null;
            })
          | null;
        if (!village)
          throw new TRPCError({
            code: "NOT_FOUND",
            message: `Village with 'playerTag' = ${playerTag} was not found!`,
          });
        if (village.userId != user.id)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Village's 'userId' does not match with 'userId' ${user.id}!`,
          });
        delete village.createdAt;
        delete village.updatedAt;
        delete village.deletedAt;
        return village as DBVillage;
      }
    ),
  createVillage: protectedProcedure
    .input(
      z.object({
        playerTag: z.string(),
        data: z.record(z.any()),
      })
    )
    .mutation(
      async ({
        input: { playerTag, data },
        ctx: {
          prisma,
          session: { user },
        },
      }) => {
        const newVillage = (await prisma.clashOfClansVillage.create({
          //@ts-expect-error: data is not typed
          data: {
            ...data,
            playerTag: Util.formatTag(playerTag),
            user: {
              connect: {
                id: user.id,
              },
            },
          },
          include: {
            builder: true,
            laboratory: true,
            petHouse: true,
          },
        })) as unknown as DBVillage;
        if (!newVillage)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Village with 'playerTag' = ${playerTag} couldn't be created!`,
          });
        return newVillage;
      }
    ),
  updateAPIPlayer: protectedProcedure
    .input(
      z.object({
        playerTag: z.string(),
      })
    )
    .mutation(
      async ({
        input: { playerTag },
        ctx: {
          api: { coc },
          prisma,
        },
      }) => {
        const response = await coc.rest.getPlayer(Util.formatTag(playerTag));
        if (!response.ok)
          throw new TRPCError({
            code: "NOT_FOUND",
            message: `APIPlayer with playerTag '${playerTag}' was not found!`,
          });
        const updatedVillage = await prisma.clashOfClansVillage.update({
          where: {
            playerTag: Util.formatTag(playerTag),
          },
          data: {
            //@ts-expect-error: data is not typed
            player: response.data,
          },
        });
        if (!updatedVillage)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Village with 'playerTag' = ${playerTag} couldn't be updated!`,
          });
        return response.data;
      }
    ),
  updateVillage: protectedProcedure
    .input(
      z.object({
        playerTag: z.string(),
        village: z.enum(["home", "builder"]),
        villageData: z.record(z.any()),
      })
    )
    .mutation(
      async ({
        input: { playerTag, village, villageData },
        ctx: { prisma },
      }) => {
        const updatedVillage = await prisma.clashOfClansVillage.update({
          where: {
            playerTag: Util.formatTag(playerTag),
          },
          data: {
            [village === "home" ? "homeVillage" : "builderBase"]: villageData,
          },
        });
        if (!updatedVillage)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Village with 'playerTag' = ${playerTag} couldn't be updated!`,
          });
        return updatedVillage;
      }
    ),
});
