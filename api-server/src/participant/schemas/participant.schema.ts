import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';
import { Conversation } from '../../conversation/schemas/conversation.schema';
import { User } from '../../user/schemas/user.schema';

export type ParticipantDocument = HydratedDocument<Participant>;

export class Participant extends BaseEntity {
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

  @Prop()
  type: string;

  static TYPE = {};
}

export const ParticipantSchema = SchemaFactory.createForClass(Participant);
