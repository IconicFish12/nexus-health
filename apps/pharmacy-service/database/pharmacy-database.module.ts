import { Module } from '@nestjs/common';
import { PharmacyDatabaseService } from './pharmacy-database.service';

@Module({
  providers: [PharmacyDatabaseService]
})
export class PharmacyDatabaseModule {}
