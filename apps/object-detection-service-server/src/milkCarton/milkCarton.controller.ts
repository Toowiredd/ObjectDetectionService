import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MilkCartonService } from "./milkCarton.service";
import { MilkCartonControllerBase } from "./base/milkCarton.controller.base";

@swagger.ApiTags("milkCartons")
@common.Controller("milkCartons")
export class MilkCartonController extends MilkCartonControllerBase {
  constructor(protected readonly service: MilkCartonService) {
    super(service);
  }
}
