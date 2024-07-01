import { Module } from "@nestjs/common";
import { Hdpe2PlasticBottleModuleBase } from "./base/hdpe2PlasticBottle.module.base";
import { Hdpe2PlasticBottleService } from "./hdpe2PlasticBottle.service";
import { Hdpe2PlasticBottleController } from "./hdpe2PlasticBottle.controller";
import { Hdpe2PlasticBottleResolver } from "./hdpe2PlasticBottle.resolver";

@Module({
  imports: [Hdpe2PlasticBottleModuleBase],
  controllers: [Hdpe2PlasticBottleController],
  providers: [Hdpe2PlasticBottleService, Hdpe2PlasticBottleResolver],
  exports: [Hdpe2PlasticBottleService],
})
export class Hdpe2PlasticBottleModule {}
