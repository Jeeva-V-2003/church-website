import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DailyMannaModule } from './modules/daily-manna/daily-manna.module';
import { MagazineModule } from './modules/magazine/magazine.module';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/lhmm'),
    DailyMannaModule,
    MagazineModule,
    EventsModule,
  ],
})
export class AppModule {}
