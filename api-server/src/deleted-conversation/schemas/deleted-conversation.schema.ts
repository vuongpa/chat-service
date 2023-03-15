import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';
import { Conversation } from '../../conversation/schemas/conversation.schema';
import { User } from '../../user/schemas/user.schema';

export type DeletedConversationDocument = HydratedDocument<DeletedConversation>;

@Schema({ timestamps: true })
export class DeletedConversation extends BaseEntity {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Conversation.name,
  })
  conversation: Conversation;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  user: User;
}

export const DeletedConversationSchema =
  SchemaFactory.createForClass(DeletedConversation);
