import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { BaseRepository } from 'src/base/base.repository';
import { UserContact } from './schemas/user-contact.schema';
import { UserContactRepository } from './user-contact.repository';

@Controller('user-contacts')
export class UserContactController extends BaseController<UserContact> {
  baseRepository: BaseRepository<UserContact>;

  constructor(private readonly userContactRepository: UserContactRepository) {
    super();
    this.baseRepository = this.userContactRepository;
  }
}
