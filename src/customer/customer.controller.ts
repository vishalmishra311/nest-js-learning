import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customerDto } from './dto/create-customer.dto';
import { log } from 'console';

@Controller('customer')
export class CustomerController {

    constructor(private readonly customerService:CustomerService){

    }


    @Get()
    getCustomer(){
        return this.customerService.getAllCustomerData()
    }

    @Post()
    addCustomer(@Body() createCustomerControllerDTO:customerDto){
     
        
        return this.customerService.addCustomer(createCustomerControllerDTO)
    }
}
