import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './events.schema';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

  async getUpcoming() {
    const now = new Date();
    return this.eventModel.find({ date: { $gte: now } }).sort({ date: 1 });
  }

  async getPast() {
    const now = new Date();
    return this.eventModel.find({ date: { $lt: now } }).sort({ date: -1 });
  }

  async getAll() {
    return this.eventModel.find().sort({ date: -1 });
  }

  async getById(id: string) {
    return this.eventModel.findById(id);
  }

  async create(data: Partial<Event>) {
    return this.eventModel.create(data);
  }
}
