import { Controller, Get } from '@nestjs/common';
import { PatientEmrServiceService } from './patient-emr-service.service';

@Controller()
export class PatientEmrServiceController {
  constructor(private readonly patientEmrServiceService: PatientEmrServiceService) {}

  @Get()
  getHello(): string {
    return this.patientEmrServiceService.getHello();
  }
}
