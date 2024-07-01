import * as graphql from "@nestjs/graphql";
import { Pet1PlasticBottleResolverBase } from "./base/pet1PlasticBottle.resolver.base";
import { Pet1PlasticBottle } from "./base/Pet1PlasticBottle";
import { Pet1PlasticBottleService } from "./pet1PlasticBottle.service";

@graphql.Resolver(() => Pet1PlasticBottle)
export class Pet1PlasticBottleResolver extends Pet1PlasticBottleResolverBase {
  constructor(protected readonly service: Pet1PlasticBottleService) {
    super(service);
  }
}
