import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('filter-test')
export class FilterTestController {

    @Get('hello/:id')
    @UseFilters(HttpExceptionFilter)
    getHello(@Param('id',ParseIntPipe) id:number){
        return(`Your id number is ${id}`)
    }
}
