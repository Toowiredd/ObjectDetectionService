import * as graphql from "@nestjs/graphql";
import { Hdpe2PlasticBottleResolverBase } from "./base/hdpe2PlasticBottle.resolver.base";
import { Hdpe2PlasticBottle } from "./base/Hdpe2PlasticBottle";
import { Hdpe2PlasticBottleService } from "./hdpe2PlasticBottle.service";

@graphql.Resolver(() => Hdpe2PlasticBottle)
export class Hdpe2PlasticBottleResolver extends Hdpe2PlasticBottleResolverBase {
  constructor(protected readonly service: Hdpe2PlasticBottleService) {
    super(service);
  }
}
