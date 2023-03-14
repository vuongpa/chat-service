import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { UserContact } from './schemas/user-contact.schema';

@Injectable()
export class UserContactRepository extends BaseRepository<UserContact> {
  constructor(
    @InjectModel(UserContact.name)
    private readonly userContactModel: Model<UserContact>,
  ) {
    super(userContactModel);
  }
}
