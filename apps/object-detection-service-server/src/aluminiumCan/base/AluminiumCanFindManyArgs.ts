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
import { AluminiumCanWhereInput } from "./AluminiumCanWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AluminiumCanOrderByInput } from "./AluminiumCanOrderByInput";

@ArgsType()
class AluminiumCanFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AluminiumCanWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AluminiumCanWhereInput, { nullable: true })
  @Type(() => AluminiumCanWhereInput)
  where?: AluminiumCanWhereInput;

  @ApiProperty({
    required: false,
    type: [AluminiumCanOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AluminiumCanOrderByInput], { nullable: true })
  @Type(() => AluminiumCanOrderByInput)
  orderBy?: Array<AluminiumCanOrderByInput>;

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

export { AluminiumCanFindManyArgs as AluminiumCanFindManyArgs };
