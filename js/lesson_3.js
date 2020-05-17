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
var table = Array(5);

for(var i = 0; i < table.length; i++){
  table[i] = Array(5);
}