import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/base/base.schema';
import { Contact } from 'src/contact/schemas/contact.schema';
import { User } from 'src/user/schemas/user.schema';

export type UserContactDocument = HydratedDocument<UserContact>;

export class UserContact extends BaseEntity {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  user: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Contact.name,
  })
  contact: Contact;
}

export const UserContactSchema = SchemaFactory.createForClass(UserContact);
