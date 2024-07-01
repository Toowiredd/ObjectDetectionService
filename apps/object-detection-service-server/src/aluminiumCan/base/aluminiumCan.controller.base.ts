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
import { AluminiumCanService } from "../aluminiumCan.service";
import { AluminiumCanCreateInput } from "./AluminiumCanCreateInput";
import { AluminiumCan } from "./AluminiumCan";
import { AluminiumCanFindManyArgs } from "./AluminiumCanFindManyArgs";
import { AluminiumCanWhereUniqueInput } from "./AluminiumCanWhereUniqueInput";
import { AluminiumCanUpdateInput } from "./AluminiumCanUpdateInput";

export class AluminiumCanControllerBase {
  constructor(protected readonly service: AluminiumCanService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AluminiumCan })
  async createAluminiumCan(
    @common.Body() data: AluminiumCanCreateInput
  ): Promise<AluminiumCan> {
    return await this.service.createAluminiumCan({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AluminiumCan] })
  @ApiNestedQuery(AluminiumCanFindManyArgs)
  async aluminiumCans(@common.Req() request: Request): Promise<AluminiumCan[]> {
    const args = plainToClass(AluminiumCanFindManyArgs, request.query);
    return this.service.aluminiumCans({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AluminiumCan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async aluminiumCan(
    @common.Param() params: AluminiumCanWhereUniqueInput
  ): Promise<AluminiumCan | null> {
    const result = await this.service.aluminiumCan({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: AluminiumCan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAluminiumCan(
    @common.Param() params: AluminiumCanWhereUniqueInput,
    @common.Body() data: AluminiumCanUpdateInput
  ): Promise<AluminiumCan | null> {
    try {
      return await this.service.updateAluminiumCan({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: AluminiumCan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAluminiumCan(
    @common.Param() params: AluminiumCanWhereUniqueInput
  ): Promise<AluminiumCan | null> {
    try {
      return await this.service.deleteAluminiumCan({
        where: params,
        select: {
          createdAt: true,
          id: true,
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
