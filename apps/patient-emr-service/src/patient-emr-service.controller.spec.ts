import { Test, TestingModule } from '@nestjs/testing';
import { PatientEmrServiceController } from './patient-emr-service.controller';
import { PatientEmrServiceService } from './patient-emr-service.service';

describe('PatientEmrServiceController', () => {
  let patientEmrServiceController: PatientEmrServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PatientEmrServiceController],
      providers: [PatientEmrServiceService],
    }).compile();

    patientEmrServiceController = app.get<PatientEmrServiceController>(PatientEmrServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(patientEmrServiceController.getHello()).toBe('Hello World!');
    });
  });
});
