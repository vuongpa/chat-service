import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';

export type DeviceDocument = HydratedDocument<Device>;

export class Device extends BaseEntity {
  @Prop({ required: true })
  deviceToken: string;

  @Prop()
  type: string;

  static TYPE = {
    APPLE: 'apple',
    ANDROID: 'android',
  };
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
