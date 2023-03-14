import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { Access } from './schemas/access.schemas';

@Injectable()
export class AccessRepository extends BaseRepository<Access> {
  constructor(
    @InjectModel(Access.name)
    private readonly accessModel: Model<Access>,
  ) {
    super(accessModel);
  }
}
