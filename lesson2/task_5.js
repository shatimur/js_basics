/*
5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

function sum(m, n) {
    let tmp = m + n;
    return tmp;
}

function multiply(m, n) {
    let tmp = m * n;
    return tmp;
}

function difference(m,n) {
    let tmp = m - n;
    return tmp;
}

function division(m, n) {
    let tmp = m / n;
    return tmp;
}

function mathOperation(arg1, arg2, operation) {
    switch (String(operation)) {
        case '+' :
            return sum(arg1, arg2);
        case '-' :
            return difference(arg1, arg2);
        case '*' :
            return multiply(arg1, arg2);
        case '/' :
            return division(arg1, arg2);
        default:
            alert("Вы ошиблись, попробуйте ввести значения и оператор еще раз")
            break;
    }

}
let a = parseInt(prompt("Введите первое число: "));
let b = parseInt(prompt("Введите второе число: "));
let operator = prompt("Введите знак операции: ");

mathOperation(a, b, operator);