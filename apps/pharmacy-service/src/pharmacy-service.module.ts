import { Module } from '@nestjs/common';
import { PharmacyServiceController } from './pharmacy-service.controller.ts';
import { PharmacyServiceService } from './pharmacy-service.service.ts';

@Module({
  imports: [],
  controllers: [PharmacyServiceController],
  providers: [PharmacyServiceService],
})
export class PharmacyServiceModule {}
