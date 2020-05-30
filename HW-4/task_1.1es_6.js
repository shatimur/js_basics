// es-6

'use strict';
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
}

const newProduct1 = new Product('Товар 1', 1000);
newProduct1.make25PercentDiscount();

console.log(newProduct1);