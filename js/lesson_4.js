

function Add(x, y) {
  var result = +x + +y;
  document.write(result + '</br>');
};

function Sub(x, y) {
  var result = x - y;
  document.write(result + '</br>');
};

function Mul(x, y) {
  var result = x * y;
  document.write(result + '</br>');
};

function Div(x, y) {
  var result = x / y;
  if (y == 0){
    document.write('попытка деления на 0!');
    return;
  }
  document.write(result + '</br>');
};

var x = prompt('введите операнд x'),
  opr = prompt('введите арифметическую опрацию (+ - * /)'),
  y = prompt('введите операнд y');


if(opr == '+') {
  document.write(x + ' + ' + y + ' = ');
  Add(x, y);
  document.write('</br>');
};

if(opr == '-') {
  document.write(x + ' - ' + y + ' = ');
  Sub(x, y);
  document.write('</br>');
};

if(opr == '*') {
  document.write(x + ' * ' + y + ' = ');
  Mul(x, y);
  document.write('</br>');
};

if(opr == '/') {
  document.write(x + ' / ' + y + ' = ');
  Div(x, y);
  document.write('</br>');
};