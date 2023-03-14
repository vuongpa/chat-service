import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { BaseRepository } from 'src/base/base.repository';
import { AccessRepository } from './access.repository';
import { Access } from './schemas/access.schemas';

@Controller('accesses')
export class AccessController extends BaseController<Access> {
  baseRepository: BaseRepository<Access>;

  constructor(private readonly accessRepository: AccessRepository) {
    super();
    this.baseRepository = this.accessRepository;
  }
}
