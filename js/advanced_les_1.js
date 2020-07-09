//пример различий работы переменных и объектов

var simpleStr = "MyString";

var objectStr = new String("some string object");

function newLine(str) {
  document.write(str + "<br/>");
  document.write("============================<br/>");
}

newLine(simpleStr);

newLine(objectStr);

//добавить новые свойства и методы можно только объектам созданным через опратор new
objectStr.customProperty = 123;
document.write(objectStr.customProperty + "<br/>");

//добавить свойство в переменную simpleStr невозможно
simpleStr.customProperty2 = 123;
//document.write(simpleStr.customProperty2);


//////////////////////////////Конструкторы и прототипы///////////////////////////х////у/////й

//Конструктор Object()
document.write('<hr/>');

var point = new Object();

point.x = 10;
point.y = 15;

document.write('Значение свойства x: ' + point.x + "<br/>");
document.write('Значение свойства y: ' + point.y + "<br/>");

//Конструктор Date()
document.write('<hr/>');

var myDate = new Date();

document.write('Текущая дата и время: ' + myDate + "<br/>");

//Конструктор Array()
document.write('<hr/>');

var a = Array();

var b = Array(1, 2, 3, 5, 7);

document.write(b + '<br/>');

var c = Array(10);
document.write(c + '<br/>');



//Конструктор Object()
document.write('<hr/>');
