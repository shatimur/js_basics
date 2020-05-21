// let money_sum = parseInt(prompt('Сколько денег положить на Ваш счет в банке?: '))
let money_sum = 301
let last_digit = parseInt(money_sum % 10)
console.log(last_digit)
let rub_ending =''

switch (last_digit) {
    case 1:
        rub_ending = 'ль';
        break;
    case 2: 
    case 3:
    case 4:
        rub_ending = 'ля';
        break;
    default:
        rub_ending = 'лей';
        break;
}

console.log(`На ваш счет зачислено ${money_sum} руб${rub_ending}` )