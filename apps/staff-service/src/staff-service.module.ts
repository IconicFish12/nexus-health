import { Module } from '@nestjs/common';
import { StaffServiceController } from './staff-service.controller.ts';
import { StaffServiceService } from './staff-service.service.ts';

@Module({
  imports: [],
  controllers: [StaffServiceController],
  providers: [StaffServiceService],
})
export class StaffServiceModule {}
