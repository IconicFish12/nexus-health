import { Module } from '@nestjs/common';
import { BillingServiceController } from './billing-service.controller.ts';
import { BillingServiceService } from './billing-service.service.ts';

@Module({
  imports: [],
  controllers: [BillingServiceController],
  providers: [BillingServiceService],
})
export class BillingServiceModule {}
