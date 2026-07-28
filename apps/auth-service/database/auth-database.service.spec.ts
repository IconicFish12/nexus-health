import { Test, TestingModule } from '@nestjs/testing';
import { AuthDatabaseService } from './auth-database.service';

describe('AuthDatabaseService', () => {
  let service: AuthDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthDatabaseService],
    }).compile();

    service = module.get<AuthDatabaseService>(AuthDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
