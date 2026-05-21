import { Module } from '@nestjs/common';
import { Student, StudentSchema } from './student.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
     imports: [MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }])],
})
export class StudentModule {}
