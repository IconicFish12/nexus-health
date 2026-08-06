import { NestFactory } from '@nestjs/core';
import { AppointmentServiceModule } from './appointment-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AppointmentServiceModule);
  const port = process.env.PORT ?? process.env.SERVICE_HTTP_PORT ?? 5002;
  await app.listen(port);
}
bootstrap();
