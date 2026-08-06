import { Module } from '@nestjs/common';
import { WardDatabaseService } from './ward-database.service.ts';

@Module({
  providers: [WardDatabaseService]
})
export class WardDatabaseModule {}
