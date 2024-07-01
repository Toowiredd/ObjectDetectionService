import { Module } from "@nestjs/common";
import { Pet1PlasticBottleModuleBase } from "./base/pet1PlasticBottle.module.base";
import { Pet1PlasticBottleService } from "./pet1PlasticBottle.service";
import { Pet1PlasticBottleController } from "./pet1PlasticBottle.controller";
import { Pet1PlasticBottleResolver } from "./pet1PlasticBottle.resolver";

@Module({
  imports: [Pet1PlasticBottleModuleBase],
  controllers: [Pet1PlasticBottleController],
  providers: [Pet1PlasticBottleService, Pet1PlasticBottleResolver],
  exports: [Pet1PlasticBottleService],
})
export class Pet1PlasticBottleModule {}
