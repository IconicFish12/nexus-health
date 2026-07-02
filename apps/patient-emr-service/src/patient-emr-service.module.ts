import { Module } from '@nestjs/common';
import { PatientEmrServiceController } from './patient-emr-service.controller';
import { PatientEmrServiceService } from './patient-emr-service.service';

@Module({
  imports: [],
  controllers: [PatientEmrServiceController],
  providers: [PatientEmrServiceService],
})
export class PatientEmrServiceModule {}
