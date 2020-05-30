const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
let discountInPercent = 15;
let reverse_discount = (100 - discountInPercent)/100;
products.forEach(goods => goods.price = goods.price * reverse_discount);
console.log(products);
