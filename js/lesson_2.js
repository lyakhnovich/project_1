// var a = 8,
//   b = 15;
// var sum = 0;
//
// for(var x = 0; x < b; x++) {
//   if (x > a && x < b) {
//     sum = sum + x;
//   }
// }
// document.write('сумма всех чисел в промежутке от ' + a + ' до ' + b + ' равна - ' + sum + '</br></br>');
//
//
// var result = '';
// for(var x = a; x < b; x++){
//
//   if(x % 2 == 1){
//     result += 'нечетное число ' + x + '</br>';
//   }
// }
// document.write(result + '</br>');
//
//
//
// var counter  = prompt('введите число'),
//   factorial = 1;
//
// do {
//   if(counter == 0){
//     factorial = 1;
//     break;
//   }
//   factorial = factorial * counter;
//   counter = counter - 1;
// }
// while(counter > 0);
//
// document.write('количество вариантов - ' + factorial);
//
//
//

//прямоугольник
for(var i = 0; i < 8; i++){

  for(var j = 0; j < 8; j++){
    document.write('&nbsp' + ' * ' + '&nbsp');
  }
  document.write('</br>');
}
document.write('</br>');



//прямоугольный треугольник
var counter = 0;
for(var i = 0; i < 8; i++){

  for(var j = 0; j < counter; j++){

    document.write('&nbsp' + ' * ' + '&nbsp');
  }
  counter++;
  document.write('</br>');
}
document.write('</br>');



//равносторонний треугольник
var lines = 7
var star, space;
var stars, spaces;

for (var ActualLine = 0; ActualLine <= lines; ActualLine++){
  space = lines - ActualLine;
  spaces = '&nbsp';

  for(var i = 0; i < space; i++){
    spaces += ' &nbsp ';
  }

  star = ActualLine  - 1;
  stars = ' ';

  for(var i = 0; i < star; i++){
    stars += '&nbsp' + ' * ';
  }
  document.write(spaces + stars+'</br>');
}



//ромб



var lines = 10
var highStar, lowStar, highSpace, lowSpace;
var stars, spaces;

var middle = lines/2;


for (var ActualLine = 1; ActualLine <= lines; ActualLine++){
  highSpace = lines - ActualLine;
  spaces = '';


  lowSpace = ActualLine  - 1;


  for(var i = 1; i < highSpace; i++){

    if (highSpace >= middle - 1) {
      spaces += ' &nbsp';
     // alert(highSpace + ' ' + lowSpace + ' ' +  middle + ' ' + spaces);
    }
  }

  for(var k = 1; k < lowSpace - 1; k++){

    if (lowSpace > middle) {
      spaces += ' &nbsp ';
    }
  }


  highStar = ActualLine  - 1;
  lowStar = lines - ActualLine;
  stars = ' ';


  //alert(highStar + ' ' + lowStar + ' ' + highSpace + ' ' + lowSpace);

  for(var i = 0; i < highStar; i++){
    if(highStar < middle){
    stars += '&nbsp' + ' * ';
    }
  }

  for(var i = 0; i <= lowStar; i++){
    if(lowStar < middle ){
      stars += '&nbsp' + ' * ';
    }
  }
  document.write(spaces + stars+'</br>');
}
