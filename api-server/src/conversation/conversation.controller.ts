import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { BaseRepository } from 'src/base/base.repository';
import { ConversationRepository } from './conversation.repository';
import { Conversation } from './schemas/conversation.schema';

@Controller('conversations')
export class ConversationController extends BaseController<Conversation> {
  baseRepository: BaseRepository<Conversation>;

  constructor(private readonly conversationRepository: ConversationRepository) {
    super();
    this.baseRepository = this.conversationRepository;
  }
}
