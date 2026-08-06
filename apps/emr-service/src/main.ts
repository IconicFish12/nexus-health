import { NestFactory } from '@nestjs/core';
import { EmrServiceModule } from './emr-service.module';

async function bootstrap() {
  const app = await NestFactory.create(EmrServiceModule);
  await app.listen(process.env.SERVICE_HTTP_PORT ?? 5004);
}
bootstrap();
