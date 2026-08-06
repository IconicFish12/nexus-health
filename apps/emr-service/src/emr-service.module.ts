import { Module } from '@nestjs/common';
import { EmrServiceController } from './emr-service.controller.ts';
import { EmrServiceService } from './emr-service.service.ts';

@Module({
  imports: [],
  controllers: [EmrServiceController],
  providers: [EmrServiceService],
})
export class EmrServiceModule {}
