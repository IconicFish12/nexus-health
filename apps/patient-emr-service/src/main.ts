import { NestFactory } from '@nestjs/core';
import { PatientEmrServiceModule } from './patient-emr-service.module';

async function bootstrap() {
  const app = await NestFactory.create(PatientEmrServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
