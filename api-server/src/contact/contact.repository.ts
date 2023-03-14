import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { Contact } from './schemas/contact.schema';

@Injectable()
export class ContactRepository extends BaseRepository<Contact> {
  constructor(
    @InjectModel(Contact.name)
    private readonly contactModel: Model<Contact>,
  ) {
    super(contactModel);
  }
}
