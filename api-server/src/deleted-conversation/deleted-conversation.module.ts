import { Module } from '@nestjs/common';
import { DeletedConversationService } from './deleted-conversation.service';
import { DeletedConversationController } from './deleted-conversation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DeletedConversation,
  DeletedConversationSchema,
} from './schemas/deleted-conversation.schema';
import { DeletedConversationRepository } from './deleted-conversation.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DeletedConversation.name, schema: DeletedConversationSchema },
    ]),
  ],
  controllers: [DeletedConversationController],
  providers: [DeletedConversationService, DeletedConversationRepository],
})
export class DeletedConversationModule {}
