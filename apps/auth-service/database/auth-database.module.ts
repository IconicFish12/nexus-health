import { Module } from '@nestjs/common';
import { AuthDatabaseService } from './auth-database.service.ts';

@Module({
  providers: [AuthDatabaseService]
})
export class AuthDatabaseModule {}
