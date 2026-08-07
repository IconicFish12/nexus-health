import { Module } from '@nestjs/common';
import { EmrDatabaseService } from './emr-database.service';

@Module({
  providers: [EmrDatabaseService],
  exports: [EmrDatabaseService],
})
export class EmrDatabaseModule {}
