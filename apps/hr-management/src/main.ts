import { NestFactory } from '@nestjs/core';
import { HrManagementModule } from './hr-management.module';

async function bootstrap() {
  const app = await NestFactory.create(HrManagementModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
