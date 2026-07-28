import { Test, TestingModule } from '@nestjs/testing';
import { WardDatabaseService } from './ward-database.service';

describe('WardDatabaseService', () => {
  let service: WardDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WardDatabaseService],
    }).compile();

    service = module.get<WardDatabaseService>(WardDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
