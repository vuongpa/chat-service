import { Controller } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { Attachment } from './schemas/attachment.schema';
import { AttachmentRepository } from './attachment.repository';
import { BaseRepository } from '../base/base.repository';

@Controller('attachments')
export class AttachmentController extends BaseController<Attachment> {
  baseRepository: BaseRepository<Attachment>;

  constructor(private readonly attachmentRepository: AttachmentRepository) {
    super();
    this.baseRepository = this.attachmentRepository;
  }
}
