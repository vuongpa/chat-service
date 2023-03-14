import { PartialType } from '@nestjs/swagger';
import { CreateDeletedConversationDto } from './create-deleted-conversation.dto';

export class UpdateDeletedConversationDto extends PartialType(CreateDeletedConversationDto) {}
