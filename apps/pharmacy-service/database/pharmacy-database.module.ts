import { Module } from '@nestjs/common';
import { PharmacyDatabaseService } from './pharmacy-database.service.ts';

@Module({
  providers: [PharmacyDatabaseService]
})
export class PharmacyDatabaseModule {}
