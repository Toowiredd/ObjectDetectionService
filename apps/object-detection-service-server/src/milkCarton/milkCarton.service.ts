import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MilkCartonServiceBase } from "./base/milkCarton.service.base";

@Injectable()
export class MilkCartonService extends MilkCartonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
