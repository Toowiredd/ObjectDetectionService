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
import { Pet1PlasticBottleWhereInput } from "./Pet1PlasticBottleWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class Pet1PlasticBottleCountArgs {
  @ApiProperty({
    required: false,
    type: () => Pet1PlasticBottleWhereInput,
  })
  @Field(() => Pet1PlasticBottleWhereInput, { nullable: true })
  @Type(() => Pet1PlasticBottleWhereInput)
  where?: Pet1PlasticBottleWhereInput;
}

export { Pet1PlasticBottleCountArgs as Pet1PlasticBottleCountArgs };
