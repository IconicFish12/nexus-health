import { Controller, Get } from '@nestjs/common';
import { WardServiceService } from './ward-service.service';

@Controller()
export class WardServiceController {
  constructor(private readonly wardServiceService: WardServiceService) {}

  @Get()
  getHello(): string {
    return this.wardServiceService.getHello();
  }
}
