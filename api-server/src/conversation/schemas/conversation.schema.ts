import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';
import { User } from 'src/user/schemas/user.schema';

export type ConversationDocument = HydratedDocument<Conversation>;

@Schema({ timestamps: true })
export class Conversation extends BaseEntity {
  @Prop()
  title: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  creator: User;

  @Prop()
  deletedAt: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
  })
  channelId: Types.ObjectId;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
