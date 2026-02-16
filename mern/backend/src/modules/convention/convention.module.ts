import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConventionController } from './convention.controller';
import { ConventionService } from './convention.service';
import { Convention, ConventionSchema } from './convention.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Convention.name, schema: ConventionSchema }])],
  controllers: [ConventionController],
  providers: [ConventionService],
})
export class ConventionModule {}