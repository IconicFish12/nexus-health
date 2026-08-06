import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module.ts';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
