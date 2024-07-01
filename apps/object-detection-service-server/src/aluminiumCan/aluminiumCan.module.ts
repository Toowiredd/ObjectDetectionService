import { Module } from "@nestjs/common";
import { AluminiumCanModuleBase } from "./base/aluminiumCan.module.base";
import { AluminiumCanService } from "./aluminiumCan.service";
import { AluminiumCanController } from "./aluminiumCan.controller";
import { AluminiumCanResolver } from "./aluminiumCan.resolver";

@Module({
  imports: [AluminiumCanModuleBase],
  controllers: [AluminiumCanController],
  providers: [AluminiumCanService, AluminiumCanResolver],
  exports: [AluminiumCanService],
})
export class AluminiumCanModule {}
