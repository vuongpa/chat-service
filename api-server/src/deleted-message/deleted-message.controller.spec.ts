import { Test, TestingModule } from '@nestjs/testing';
import { DeletedMessageController } from './deleted-message.controller';
import { DeletedMessageService } from './deleted-message.service';

describe('DeletedMessageController', () => {
  let controller: DeletedMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeletedMessageController],
      providers: [DeletedMessageService],
    }).compile();

    controller = module.get<DeletedMessageController>(DeletedMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
