import { Body, Controller, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat, CatDocument } from './cat.schema';

@Controller('cat')
export class CatController {
    constructor(private readonly catService:CatService){

    }
    @Post()
    async addcat(@Body() data:Partial<Cat>){
        return this.catService.createCat(data)
    }
}
