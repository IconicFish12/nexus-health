import { NestFactory } from '@nestjs/core';
import { NotificationServiceModule } from './notification-service.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationServiceModule);
  const port = process.env.PORT ?? process.env.SERVICE_HTTP_PORT ?? 3006;
  await app.listen(port);
}
bootstrap();
