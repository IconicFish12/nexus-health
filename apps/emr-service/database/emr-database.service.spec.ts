import { Test, TestingModule } from '@nestjs/testing';
import { EmrDatabaseService } from './emr-database.service';

describe('EmrDatabaseService', () => {
  let service: EmrDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmrDatabaseService],
    }).compile();

    service = module.get<EmrDatabaseService>(EmrDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
