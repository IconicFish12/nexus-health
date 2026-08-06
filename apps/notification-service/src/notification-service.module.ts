import { Module } from '@nestjs/common';
import { NotificationServiceController } from './notification-service.controller.ts';
import { NotificationServiceService } from './notification-service.service.ts';

@Module({
  imports: [],
  controllers: [NotificationServiceController],
  providers: [NotificationServiceService],
})
export class NotificationServiceModule {}
