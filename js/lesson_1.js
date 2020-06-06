//

//простейшие операции с переменными
var x = 6,
  y =  15,
  z = 4;

x += y - x++ * z;
document.write(x + '</br>');

z = --x - y * 5;
document.write(z + '</br>');

y /= x + 5 % z;
document.write(y + '</br>');

z = x++ + y * 5;
document.write(z + '</br>');

x = y - x++ * z;
document.write(x + '</br></br>');

//вычисление среднего арифметического трех целочисленных значений
x = (x + y + z) / 3;
document.write(x + '</br></br>');


//вычисление объема и площади поверхности
var p = Math.PI,
  r,
  h,
  result;
h = prompt('высота цилиндра: ', '0');
r = prompt('радиус цилиндра: ', '0');

result = p * Math.pow(r, 2) * h;
document.write('Объём цилиндра высотой: ' + h + ', радиусом: ' + r + ' равен - ' + result + '</br>');

result = 2 * p  * r * h + 2 * p * Math.pow(r, 2);
document.write('Площадь поверхности цилиндра высотой: ' + h + ', радиусом: ' + r + ' равен - ' + result + '</br>');

result = 2 * p * r * (+r + +h);
document.write('Площадь поверхности цилиндра высотой: ' + h + ', радиусом: ' + r + ' равен - ' + result + '</br>');