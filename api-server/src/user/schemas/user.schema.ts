import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';
import { Device } from 'src/device/schemas/device.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User extends BaseEntity {
  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Prop()
  refreshToken: string;

  @Prop()
  isActive: boolean;

  @Prop()
  isReported: boolean;

  @Prop()
  isBlocked: boolean;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: Device.name,
  })
  devices: Device[];
}

export const UserSchema = SchemaFactory.createForClass(User);
