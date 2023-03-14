import { Module } from '@nestjs/common';
import { AccessService } from './access.service';
import { AccessController } from './access.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Access, AccessSchema } from './schemas/access.schemas';
import { AccessRepository } from './access.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Access.name,
        schema: AccessSchema,
      },
    ]),
  ],
  controllers: [AccessController],
  providers: [AccessService, AccessRepository],
})
export class AccessModule {}
