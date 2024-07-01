/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, GlassBottle as PrismaGlassBottle } from "@prisma/client";

export class GlassBottleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GlassBottleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.glassBottle.count(args);
  }

  async glassBottles(
    args: Prisma.GlassBottleFindManyArgs
  ): Promise<PrismaGlassBottle[]> {
    return this.prisma.glassBottle.findMany(args);
  }
  async glassBottle(
    args: Prisma.GlassBottleFindUniqueArgs
  ): Promise<PrismaGlassBottle | null> {
    return this.prisma.glassBottle.findUnique(args);
  }
  async createGlassBottle(
    args: Prisma.GlassBottleCreateArgs
  ): Promise<PrismaGlassBottle> {
    return this.prisma.glassBottle.create(args);
  }
  async updateGlassBottle(
    args: Prisma.GlassBottleUpdateArgs
  ): Promise<PrismaGlassBottle> {
    return this.prisma.glassBottle.update(args);
  }
  async deleteGlassBottle(
    args: Prisma.GlassBottleDeleteArgs
  ): Promise<PrismaGlassBottle> {
    return this.prisma.glassBottle.delete(args);
  }
}
