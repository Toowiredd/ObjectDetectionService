/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Pet1PlasticBottleCreateInput } from "./Pet1PlasticBottleCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePet1PlasticBottleArgs {
  @ApiProperty({
    required: true,
    type: () => Pet1PlasticBottleCreateInput,
  })
  @ValidateNested()
  @Type(() => Pet1PlasticBottleCreateInput)
  @Field(() => Pet1PlasticBottleCreateInput, { nullable: false })
  data!: Pet1PlasticBottleCreateInput;
}

export { CreatePet1PlasticBottleArgs as CreatePet1PlasticBottleArgs };