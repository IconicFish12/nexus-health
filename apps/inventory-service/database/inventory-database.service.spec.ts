import { Test, TestingModule } from '@nestjs/testing';
import { InventoryDatabaseService } from './inventory-database.service';

describe('InventoryDatabaseService', () => {
  let service: InventoryDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryDatabaseService],
    }).compile();

    service = module.get<InventoryDatabaseService>(InventoryDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
