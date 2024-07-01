import * as graphql from "@nestjs/graphql";
import { MilkCartonResolverBase } from "./base/milkCarton.resolver.base";
import { MilkCarton } from "./base/MilkCarton";
import { MilkCartonService } from "./milkCarton.service";

@graphql.Resolver(() => MilkCarton)
export class MilkCartonResolver extends MilkCartonResolverBase {
  constructor(protected readonly service: MilkCartonService) {
    super(service);
  }
}
