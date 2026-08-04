import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller.ts';
import { AuthServiceService } from './auth-service.service.ts';

@Module({
  imports: [],
  controllers: [AuthServiceController],
  providers: [AuthServiceService],
})
export class AuthServiceModule {}
