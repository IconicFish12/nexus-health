import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ApiGatewayModule,
    {
      transport: Transport.NATS,
      options: {
        name: 'api-gateway',
        debug: true,
      },
    },
  );
  const port = process.env.PORT ?? process.env.SERVICE_HTTP_PORT ?? 3000;
  await app.listen(port);
}
bootstrap();
