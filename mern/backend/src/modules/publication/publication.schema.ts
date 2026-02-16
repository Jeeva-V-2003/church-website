import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Publication extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: string; // 'magazine', 'booklet', 'tract'

  @Prop()
  description: string;

  @Prop()
  downloadUrl: string;

  @Prop()
  coverImage: string;

  @Prop({ default: Date.now })
  publishedDate: Date;
}

export const PublicationSchema = SchemaFactory.createForClass(Publication);