/*Среднее арифметическое*/

let digit1 = Number(prompt('First number'));
let digit2 = Number(prompt('Second number'));
let digit3 = Number(prompt('Third number'));
let digit4 = Number(prompt('Its almost done'));
let digit5 = Number(prompt('Last number'));
let result = (digit1 + digit2 + digit3 + digit4 + digit5) / 5


console.log(result);

/*Усложненный вариант */

let digit = prompt('Write your numbers', 123);

let sum = digit.split(",").reduce(function (a, b) { return a + +b }, 0) / digit.split(",").length;

console.log(sum);

