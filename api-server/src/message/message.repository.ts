import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { Message } from './schemas/message.schema';

@Injectable()
export class MessageRepository extends BaseRepository<Message> {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
  ) {
    super(messageModel);
  }
}
