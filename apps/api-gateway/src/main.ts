import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';
import type { INestApplication } from '@nestjs/common';
import { apiGatewayProtobuf, appointmentServiceProtobuf } from '@app/protobuf';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(ApiGatewayModule);

  // GRPC transport
  app.connectMicroservice<MicroserviceOptions>(apiGatewayProtobuf);

  const port = process.env.PORT ?? process.env.SERVICE_HTTP_PORT ?? 5000;
  await app.listen(port);
}
bootstrap();
