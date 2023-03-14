import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';
import { Device } from 'src/device/schemas/device.schema';
import { User } from 'src/user/schemas/user.schema';

export type AccessDocument = HydratedDocument<Access>;

export class Access extends BaseEntity {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Device.name,
  })
  device: Device;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  user: User;
}

export const AccessSchema = SchemaFactory.createForClass(Access);
