import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { BaseRepository } from 'src/base/base.repository';
import { BlockListRepository } from './block-list.repository';
import { BlockList } from './schemas/block-list.schema';

@Controller('block-lists')
export class BlockListController extends BaseController<BlockList> {
  baseRepository: BaseRepository<BlockList>;

  constructor(private readonly blockListRepository: BlockListRepository) {
    super();
    this.baseRepository = this.blockListRepository;
  }
}
