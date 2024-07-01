import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Pet1PlasticBottleService } from "./pet1PlasticBottle.service";
import { Pet1PlasticBottleControllerBase } from "./base/pet1PlasticBottle.controller.base";

@swagger.ApiTags("pet1PlasticBottles")
@common.Controller("pet1PlasticBottles")
export class Pet1PlasticBottleController extends Pet1PlasticBottleControllerBase {
  constructor(protected readonly service: Pet1PlasticBottleService) {
    super(service);
  }
}
