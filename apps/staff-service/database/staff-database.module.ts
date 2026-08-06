import { Module } from '@nestjs/common';
import { StaffDatabaseService } from './staff-database.service';

@Module({
  providers: [StaffDatabaseService],
})
export class StaffDatabaseModule {}
