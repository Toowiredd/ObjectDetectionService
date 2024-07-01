import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Hdpe2PlasticBottleServiceBase } from "./base/hdpe2PlasticBottle.service.base";

@Injectable()
export class Hdpe2PlasticBottleService extends Hdpe2PlasticBottleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
