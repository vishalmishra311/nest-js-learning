import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument , Schema as mongooseSchema } from 'mongoose';
import { Profile } from './profile.schema';

export type ProfileDocument = HydratedDocument<Employee>;
@Schema()
export class Employee {

  @Prop()
  name: number;

  @Prop({ type:mongooseSchema.Types.ObjectId, ref:'Profile'})
  profile:Profile
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);