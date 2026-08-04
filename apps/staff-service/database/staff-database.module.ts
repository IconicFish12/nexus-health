import { Module } from '@nestjs/common';
import { StaffDatabaseService } from './staff-database.service.ts';

@Module({
  providers: [StaffDatabaseService]
})
export class StaffDatabaseModule {}
