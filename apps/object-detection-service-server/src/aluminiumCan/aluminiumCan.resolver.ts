import * as graphql from "@nestjs/graphql";
import { AluminiumCanResolverBase } from "./base/aluminiumCan.resolver.base";
import { AluminiumCan } from "./base/AluminiumCan";
import { AluminiumCanService } from "./aluminiumCan.service";

@graphql.Resolver(() => AluminiumCan)
export class AluminiumCanResolver extends AluminiumCanResolverBase {
  constructor(protected readonly service: AluminiumCanService) {
    super(service);
  }
}
