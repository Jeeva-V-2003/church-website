import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Magazine extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  month: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  coverImage: string;

  @Prop({ required: true })
  pdfUrl: string;

  @Prop([String])
  articles: string[];

  @Prop()
  description: string;

  @Prop({ default: true })
  isPublished: boolean;
}

export const MagazineSchema = SchemaFactory.createForClass(Magazine);
