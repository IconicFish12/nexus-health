import { Module } from '@nestjs/common';
import { BillingDatabaseService } from './billing-database.service';

@Module({
  providers: [BillingDatabaseService]
})
export class BillingDatabaseModule {}
