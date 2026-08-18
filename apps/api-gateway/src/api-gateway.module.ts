import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule } from '@nestjs/microservices';
import { GrpcClient } from '@app/protobuf';

const grpcClient = new GrpcClient();

@Module({
  imports: [
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
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
