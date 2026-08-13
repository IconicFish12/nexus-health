import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentDatabaseService } from './appointment-database.service.ts';

describe('AppointmentDatabaseService', () => {
  let service: AppointmentDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentDatabaseService],
    }).compile();

    service = module.get<AppointmentDatabaseService>(
      AppointmentDatabaseService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
