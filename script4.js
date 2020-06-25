/*Методы консоль*/

console.log('first method');
console.group('second method');
console.log('some data');
console.log('and');
console.log('another data');
console.groupEnd();
console.warn('Warning. This is third method.');
console.error('Fourth method');
console.info('It should be fifth method');

let i = 0;
console.time("Sixth method. While loop");
while (i < 1000000) {
  i++;
}
console.timeEnd("Sixth method. While loop");
 
console.time("For loop");
for (i = 0; i < 1000000; i++) {
}
console.timeEnd("For loop");