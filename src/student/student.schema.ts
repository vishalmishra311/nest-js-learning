
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema({timestamps:true})
export class Student {
  @Prop({required:true})
  name!: string;

  @Prop()
  age!: number;

  @Prop()
  email?: string;// optional
}

export const StudentSchema = SchemaFactory.createForClass(Student);
