//Массивы

//вывод наибольшего значения массива, наименьшего значения массива, общей суммы элементов, среднего
// арифметического всех элементов, нечетных значений
var massa = [1, 4, 34, 101, 234, 32, 45, 2, 89, 25, 65];

document.write(massa + '</br>');
document.write('максимальный элемент массива - ' + Math.max.apply(null, massa) + '</br>');
document.write('минимальный элемент массива - ' + Math.min.apply(null, massa) + '</br><hr>');

var sum = 0;
for(var j = 0; j < massa.length; j++) {
   sum += massa[j];
}
document.write('сумма элементов массива: ' + sum + '</br>');
document.write('среднее значение элементов массива: ' + sum/massa.length + '</br>');
document.write('<hr>');


document.write('все нечетные элементы массива:</br>');
for(var i = 0; i <= massa.length; i++) {
  if(massa[i] % 2 == 1) {
    document.write(massa[i] + '</br>');
  } else {
    continue;
  }
}
document.write('<hr>');


//многомерка

//двумерный массив размерностью 5х5 с произвольными целочисленными значениями. По главной ддиагонали все числа со знаком минус
//заменяются на 0, со знаком + на 1.
var table = Array(5);

for(var i = 0; i < table.length; i++){
  table[i] = Array(5);
}

table[0][0] = -11;
table[0][1] = 12;
table[0][2] = -28;
table[0][3] = -14;
table[0][4] = 39;

table[1][0] = -38;
table[1][1] = 70;
table[1][2] = -68;
table[1][3] = 87;
table[1][4] = -70;

table[2][0] = 74;
table[2][1] = 44;
table[2][2] = -99;
table[2][3] = 59;
table[2][4] = -68;

table[3][0] = 48;
table[3][1] = -34;
table[3][2] = -99;
table[3][3] = 34;
table[3][4] = -33;

table[4][0] = 48;
table[4][1] = 37;
table[4][2] = -88;
table[4][3] = 84;
table[4][4] = -54;

for(var row = 0; row < table.length; row++) {
  for(var col = 0; col < table.length; col++) {

    if(row == col) {
      if (table[row][col] > 0) {
        table[row][col] = 1
      }
      else if(table[row][col] < 0) {
        table[row][col] = 0;
      }
    }

    document.write(table[row][col] + ' ');
  }
  document.write('</br>');
}


