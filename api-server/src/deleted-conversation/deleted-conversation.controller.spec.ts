import { Test, TestingModule } from '@nestjs/testing';
import { DeletedConversationController } from './deleted-conversation.controller';
import { DeletedConversationService } from './deleted-conversation.service';

describe('DeletedConversationController', () => {
  let controller: DeletedConversationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeletedConversationController],
      providers: [DeletedConversationService],
    }).compile();

    controller = module.get<DeletedConversationController>(DeletedConversationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
