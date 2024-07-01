import { Module } from "@nestjs/common";
import { GlassBottleModuleBase } from "./base/glassBottle.module.base";
import { GlassBottleService } from "./glassBottle.service";
import { GlassBottleController } from "./glassBottle.controller";
import { GlassBottleResolver } from "./glassBottle.resolver";

@Module({
  imports: [GlassBottleModuleBase],
  controllers: [GlassBottleController],
  providers: [GlassBottleService, GlassBottleResolver],
  exports: [GlassBottleService],
})
export class GlassBottleModule {}
