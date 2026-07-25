import { Test, TestingModule } from '@nestjs/testing';
import { WardServiceController } from './ward-service.controller';
import { WardServiceService } from './ward-service.service';

describe('WardServiceController', () => {
  let wardServiceController: WardServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WardServiceController],
      providers: [WardServiceService],
    }).compile();

    wardServiceController = app.get<WardServiceController>(WardServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(wardServiceController.getHello()).toBe('Hello World!');
    });
  });
});
