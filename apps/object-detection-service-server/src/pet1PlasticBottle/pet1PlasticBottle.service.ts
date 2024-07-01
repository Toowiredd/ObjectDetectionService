import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Pet1PlasticBottleServiceBase } from "./base/pet1PlasticBottle.service.base";

@Injectable()
export class Pet1PlasticBottleService extends Pet1PlasticBottleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
