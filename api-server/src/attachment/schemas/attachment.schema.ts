import { BaseEntity } from '../../base/base.schema';
import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Message } from '../../message/schemas/message.schema';

export type AttachmentDocument = HydratedDocument<Attachment>;

export class Attachment extends BaseEntity {
  @Prop()
  thumbUrl: string;

  @Prop()
  fileUrl: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Message.name,
  })
  message: Message;
}

export const AttachmentSchema = SchemaFactory.createForClass(Attachment);
