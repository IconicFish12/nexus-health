import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AuthServiceModule } from './auth-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  await app.listen(process.env.SERVICE_HTTP_PORT ?? 5002);
}
bootstrap();
