import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DailyManna } from './daily-manna.schema';

@Injectable()
export class DailyMannaService {
  constructor(@InjectModel(DailyManna.name) private mannaModel: Model<DailyManna>) {}

  async getToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.mannaModel.findOne({ date: today });
  }

  async getByDate(date: Date) {
    return this.mannaModel.findOne({ date });
  }

  async getAll() {
    return this.mannaModel.find().sort({ date: -1 });
  }

  async create(data: Partial<DailyManna>) {
    return this.mannaModel.create(data);
  }
}
