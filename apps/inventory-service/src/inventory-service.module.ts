import { Module } from '@nestjs/common';
import { InventoryServiceController } from './inventory-service.controller.ts';
import { InventoryServiceService } from './inventory-service.service.ts';

@Module({
  imports: [],
  controllers: [InventoryServiceController],
  providers: [InventoryServiceService],
})
export class InventoryServiceModule {}
