/*возраст*/

let birthdate = prompt('Please, whrite the year when U was born');
console.group('age');
console.log(Math.abs(2020 - 1 - birthdate));
console.log('or');
console.log(2020 - birthdate);
console.groupEnd();