import { Module } from '@nestjs/common';
import { EmrServiceController } from './emr-service.controller';
import { EmrServiceService } from './emr-service.service';

@Module({
  imports: [],
  controllers: [EmrServiceController],
  providers: [EmrServiceService],
})
export class EmrServiceModule {}
