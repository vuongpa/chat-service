import { Injectable } from '@nestjs/common';
import { CreateDeletedConversationDto } from './dto/create-deleted-conversation.dto';
import { UpdateDeletedConversationDto } from './dto/update-deleted-conversation.dto';

@Injectable()
export class DeletedConversationService {
  create(createDeletedConversationDto: CreateDeletedConversationDto) {
    return 'This action adds a new deletedConversation';
  }

  findAll() {
    return `This action returns all deletedConversation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deletedConversation`;
  }

  update(id: number, updateDeletedConversationDto: UpdateDeletedConversationDto) {
    return `This action updates a #${id} deletedConversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} deletedConversation`;
  }
}
