import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { BaseRepository } from 'src/base/base.repository';
import { DeletedConversationRepository } from './deleted-conversation.repository';
import { DeletedConversation } from './schemas/deleted-conversation.schema';

@Controller('deleted-conversations')
export class DeletedConversationController extends BaseController<DeletedConversation> {
  baseRepository: BaseRepository<DeletedConversation>;

  constructor(
    private readonly deletedConversationRepository: DeletedConversationRepository,
  ) {
    super();
    this.baseRepository = this.deletedConversationRepository;
  }
}
