import { Module } from '@nestjs/common';
import { BillingDatabaseService } from './billing-database.service';

@Module({
  providers: [BillingDatabaseService],
  exports: [BillingDatabaseService],
})
export class BillingDatabaseModule {}
