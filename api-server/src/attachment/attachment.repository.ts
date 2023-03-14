import { BaseRepository } from '../base/base.repository';
import { Attachment } from './schemas/attachment.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AttachmentRepository extends BaseRepository<Attachment> {
  constructor(
    @InjectModel(Attachment.name)
    private readonly attachmentModel: Model<Attachment>,
  ) {
    super(attachmentModel);
  }
}
