import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Hdpe2PlasticBottleService } from "./hdpe2PlasticBottle.service";
import { Hdpe2PlasticBottleControllerBase } from "./base/hdpe2PlasticBottle.controller.base";

@swagger.ApiTags("hdpe2PlasticBottles")
@common.Controller("hdpe2PlasticBottles")
export class Hdpe2PlasticBottleController extends Hdpe2PlasticBottleControllerBase {
  constructor(protected readonly service: Hdpe2PlasticBottleService) {
    super(service);
  }
}
