import { Injectable, NotFoundException } from '@nestjs/common';
import { error, log } from 'console';
import { retry } from 'rxjs';

@Injectable()
export class StudentsService {
  public students = [
    {
      id: 1,
      name: "Vishal",
      age: 22,
      course: "Computer Science",
      marks: 85
    },
    {
      id: 2,
      name: "Rahul",
      age: 23,
      course: "Mechanical",
      marks: 78
    },
    {
      id: 3,
      name: "Sneha",
      age: 21,
      course: "Electrical",
      marks: 92
    },
    {
      id: 4,
      name: "Aman",
      age: 24,
      course: "Civil",
      marks: 74
    }

  ];

  getAllStudent() {
    return this.students;
  }

  getStudentById(id: number) {
    let student = this.students.find((student) => student.id == id)
    if (!student) {
      throw new NotFoundException("student not found")
    }
    return student
  }

  //post api
  createStudent(data: { name: string; age: number; course: string; marks: number }) {
    const newStudent = {
      id: Date.now(),
      ...data
    }
    this.students.push(newStudent)
    return {
      message: "student added",
      studentinfo: newStudent
    }
  }

  //put api updaye all data

  upadteStudent(id: number, data: { name: string; age: number; course: string; marks: number }) {

    const index = this.students.findIndex((s) => s.id == id)
    this.students[index] = { id, ...data }
    return {
      message: "student upadted successfully",
      studentinfo: this.students[index]
    }

  }


  //patch data
  updatePartialData(id: number, data: Partial<{ name: string; age: number; course: string; marks: number }>) {
    const student = this.students.find((s) => s.id == id)

    if (!student) {
      throw new NotFoundException('Student not found');
    }
    Object.assign(student, data)
    console.log(this.students)
    return student
  }

  //delete

  deleteStudent(id:number){
    const index = this.students.findIndex((s) => s.id == id)
    const delted = this.students.splice(index,1)
    return{
      message:"student deleted successfully",
      student:delted
    }
  }

}
