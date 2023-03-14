import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceModule } from './device/device.module';
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';
import { UserContactModule } from './user-contact/user-contact.module';
import { AccessModule } from './access/access.module';
import { BlockListModule } from './block-list/block-list.module';
import { ParticipantModule } from './participant/participant.module';
import { MessageModule } from './message/message.module';
import { ConversationModule } from './conversation/conversation.module';
import { DeletedConversationModule } from './deleted-conversation/deleted-conversation.module';
import { DeletedMessageModule } from './deleted-message/deleted-message.module';
import { AttachmentModule } from './attachment/attachment.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        MONGODB_NAME: Joi.string().required(),
        DOMAIN_FE: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRED: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXPIRED: Joi.string().required(),
        JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
        JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
        PORT: Joi.number().default(3000),
      }),
      envFilePath: ['.development.env', '.production.env'],
    }),
    MongooseModule.forRoot(
      `${process.env.MONGODB_URI}${process.env.MONGODB_NAME}`,
    ),
    DeviceModule,
    UserModule,
    ContactModule,
    UserContactModule,
    AccessModule,
    BlockListModule,
    ParticipantModule,
    MessageModule,
    ConversationModule,
    DeletedConversationModule,
    DeletedMessageModule,
    AttachmentModule,
    AuthModule,
  ],
})
export class AppModule {}
