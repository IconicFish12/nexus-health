import { NestFactory } from '@nestjs/core';
import { WardServiceModule } from './ward-service.module';

async function bootstrap() {
  const app = await NestFactory.create(WardServiceModule);
  await app.listen(process.env.SERVICE_HTTP_PORT ?? 5009);
}
bootstrap();
