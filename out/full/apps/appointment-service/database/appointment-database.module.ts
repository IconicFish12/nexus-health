import { Module } from '@nestjs/common';
import { AppointmentDatabaseService } from './appointment-database.service.ts';

@Module({
  providers: [AppointmentDatabaseService],
})
export class AppointmentDatabaseModule {}
