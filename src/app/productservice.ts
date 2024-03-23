import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    
    constructor() {


    }

    // constructor(private loggerService: LoggerService){

    // }

    getProducts() : Product[]{
        return [
            {name: "Keyboard", quantity: 10},
            {name: "Mouse", quantity: 15},
            {name: "Pencil", quantity: 25},
        ];
    }
}

export class Product {
    name: string;
    quantity: number;
}

export class LoggerService {
    log() {
        console.log("loggging");
    }
}