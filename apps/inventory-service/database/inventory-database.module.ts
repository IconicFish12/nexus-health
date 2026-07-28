import { Module } from '@nestjs/common';
import { InventoryDatabaseService } from './inventory-database.service';

@Module({
  providers: [InventoryDatabaseService]
})
export class InventoryDatabaseModule {}
