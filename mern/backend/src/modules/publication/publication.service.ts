import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Publication } from './publication.schema';

@Injectable()
export class PublicationService {
  constructor(@InjectModel(Publication.name) private publicationModel: Model<Publication>) {}

  async findAll(): Promise<Publication[]> {
    return this.publicationModel.find().sort({ publishedDate: -1 }).exec();
  }

  async findByType(type: string): Promise<Publication[]> {
    return this.publicationModel.find({ type }).sort({ publishedDate: -1 }).exec();
  }

  async findLatest(): Promise<Publication> {
    return this.publicationModel.findOne().sort({ publishedDate: -1 }).exec();
  }

  async create(createPublicationDto: any): Promise<Publication> {
    const createdPublication = new this.publicationModel(createPublicationDto);
    return createdPublication.save();
  }
}