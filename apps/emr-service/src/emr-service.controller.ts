import { Controller, Get } from '@nestjs/common';
import { EmrServiceService } from './emr-service.service';

@Controller()
export class EmrServiceController {
  constructor(private readonly emrServiceService: EmrServiceService) {}

  @Get()
  getHello(): string {
    return this.emrServiceService.getHello();
  }
}
