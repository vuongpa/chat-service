import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { Participant } from './schemas/participant.schema';

@Injectable()
export class ParticipantRepository extends BaseRepository<Participant> {
  constructor(
    @InjectModel(Participant.name)
    private readonly participantModel: Model<Participant>,
  ) {
    super(participantModel);
  }
}
