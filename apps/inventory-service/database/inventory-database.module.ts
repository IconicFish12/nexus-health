import { Module } from '@nestjs/common';
import { InventoryDatabaseService } from './inventory-database.service.ts';

@Module({
  providers: [InventoryDatabaseService]
})
export class InventoryDatabaseModule {}
