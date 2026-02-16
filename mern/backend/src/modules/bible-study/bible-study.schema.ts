import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BibleStudy extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  scripture: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  lesson: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const BibleStudySchema = SchemaFactory.createForClass(BibleStudy);