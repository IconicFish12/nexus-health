import { NestFactory } from '@nestjs/core';
import { AppointmentServiceModule } from './appointment-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AppointmentServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
