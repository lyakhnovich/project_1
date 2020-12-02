//Функции
//Создание функций сложения, вычитания, умножения, деления(с проверкой деления на нулик)
// function Add(x, y) {
//   var result = +x + +y;
//   document.write(result + '</br>');
// };
//
// function Sub(x, y) {
//   var result = x - y;
//   document.write(result + '</br>');
// };
//
// function Mul(x, y) {
//   var result = x * y;
//   document.write(result + '</br>');
// };
//
// function Div(x, y) {
//   var result = x / y;
//   if (y == 0){
//     document.write('попытка деления на 0!');
//     return;
//   }
//   document.write(result + '</br>');
// };
//
// var x = prompt('введите операнд x'),
//   opr = prompt('введите арифметическую опрацию (+ - * /)'),
//   y = prompt('введите операнд y');
//
//
// if(opr == '+') {
//   document.write(x + ' + ' + y + ' = ');
//   Add(x, y);
//   document.write('</br>');
// };
//
// if(opr == '-') {
//   document.write(x + ' - ' + y + ' = ');
//   Sub(x, y);
//   document.write('</br>');
// };
//
// if(opr == '*') {
//   document.write(x + ' * ' + y + ' = ');
//   Mul(x, y);
//   document.write('</br>');
// };
//
// if(opr == '/') {
//   document.write(x + ' / ' + y + ' = ');
//   Div(x, y);
//   document.write('</br>');
// };

//функция принимающая на вход число. Определяет положительное или отрицательное число, является ли простым,
//делится ли на 2, 5, 3, 6, 9 без остатка.
function gadalka(x) {

  if (x > 0) {
    document.write(x + ' - положительное</br>');
  } else if (x == 0) {
    document.write('це нулик =)</br>');
  } else {
    document.write(x + ' - отрицательное</br>');
  }

  var result = true;
  for (var i = 2; i < x; i++) {
    var number = 0;

    if (x % i == 0) {
      result = false;
      break;
    }
  }

  if (x > 1 && result) {
    number = x + ' - простое число</br>';
  } else {
    number = x + ' - не является простым числом</br>';
  }
  document.write(number);

  if(x % 2 == 0 || x % 5 == 0 || x % 3 == 0 || x % 6 == 0 || x % 9 == 0) {
    document.write('число ' + x + ' - делится на 2 или 5 или 3 или 6 или 9 без остатка');
  } else {
    document.write('число ' + x + ' - НЕ делится на 2 или 5 или 3 или 6 или 9 без остатка');
  }
}

var x = prompt('введите число', '0');
gadalka(x);