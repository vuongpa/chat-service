import { Module } from '@nestjs/common';
import { UserContactService } from './user-contact.service';
import { UserContactController } from './user-contact.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserContact, UserContactSchema } from './schemas/user-contact.schema';
import { UserContactRepository } from './user-contact.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserContact.name, schema: UserContactSchema },
    ]),
  ],
  controllers: [UserContactController],
  providers: [UserContactService, UserContactRepository],
})
export class UserContactModule {}
