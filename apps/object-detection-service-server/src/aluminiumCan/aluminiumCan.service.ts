import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AluminiumCanServiceBase } from "./base/aluminiumCan.service.base";

@Injectable()
export class AluminiumCanService extends AluminiumCanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
