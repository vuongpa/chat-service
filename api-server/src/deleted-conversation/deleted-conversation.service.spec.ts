import { Test, TestingModule } from '@nestjs/testing';
import { DeletedConversationService } from './deleted-conversation.service';

describe('DeletedConversationService', () => {
  let service: DeletedConversationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeletedConversationService],
    }).compile();

    service = module.get<DeletedConversationService>(DeletedConversationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
