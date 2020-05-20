/*4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return. */

function sum(m, n) {
    let tmp = m + n;
    return tmp;
}
alert("Сума равна " + sum(4, 5))

function multiply(m, n) {
    let tmp = m * n;
    return tmp;
}
alert("Произведение равно " + multiply(4,5))

function difference(m,n) {
    let tmp = m - n;
    return tmp;
}
alert("Разность равна " + difference(4,5))

function division(m, n) {
    let tmp = m / n;
    return tmp;
}
alert("Частное равно "+ division(4, 5))