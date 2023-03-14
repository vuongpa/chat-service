import { Module } from '@nestjs/common';
import { DeletedMessageService } from './deleted-message.service';
import { DeletedMessageController } from './deleted-message.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DeletedMessage,
  DeletedMessageSchema,
} from './schemas/deleted-message.schema';
import { DeletedMessageRepository } from './deleted-message.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DeletedMessage.name, schema: DeletedMessageSchema },
    ]),
  ],
  controllers: [DeletedMessageController],
  providers: [DeletedMessageService, DeletedMessageRepository],
})
export class DeletedMessageModule {}
