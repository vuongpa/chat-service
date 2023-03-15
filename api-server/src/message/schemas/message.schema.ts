import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';
import { Conversation } from '../../conversation/schemas/conversation.schema';
import { User } from '../../user/schemas/user.schema';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message extends BaseEntity {
  @Prop()
  guild: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Conversation.name,
  })
  conversation: Conversation;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  sender: User;

  @Prop()
  messageType: string;

  @Prop({
    required: true,
  })
  message: string;

  static MESSAGE_TYPE = {};
}

export const MessageSchema = SchemaFactory.createForClass(Message);
