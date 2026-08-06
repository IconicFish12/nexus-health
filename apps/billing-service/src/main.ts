import { NestFactory } from '@nestjs/core';
import { BillingServiceModule } from './billing-service.module';

async function bootstrap() {
  const app = await NestFactory.create(BillingServiceModule);
  await app.listen(process.env.SERVICE_HTTP_PORT ?? 5003);
}
bootstrap();
