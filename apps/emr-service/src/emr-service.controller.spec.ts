import { Test, TestingModule } from '@nestjs/testing';
import { EmrServiceController } from './emr-service.controller';
import { EmrServiceService } from './emr-service.service';

describe('EmrServiceController', () => {
  let emrServiceController: EmrServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmrServiceController],
      providers: [EmrServiceService],
    }).compile();

    emrServiceController = app.get<EmrServiceController>(EmrServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(emrServiceController.getHello()).toBe('Hello World!');
    });
  });
});
