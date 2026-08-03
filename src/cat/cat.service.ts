import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './cat.schema';

@Injectable()
export class CatService {

    constructor(@InjectModel(Cat.name) private catModel:Model<CatDocument>){
    }

    async createCat(data:Partial<Cat>):Promise<Cat>{
        const cat = new this.catModel(data);
        return cat.save()
    }
}
