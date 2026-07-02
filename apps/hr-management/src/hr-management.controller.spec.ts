import { Test, TestingModule } from '@nestjs/testing';
import { HrManagementController } from './hr-management.controller';
import { HrManagementService } from './hr-management.service';

describe('HrManagementController', () => {
  let hrManagementController: HrManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HrManagementController],
      providers: [HrManagementService],
    }).compile();

    hrManagementController = app.get<HrManagementController>(HrManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(hrManagementController.getHello()).toBe('Hello World!');
    });
  });
});
