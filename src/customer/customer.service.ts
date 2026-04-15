import { Injectable } from '@nestjs/common';
import {  customerDataInterface } from './interfaces/customer.interface';
import { customerDto } from './dto/create-customer.dto';
import { retry } from 'rxjs';

@Injectable()
export class CustomerService {
    private customersArrayInService:customerDataInterface[]=[]

    getAllCustomerData():customerDataInterface[]{
        return this.customersArrayInService
    }
    
    // now data will come so we need to validate that dto typedata should come 
    addCustomer(customerServiceDto:customerDto):customerDataInterface {
        const newCustomer:customerDataInterface={
            id:Date.now(),
            ...customerServiceDto
        }
        this.customersArrayInService.push(newCustomer)
        return newCustomer
    }

}
