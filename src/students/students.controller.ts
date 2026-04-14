import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {

    constructor(private readonly studentService:StudentsService){

    }

    @Get()
    getStudent(){
        return this.studentService.getAllStudent()
    }
 
    @Get(':id')
    getProductById(@Param('id') id:string){
        return (this.studentService.getStudentById(Number(id)))
    }

    @Post()
    createStudent(@Body() body:{name:string ; age:number ; course:string ; marks:number }){
        return this.studentService.createStudent(body)
    }

    @Put(':id')
    update(@Param('id') id:string , @Body() body:{name:string ; age:number ; course:string ; marks:number } ){
        return this.studentService.upadteStudent(Number(id),body)
    }

    @Patch(':id')
    patch(@Param('id') id:string , @Body() body: Partial<{name:string ; age:number ; course:string ; marks:number }> ){
        return this.studentService.updatePartialData(Number(id),body)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.studentService.deleteStudent(Number(id))
  }
}
