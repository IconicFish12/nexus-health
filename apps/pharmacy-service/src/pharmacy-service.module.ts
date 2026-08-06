import { Module } from '@nestjs/common';
import { PharmacyServiceController } from './pharmacy-service.controller';
import { PharmacyServiceService } from './pharmacy-service.service';

@Module({
  imports: [],
  controllers: [PharmacyServiceController],
  providers: [PharmacyServiceService],
})
export class PharmacyServiceModule {}
