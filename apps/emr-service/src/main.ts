import { NestFactory } from '@nestjs/core';
import { EmrServiceModule } from './emr-service.module.ts';

async function bootstrap() {
  const app = await NestFactory.create(EmrServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
