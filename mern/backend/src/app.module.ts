import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BibleStudyModule } from './modules/bible-study/bible-study.module';
import { PublicationModule } from './modules/publication/publication.module';
import { ConventionModule } from './modules/convention/convention.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/lhmm'),
    BibleStudyModule,
    PublicationModule,
    ConventionModule,
  ],
})
export class AppModule {}
