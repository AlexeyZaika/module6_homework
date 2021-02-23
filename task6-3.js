/*
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также 
принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/
function callback (number1) {
  return function (number2) {
    return number1 + number2;
  }
}

let result = callback(4)(7);
console.log(result);