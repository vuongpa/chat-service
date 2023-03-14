import { Module } from '@nestjs/common';
import { BlockListService } from './block-list.service';
import { BlockListController } from './block-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockList, BlockListSchema } from './schemas/block-list.schema';
import { BlockListRepository } from './block-list.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BlockList.name, schema: BlockListSchema },
    ]),
  ],
  controllers: [BlockListController],
  providers: [BlockListService, BlockListRepository],
})
export class BlockListModule {}
