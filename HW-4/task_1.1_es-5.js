// es-5

'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
};

let newProduct1 = new Product('Товар 1', 100);
newProduct1.make25PercentDiscount();

console.log(newProduct1);