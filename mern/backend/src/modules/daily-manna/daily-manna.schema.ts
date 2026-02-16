import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class DailyManna extends Document {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  scripture: string;

  @Prop({ required: true })
  verse: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  prayer: string;

  @Prop()
  reflection: string;
}

export const DailyMannaSchema = SchemaFactory.createForClass(DailyManna);
