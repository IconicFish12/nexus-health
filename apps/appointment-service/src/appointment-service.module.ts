import { Module } from '@nestjs/common';
import { AppointmentServiceController } from './appointment-service.controller.ts';
import { AppointmentServiceService } from './appointment-service.service.ts';

@Module({
  controllers: [AppointmentServiceController],
  providers: [AppointmentServiceService],
})
export class AppointmentServiceModule {}
