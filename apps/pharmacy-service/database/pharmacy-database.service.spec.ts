import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyDatabaseService } from './pharmacy-database.service.ts';

describe('PharmacyDatabaseService', () => {
  let service: PharmacyDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacyDatabaseService],
    }).compile();

    service = module.get<PharmacyDatabaseService>(PharmacyDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
