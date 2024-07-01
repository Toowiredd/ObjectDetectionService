/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Pet1PlasticBottle } from "./Pet1PlasticBottle";
import { Pet1PlasticBottleCountArgs } from "./Pet1PlasticBottleCountArgs";
import { Pet1PlasticBottleFindManyArgs } from "./Pet1PlasticBottleFindManyArgs";
import { Pet1PlasticBottleFindUniqueArgs } from "./Pet1PlasticBottleFindUniqueArgs";
import { DeletePet1PlasticBottleArgs } from "./DeletePet1PlasticBottleArgs";
import { Pet1PlasticBottleService } from "../pet1PlasticBottle.service";
@graphql.Resolver(() => Pet1PlasticBottle)
export class Pet1PlasticBottleResolverBase {
  constructor(protected readonly service: Pet1PlasticBottleService) {}

  async _pet1PlasticBottlesMeta(
    @graphql.Args() args: Pet1PlasticBottleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Pet1PlasticBottle])
  async pet1PlasticBottles(
    @graphql.Args() args: Pet1PlasticBottleFindManyArgs
  ): Promise<Pet1PlasticBottle[]> {
    return this.service.pet1PlasticBottles(args);
  }

  @graphql.Query(() => Pet1PlasticBottle, { nullable: true })
  async pet1PlasticBottle(
    @graphql.Args() args: Pet1PlasticBottleFindUniqueArgs
  ): Promise<Pet1PlasticBottle | null> {
    const result = await this.service.pet1PlasticBottle(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Pet1PlasticBottle)
  async deletePet1PlasticBottle(
    @graphql.Args() args: DeletePet1PlasticBottleArgs
  ): Promise<Pet1PlasticBottle | null> {
    try {
      return await this.service.deletePet1PlasticBottle(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
