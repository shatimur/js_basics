/*1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию*/
'use strict'
let tempCel = prompt('Введите значение температуры по Цельсию: ');
let tempFhr = (9 / 5) * tempCel + 32;
alert(tempFhr);
