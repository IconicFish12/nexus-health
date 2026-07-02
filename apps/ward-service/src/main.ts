import { NestFactory } from '@nestjs/core';
import { WardServiceModule } from './ward-service.module';

async function bootstrap() {
  const app = await NestFactory.create(WardServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
