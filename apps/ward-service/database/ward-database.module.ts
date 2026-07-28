import { Module } from '@nestjs/common';
import { WardDatabaseService } from './ward-database.service';

@Module({
  providers: [WardDatabaseService]
})
export class WardDatabaseModule {}
