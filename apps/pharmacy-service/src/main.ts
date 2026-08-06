import { NestFactory } from '@nestjs/core';
import { PharmacyServiceModule } from './pharmacy-service.module';

async function bootstrap() {
  const app = await NestFactory.create(PharmacyServiceModule);
  await app.listen(process.env.SERVICE_HTTP_PORT ?? 5007);
}
bootstrap();
