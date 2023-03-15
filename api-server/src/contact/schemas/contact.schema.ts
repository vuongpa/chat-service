import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';

export type ContactDocument = HydratedDocument<Contact>;

@Schema({ timestamps: true })
export class Contact extends BaseEntity {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
