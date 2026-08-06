import { Module } from '@nestjs/common';
import { AuthDatabaseService } from './auth-database.service';

@Module({
  providers: [AuthDatabaseService],
})
export class AuthDatabaseModule {}
