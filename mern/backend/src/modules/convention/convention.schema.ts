import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Convention extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop()
  description: string;

  @Prop()
  registrationUrl: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const ConventionSchema = SchemaFactory.createForClass(Convention);