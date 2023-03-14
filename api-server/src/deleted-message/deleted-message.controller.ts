import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { BaseRepository } from 'src/base/base.repository';
import { DeletedMessageRepository } from './deleted-message.repository';
import { DeletedMessage } from './schemas/deleted-message.schema';

@Controller('deleted-messages')
export class DeletedMessageController extends BaseController<DeletedMessage> {
  baseRepository: BaseRepository<DeletedMessage>;

  constructor(
    private readonly deletedMessageRepository: DeletedMessageRepository,
  ) {
    super();
    this.baseRepository = this.deletedMessageRepository;
  }
}
