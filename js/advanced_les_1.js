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



//Конструктор String()
document.write('<hr/>');

var simpleStr = 'MyString';

var objectStr = new String('some string object');

function  newLine(str) {
  document.write(str + '<br/>');
  document.write('<hr/>');
}

newLine(simpleStr);
newLine(objectStr);

//добавлять новые свойства и методы можно только к объектам созданным через оператор NEW
objectStr.customProperty = 123;
document.write(objectStr.customProperty + '<br/>');

//ДОБАВИТЬ СВОЙСТВО В simpleStr (тому що это переменная а не объект) НЕВОЗМОЖНО!!!
simpleStr.customProperty2 = 1234;
document.write(simpleStr.customProperty2);
//undefined потому что переменную с просто строковым значением в отличие от переменной типа
//объект нельзя расширять. При этом при обращении к простой переменной типа строка, целочисленной итд,
//интерпретатор временно превращает эту переменную в переменную типа объект.
// (добавление литерала временно преобразуется в ОБЪЕКТ!)



//Конструктор Function()
document.write('<hr/>');

var func = new Function ('x', 'y', 'return x + y;');
// в конструкторе function последний параметр - тело функции, все остальное - аргументы функции.
var result = func(10, 25);

alert('результат выполнения функции: ' + result);

var func2 = new Function("alert('hello pidr!')");
func2();




////////////////////пользовательские конструкторы///////////////////




