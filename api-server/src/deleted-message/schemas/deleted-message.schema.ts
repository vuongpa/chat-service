import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';
import { Message } from '../../message/schemas/message.schema';
import { User } from '../../user/schemas/user.schema';

export type DeletedMessageDocument = HydratedDocument<DeletedMessage>;

export class DeletedMessage extends BaseEntity {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Message.name,
  })
  message: Message;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  user: User;
}

export const DeletedMessageSchema =
  SchemaFactory.createForClass(DeletedMessage);
