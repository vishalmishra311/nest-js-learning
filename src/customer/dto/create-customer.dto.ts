import { IsString } from "class-validator";

export class customerDto{
    @IsString()// from the package class validator class transformer
    name!:string;
    @IsString()
    age!:number
}