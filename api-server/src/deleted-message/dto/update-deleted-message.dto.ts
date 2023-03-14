import { PartialType } from '@nestjs/swagger';
import { CreateDeletedMessageDto } from './create-deleted-message.dto';

export class UpdateDeletedMessageDto extends PartialType(CreateDeletedMessageDto) {}
