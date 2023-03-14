import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { User } from './schemas/user.schema';
import { BaseRepository } from 'src/base/base.repository';
import { UserRepository } from './user.repository';

@Controller('users')
export class UserController extends BaseController<User> {
  baseRepository: BaseRepository<User>;

  constructor(private readonly userRepository: UserRepository) {
    super();
    this.baseRepository = this.userRepository;
  }
}
