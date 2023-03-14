import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { DeletedMessage } from './schemas/deleted-message.schema';

@Injectable()
export class DeletedMessageRepository extends BaseRepository<DeletedMessage> {
  constructor(
    @InjectModel(DeletedMessage.name)
    private readonly deletedMessageModel: Model<DeletedMessage>,
  ) {
    super(deletedMessageModel);
  }
}
