import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AluminiumCanService } from "./aluminiumCan.service";
import { AluminiumCanControllerBase } from "./base/aluminiumCan.controller.base";

@swagger.ApiTags("aluminiumCans")
@common.Controller("aluminiumCans")
export class AluminiumCanController extends AluminiumCanControllerBase {
  constructor(protected readonly service: AluminiumCanService) {
    super(service);
  }
}
