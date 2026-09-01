import { NestFactory } from '@nestjs/core';
import { StaffServiceModule } from './staff-service.module';

async function bootstrap() {
  const app = await NestFactory.create(StaffServiceModule);
  await app.listen(process.env.SERVICE_HTTP_PORT ?? 5008);
}
bootstrap();
