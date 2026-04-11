import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        { id: 1, name: "iPhone 13", price: 65000 },
        { id: 2, name: "Samsung Galaxy S21", price: 55000 },
        { id: 3, name: "OnePlus 11", price: 60000 },
        { id: 4, name: "Realme GT Neo 3", price: 35000 },
        { id: 5, name: "Xiaomi Redmi Note 12", price: 18000 }
    ];

    getAllProduct(){
        return this.products
    }

    getProductById(id:number){
        return this.products.find((product) => product.id==id)
    }




}
