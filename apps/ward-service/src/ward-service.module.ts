import { Module } from '@nestjs/common';
import { WardServiceController } from './ward-service.controller';
import { WardServiceService } from './ward-service.service';

@Module({
  imports: [],
  controllers: [WardServiceController],
  providers: [WardServiceService],
})
export class WardServiceModule {}
