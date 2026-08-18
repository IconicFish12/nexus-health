import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { type MicroserviceOptions } from '@nestjs/microservices';
import type { INestApplication } from '@nestjs/common';
import { GrpcHost } from '@app/protobuf';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(ApiGatewayModule);

  const host = new GrpcHost();

  // service gRPC transport
  app.connectMicroservice<MicroserviceOptions>(host.apiGateway());
  app.connectMicroservice<MicroserviceOptions>(host.appointmentService());
  app.connectMicroservice<MicroserviceOptions>(host.authService());
  app.connectMicroservice<MicroserviceOptions>(host.billingService());
  app.connectMicroservice<MicroserviceOptions>(host.emrService());
  app.connectMicroservice<MicroserviceOptions>(host.inventoryService());
  app.connectMicroservice<MicroserviceOptions>(host.notificationService());
  app.connectMicroservice<MicroserviceOptions>(host.pharmacyService());
  app.connectMicroservice<MicroserviceOptions>(host.staffService());
  app.connectMicroservice<MicroserviceOptions>(host.wardService());

  app.startAllMicroservices();

  const port = process.env.PORT ?? process.env.SERVICE_HTTP_PORT ?? 5000;
  await app.listen(port);
}
bootstrap();
