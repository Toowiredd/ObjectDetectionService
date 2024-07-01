import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GlassBottleServiceBase } from "./base/glassBottle.service.base";

@Injectable()
export class GlassBottleService extends GlassBottleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
