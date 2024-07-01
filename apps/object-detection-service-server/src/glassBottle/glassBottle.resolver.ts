import * as graphql from "@nestjs/graphql";
import { GlassBottleResolverBase } from "./base/glassBottle.resolver.base";
import { GlassBottle } from "./base/GlassBottle";
import { GlassBottleService } from "./glassBottle.service";

@graphql.Resolver(() => GlassBottle)
export class GlassBottleResolver extends GlassBottleResolverBase {
  constructor(protected readonly service: GlassBottleService) {
    super(service);
  }
}
