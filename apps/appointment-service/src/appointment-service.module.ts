import { Module } from '@nestjs/common';
import { AppointmentServiceController } from './appointment-service.controller';
import { AppointmentServiceService } from './appointment-service.service';

@Module({
  imports: [],
  controllers: [AppointmentServiceController],
  providers: [AppointmentServiceService],
})
export class AppointmentServiceModule {}
