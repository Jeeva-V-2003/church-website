import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Magazine, MagazineSchema } from './magazine.schema';
import { MagazineController } from './magazine.controller';
import { MagazineService } from './magazine.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Magazine.name, schema: MagazineSchema }])],
  controllers: [MagazineController],
  providers: [MagazineService],
})
export class MagazineModule {}
