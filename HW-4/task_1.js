// let number = +prompt('Введите число в промежутке [0,999]');
let number = 123;

function numSplit(number) {

    if (number < 1000 && number >= 0 && Number.isInteger(number)) {
        let units = number % 10;
        let tens = (number % 100 - units) / 10;
        let hundreds = (number - tens * 10 - units) / 100;
        return {
            units: units,
            tens: tens,
            hundreds: hundreds,
        }
    } else {
        return 'Введенное значение не является числом в промежутке [0,999]';
    }
}

console.log(numSplit(number));