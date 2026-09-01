import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import type { MicroserviceOptions } from '@nestjs/microservices';
import type { INestApplication } from '@nestjs/common';
import { GrpcHost } from '@app/protobuf';
import { GrpcToHttpExceptionFilter } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(ApiGatewayModule);

  app.setGlobalPrefix('api', {
    exclude: ['health'],
  });
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new GrpcToHttpExceptionFilter());

  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || true,
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Nexus Healthcare System - API Gateway')
    .setDescription(
      'REST & gRPC API Gateway routing external client requests to backend microservices',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const host = new GrpcHost();
  app.connectMicroservice<MicroserviceOptions>(host.apiGateway());
  app.startAllMicroservices();

  const port = process.env.PORT ?? process.env.SERVICE_HTTP_PORT ?? 5000;
  await app.listen(port);
}

bootstrap();
