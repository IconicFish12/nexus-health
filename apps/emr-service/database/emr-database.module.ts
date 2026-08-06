import { Module } from '@nestjs/common';
import { EmrDatabaseService } from './emr-database.service.ts';

@Module({
  providers: [EmrDatabaseService]
})
export class EmrDatabaseModule {}
