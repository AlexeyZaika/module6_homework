/*
Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, 
начиная от первого и заканчивая вторым. Используйте setInterval.
*/
function range(a, b) {
  let current = a;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == b) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
range(5,15);