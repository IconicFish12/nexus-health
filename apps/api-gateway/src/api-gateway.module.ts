import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller.ts';
import { ApiGatewayService } from './api-gateway.service.ts';

@Module({
  imports: [],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
