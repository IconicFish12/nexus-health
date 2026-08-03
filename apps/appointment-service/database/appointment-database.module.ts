import { Module } from '@nestjs/common';
import { AppointmentDatabaseService } from './appointment-database.service';

@Module({
  providers: [AppointmentDatabaseService],
})
export class AppointmentDatabaseModule {}
