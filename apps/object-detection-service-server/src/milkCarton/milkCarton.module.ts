import { Module } from "@nestjs/common";
import { MilkCartonModuleBase } from "./base/milkCarton.module.base";
import { MilkCartonService } from "./milkCarton.service";
import { MilkCartonController } from "./milkCarton.controller";
import { MilkCartonResolver } from "./milkCarton.resolver";

@Module({
  imports: [MilkCartonModuleBase],
  controllers: [MilkCartonController],
  providers: [MilkCartonService, MilkCartonResolver],
  exports: [MilkCartonService],
})
export class MilkCartonModule {}
