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
import { MilkCartonWhereInput } from "./MilkCartonWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MilkCartonOrderByInput } from "./MilkCartonOrderByInput";

@ArgsType()
class MilkCartonFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MilkCartonWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MilkCartonWhereInput, { nullable: true })
  @Type(() => MilkCartonWhereInput)
  where?: MilkCartonWhereInput;

  @ApiProperty({
    required: false,
    type: [MilkCartonOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MilkCartonOrderByInput], { nullable: true })
  @Type(() => MilkCartonOrderByInput)
  orderBy?: Array<MilkCartonOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MilkCartonFindManyArgs as MilkCartonFindManyArgs };
