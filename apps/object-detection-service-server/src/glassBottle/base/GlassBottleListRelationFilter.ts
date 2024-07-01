/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GlassBottleWhereInput } from "./GlassBottleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GlassBottleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GlassBottleWhereInput,
  })
  @ValidateNested()
  @Type(() => GlassBottleWhereInput)
  @IsOptional()
  @Field(() => GlassBottleWhereInput, {
    nullable: true,
  })
  every?: GlassBottleWhereInput;

  @ApiProperty({
    required: false,
    type: () => GlassBottleWhereInput,
  })
  @ValidateNested()
  @Type(() => GlassBottleWhereInput)
  @IsOptional()
  @Field(() => GlassBottleWhereInput, {
    nullable: true,
  })
  some?: GlassBottleWhereInput;

  @ApiProperty({
    required: false,
    type: () => GlassBottleWhereInput,
  })
  @ValidateNested()
  @Type(() => GlassBottleWhereInput)
  @IsOptional()
  @Field(() => GlassBottleWhereInput, {
    nullable: true,
  })
  none?: GlassBottleWhereInput;
}
export { GlassBottleListRelationFilter as GlassBottleListRelationFilter };