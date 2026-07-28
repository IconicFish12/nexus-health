import { Test, TestingModule } from '@nestjs/testing';
import { BillingDatabaseService } from './billing-database.service';

describe('BillingDatabaseService', () => {
  let service: BillingDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillingDatabaseService],
    }).compile();

    service = module.get<BillingDatabaseService>(BillingDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
