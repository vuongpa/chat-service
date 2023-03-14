import {
  Body,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { BaseRepository } from './base.repository';
import { BaseEntity } from './base.schema';
import { JwtGuard } from '../auth/guards/jwt.guard';

export interface IBaseController<S extends BaseEntity> {
  findWithPagination(
    filter?: FilterQuery<S>,
  ): Promise<{ data: S[]; total: number }>;
}

export abstract class BaseController<S extends BaseEntity> {
  abstract baseRepository: BaseRepository<S>;

  @UseGuards(JwtGuard)
  @Post()
  async createBase(@Body() requestCreate: any) {
    try {
      const newSchema = await this.baseRepository.create(requestCreate);
      return newSchema;
    } catch (err) {
      if (err.code === 11000) {
        throw new HttpException(err.message, HttpStatus.CONFLICT);
      }
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtGuard)
  @Get()
  async findBase(filter?: FilterQuery<S>): Promise<S[]> {
    try {
      const result = await this.baseRepository.find({ filter });
      return result;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseRepository.findById(id);
  }

  @UseGuards(JwtGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.baseRepository.findByIdAndUpdate(id, updateUserDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseRepository.deleteOne(id);
  }
}
