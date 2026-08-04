import { Controller, Get } from '@nestjs/common';
import { BillingServiceService } from './billing-service.service.ts';

@Controller()
export class BillingServiceController {
  constructor(private readonly billingServiceService: BillingServiceService) {}

  @Get()
  getHello(): string {
    return this.billingServiceService.getHello();
  }
}
