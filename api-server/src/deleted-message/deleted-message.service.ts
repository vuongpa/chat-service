import { Injectable } from '@nestjs/common';
import { CreateDeletedMessageDto } from './dto/create-deleted-message.dto';
import { UpdateDeletedMessageDto } from './dto/update-deleted-message.dto';

@Injectable()
export class DeletedMessageService {
  create(createDeletedMessageDto: CreateDeletedMessageDto) {
    return 'This action adds a new deletedMessage';
  }

  findAll() {
    return `This action returns all deletedMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deletedMessage`;
  }

  update(id: number, updateDeletedMessageDto: UpdateDeletedMessageDto) {
    return `This action updates a #${id} deletedMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} deletedMessage`;
  }
}
