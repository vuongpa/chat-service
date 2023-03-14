import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';
import { User } from 'src/user/schemas/user.schema';

export type BlockListDocument = HydratedDocument<BlockList>;

export class BlockList extends BaseEntity {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  user: User;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: User.name,
  })
  participants: User;
}

export const BlockListSchema = SchemaFactory.createForClass(BlockList);
