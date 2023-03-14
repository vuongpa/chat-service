import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { BaseRepository } from 'src/base/base.repository';
import { ContactRepository } from './contact.repository';
import { Contact } from './schemas/contact.schema';

@Controller('contacts')
export class ContactController extends BaseController<Contact> {
  baseRepository: BaseRepository<Contact>;

  constructor(private readonly contactRepository: ContactRepository) {
    super();
    this.baseRepository = this.contactRepository;
  }
}
