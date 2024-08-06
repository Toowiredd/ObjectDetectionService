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
import { Hdpe2PlasticBottleService } from "../hdpe2PlasticBottle.service";
import { Hdpe2PlasticBottleCreateInput } from "./Hdpe2PlasticBottleCreateInput";
import { Hdpe2PlasticBottle } from "./Hdpe2PlasticBottle";
import { Hdpe2PlasticBottleFindManyArgs } from "./Hdpe2PlasticBottleFindManyArgs";
import { Hdpe2PlasticBottleWhereUniqueInput } from "./Hdpe2PlasticBottleWhereUniqueInput";
import { Hdpe2PlasticBottleUpdateInput } from "./Hdpe2PlasticBottleUpdateInput";

export class Hdpe2PlasticBottleControllerBase {
  constructor(protected readonly service: Hdpe2PlasticBottleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hdpe2PlasticBottle })
  async createHdpe2PlasticBottle(
    @common.Body() data: Hdpe2PlasticBottleCreateInput
  ): Promise<Hdpe2PlasticBottle> {
    return await this.service.createHdpe2PlasticBottle({
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
  @swagger.ApiOkResponse({ type: [Hdpe2PlasticBottle] })
  @ApiNestedQuery(Hdpe2PlasticBottleFindManyArgs)
  async hdpe2PlasticBottles(
    @common.Req() request: Request
  ): Promise<Hdpe2PlasticBottle[]> {
    const args = plainToClass(Hdpe2PlasticBottleFindManyArgs, request.query);
    return this.service.hdpe2PlasticBottles({
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
  @swagger.ApiOkResponse({ type: Hdpe2PlasticBottle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async hdpe2PlasticBottle(
    @common.Param() params: Hdpe2PlasticBottleWhereUniqueInput
  ): Promise<Hdpe2PlasticBottle | null> {
    const result = await this.service.hdpe2PlasticBottle({
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
  @swagger.ApiOkResponse({ type: Hdpe2PlasticBottle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHdpe2PlasticBottle(
    @common.Param() params: Hdpe2PlasticBottleWhereUniqueInput,
    @common.Body() data: Hdpe2PlasticBottleUpdateInput
  ): Promise<Hdpe2PlasticBottle | null> {
    try {
      return await this.service.updateHdpe2PlasticBottle({
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
  @swagger.ApiOkResponse({ type: Hdpe2PlasticBottle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHdpe2PlasticBottle(
    @common.Param() params: Hdpe2PlasticBottleWhereUniqueInput
  ): Promise<Hdpe2PlasticBottle | null> {
    try {
      return await this.service.deleteHdpe2PlasticBottle({
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
