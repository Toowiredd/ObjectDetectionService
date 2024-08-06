/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MilkCartonService } from "../milkCarton.service";
import { MilkCartonCreateInput } from "./MilkCartonCreateInput";
import { MilkCarton } from "./MilkCarton";
import { MilkCartonFindManyArgs } from "./MilkCartonFindManyArgs";
import { MilkCartonWhereUniqueInput } from "./MilkCartonWhereUniqueInput";
import { MilkCartonUpdateInput } from "./MilkCartonUpdateInput";

export class MilkCartonControllerBase {
  constructor(protected readonly service: MilkCartonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MilkCarton })
  async createMilkCarton(
    @common.Body() data: MilkCartonCreateInput
  ): Promise<MilkCarton> {
    return await this.service.createMilkCarton({
      data: data,
      select: {
        confidenceScore: true,
        count: true,
        createdAt: true,
        detectionTimestamp: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MilkCarton] })
  @ApiNestedQuery(MilkCartonFindManyArgs)
  async milkCartons(@common.Req() request: Request): Promise<MilkCarton[]> {
    const args = plainToClass(MilkCartonFindManyArgs, request.query);
    return this.service.milkCartons({
      ...args,
      select: {
        confidenceScore: true,
        count: true,
        createdAt: true,
        detectionTimestamp: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MilkCarton })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async milkCarton(
    @common.Param() params: MilkCartonWhereUniqueInput
  ): Promise<MilkCarton | null> {
    const result = await this.service.milkCarton({
      where: params,
      select: {
        confidenceScore: true,
        count: true,
        createdAt: true,
        detectionTimestamp: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MilkCarton })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMilkCarton(
    @common.Param() params: MilkCartonWhereUniqueInput,
    @common.Body() data: MilkCartonUpdateInput
  ): Promise<MilkCarton | null> {
    try {
      return await this.service.updateMilkCarton({
        where: params,
        data: data,
        select: {
          confidenceScore: true,
          count: true,
          createdAt: true,
          detectionTimestamp: true,
          id: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MilkCarton })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMilkCarton(
    @common.Param() params: MilkCartonWhereUniqueInput
  ): Promise<MilkCarton | null> {
    try {
      return await this.service.deleteMilkCarton({
        where: params,
        select: {
          confidenceScore: true,
          count: true,
          createdAt: true,
          detectionTimestamp: true,
          id: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
