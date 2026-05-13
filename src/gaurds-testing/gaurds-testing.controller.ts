import { Controller, Get, UseGuards } from '@nestjs/common';
import { get } from 'http';
import { GaurdsTestingService } from './gaurds-testing.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('gaurds-testing')
export class GaurdsTestingController {

    constructor(private readonly gaurdService:GaurdsTestingService){

    }

    @Get()
    @UseGuards(AuthGuard)
    getGaurdInfo(){
        return this.gaurdService.gaurdInterviewQuestion()
    }

}
