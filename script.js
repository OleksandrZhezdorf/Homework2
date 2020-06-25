/* Задача с угадыванием*/

let randomresult = Math.floor(Math.random()*10);
let result = prompt('Try to say the right number from 0 to 10');
console.log(randomresult);
console.log(result);
let num1 = Number(result);
let num2 = Number(randomresult);
console.log(num1 === num2);







