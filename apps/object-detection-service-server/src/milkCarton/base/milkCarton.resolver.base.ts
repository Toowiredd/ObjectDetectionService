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
import { MilkCarton } from "./MilkCarton";
import { MilkCartonCountArgs } from "./MilkCartonCountArgs";
import { MilkCartonFindManyArgs } from "./MilkCartonFindManyArgs";
import { MilkCartonFindUniqueArgs } from "./MilkCartonFindUniqueArgs";
import { DeleteMilkCartonArgs } from "./DeleteMilkCartonArgs";
import { MilkCartonService } from "../milkCarton.service";
@graphql.Resolver(() => MilkCarton)
export class MilkCartonResolverBase {
  constructor(protected readonly service: MilkCartonService) {}

  async _milkCartonsMeta(
    @graphql.Args() args: MilkCartonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MilkCarton])
  async milkCartons(
    @graphql.Args() args: MilkCartonFindManyArgs
  ): Promise<MilkCarton[]> {
    return this.service.milkCartons(args);
  }

  @graphql.Query(() => MilkCarton, { nullable: true })
  async milkCarton(
    @graphql.Args() args: MilkCartonFindUniqueArgs
  ): Promise<MilkCarton | null> {
    const result = await this.service.milkCarton(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MilkCarton)
  async deleteMilkCarton(
    @graphql.Args() args: DeleteMilkCartonArgs
  ): Promise<MilkCarton | null> {
    try {
      return await this.service.deleteMilkCarton(args);
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
