import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Convention } from './convention.schema';

@Injectable()
export class ConventionService {
  constructor(@InjectModel(Convention.name) private conventionModel: Model<Convention>) {}

  async findAll(): Promise<Convention[]> {
    return this.conventionModel.find().sort({ startDate: 1 }).exec();
  }

  async findUpcoming(): Promise<Convention[]> {
    const now = new Date();
    return this.conventionModel.find({ 
      startDate: { $gte: now },
      isActive: true 
    }).sort({ startDate: 1 }).exec();
  }

  async create(createConventionDto: any): Promise<Convention> {
    const createdConvention = new this.conventionModel(createConventionDto);
    return createdConvention.save();
  }
}