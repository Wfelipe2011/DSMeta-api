import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { SellersModule } from './module/sellers/sellers.module';

@Module({
  imports: [DatabaseModule, SellersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
