import { Test, TestingModule } from '@nestjs/testing';
import { DeletedMessageService } from './deleted-message.service';

describe('DeletedMessageService', () => {
  let service: DeletedMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeletedMessageService],
    }).compile();

    service = module.get<DeletedMessageService>(DeletedMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
