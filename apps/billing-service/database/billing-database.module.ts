import { Module } from '@nestjs/common';
import { BillingDatabaseService } from './billing-database.service.ts';

@Module({
  providers: [BillingDatabaseService]
})
export class BillingDatabaseModule {}
