import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Magazine } from './magazine.schema';

@Injectable()
export class MagazineService {
  constructor(@InjectModel(Magazine.name) private magazineModel: Model<Magazine>) {}

  async getAll() {
    return this.magazineModel.find({ isPublished: true }).sort({ year: -1, month: -1 });
  }

  async getLatest() {
    return this.magazineModel.findOne({ isPublished: true }).sort({ year: -1, month: -1 });
  }

  async getById(id: string) {
    return this.magazineModel.findById(id);
  }

  async create(data: Partial<Magazine>) {
    return this.magazineModel.create(data);
  }
}
