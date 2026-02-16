import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Event extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: Date;

  @Prop()
  time: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  image: string;

  @Prop()
  speaker: string;

  @Prop({ default: 'upcoming' })
  status: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
