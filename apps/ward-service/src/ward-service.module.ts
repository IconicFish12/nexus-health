import { Module } from '@nestjs/common';
import { WardServiceController } from './ward-service.controller.ts';
import { WardServiceService } from './ward-service.service.ts';

@Module({
  imports: [],
  controllers: [WardServiceController],
  providers: [WardServiceService],
})
export class WardServiceModule {}
