import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule } from '@nestjs/microservices';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { GrpcClient } from '@app/protobuf';
import { HealthModule } from './health/health.module';

const grpcClient = new GrpcClient();

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
    HealthModule,
    ClientsModule.register([
      {
        name: 'APPOINTMENT-SERVICE',
        ...grpcClient.appointmentService(),
      },
      {
        name: 'AUTH-SERVICE',
        ...grpcClient.authService(),
      },
      {
        name: 'BILLING-SERVICE',
        ...grpcClient.billingService(),
      },
      {
        name: 'EMR-SERVICE',
        ...grpcClient.emrService(),
      },
      {
        name: 'INVENTORY-SERVICE',
        ...grpcClient.inventoryService(),
      },
      {
        name: 'NOTIFICATION-SERVICE',
        ...grpcClient.notificationService(),
      },
      {
        name: 'PHARMACY-SERVICE',
        ...grpcClient.pharmacyService(),
      },
      {
        name: 'STAFF-SERVICE',
        ...grpcClient.staffService(),
      },
      {
        name: 'WARD-SERVICE',
        ...grpcClient.wardService(),
      },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [
    ApiGatewayService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class ApiGatewayModule {}
