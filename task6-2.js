/*
Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, 
является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится 
сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
*/
function getTypeOfNumber(number) {
  if (number > 1000 || number === 0 || number === 1) {
    console.log('Данные не верны');
  } else if (number === 2 || number === 3) {
    console.log('Введено простое число');
  } else {
    let balance = 0;
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        balance++;
      }
    }
    if (balance > 0) {
      console.log('Введено не простое число');
    } else {
      console.log('Введено простое число');
    }
  }
}

getTypeOfNumber(17);