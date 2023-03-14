import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { BaseRepository } from 'src/base/base.repository';
import { ParticipantRepository } from './participant.repository';
import { Participant } from './schemas/participant.schema';

@Controller('participants')
export class ParticipantController extends BaseController<Participant> {
  baseRepository: BaseRepository<Participant>;

  constructor(private readonly participantRepository: ParticipantRepository) {
    super();
    this.baseRepository = this.participantRepository;
  }
}
