import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GlassBottleService } from "./glassBottle.service";
import { GlassBottleControllerBase } from "./base/glassBottle.controller.base";

@swagger.ApiTags("glassBottles")
@common.Controller("glassBottles")
export class GlassBottleController extends GlassBottleControllerBase {
  constructor(protected readonly service: GlassBottleService) {
    super(service);
  }
}
