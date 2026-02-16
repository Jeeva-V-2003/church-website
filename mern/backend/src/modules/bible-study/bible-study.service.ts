import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BibleStudy } from './bible-study.schema';

@Injectable()
export class BibleStudyService {
  constructor(@InjectModel(BibleStudy.name) private bibleStudyModel: Model<BibleStudy>) {}

  async findAll(): Promise<BibleStudy[]> {
    return this.bibleStudyModel.find().sort({ createdAt: -1 }).exec();
  }

  async findLatest(): Promise<BibleStudy> {
    return this.bibleStudyModel.findOne().sort({ createdAt: -1 }).exec();
  }

  async create(createBibleStudyDto: any): Promise<BibleStudy> {
    const createdBibleStudy = new this.bibleStudyModel(createBibleStudyDto);
    return createdBibleStudy.save();
  }
}