import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { DeletedConversation } from './schemas/deleted-conversation.schema';

@Injectable()
export class DeletedConversationRepository extends BaseRepository<DeletedConversation> {
  constructor(
    @InjectModel(DeletedConversation.name)
    private readonly deletedConversationModel: Model<DeletedConversation>,
  ) {
    super(deletedConversationModel);
  }
}
