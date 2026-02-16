import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BibleStudyController } from './bible-study.controller';
import { BibleStudyService } from './bible-study.service';
import { BibleStudy, BibleStudySchema } from './bible-study.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: BibleStudy.name, schema: BibleStudySchema }])],
  controllers: [BibleStudyController],
  providers: [BibleStudyService],
})
export class BibleStudyModule {}