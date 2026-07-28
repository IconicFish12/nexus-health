import { Test, TestingModule } from '@nestjs/testing';
import { StaffDatabaseService } from './staff-database.service';

describe('StaffDatabaseService', () => {
  let service: StaffDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffDatabaseService],
    }).compile();

    service = module.get<StaffDatabaseService>(StaffDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
