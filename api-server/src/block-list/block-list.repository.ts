import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { BlockList } from './schemas/block-list.schema';

@Injectable()
export class BlockListRepository extends BaseRepository<BlockList> {
  constructor(
    @InjectModel(BlockList.name)
    private readonly blockListModel: Model<BlockList>,
  ) {
    super(blockListModel);
  }
}
