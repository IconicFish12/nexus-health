import { Module } from '@nestjs/common';
import { AppointmentDatabaseService } from './appointment-database.service';

@Module({
  providers: [AppointmentDatabaseService],
  exports: [AppointmentDatabaseService],
})
export class AppointmentDatabaseModule {}
