import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const port = process.env.PORT ?? process.env.SERVICE_HTTP_PORT ?? 3000;
  await app.listen(port);
}
bootstrap();
