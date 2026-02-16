import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DailyManna, DailyMannaSchema } from './daily-manna.schema';
import { DailyMannaController } from './daily-manna.controller';
import { DailyMannaService } from './daily-manna.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: DailyManna.name, schema: DailyMannaSchema }])],
  controllers: [DailyMannaController],
  providers: [DailyMannaService],
})
export class DailyMannaModule {}
