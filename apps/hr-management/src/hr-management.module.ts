import { Module } from '@nestjs/common';
import { HrManagementController } from './hr-management.controller';
import { HrManagementService } from './hr-management.service';

@Module({
  imports: [],
  controllers: [HrManagementController],
  providers: [HrManagementService],
})
export class HrManagementModule {}
