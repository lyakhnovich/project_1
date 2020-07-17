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

//Функция-конструктор - функция создает пустой объект и опр. его свойства и методы.
//Функции-конструкторы - эквивалент типов данных(классов) в ООП

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
// document.write('<hr/>');
//
// var func = new Function ('x', 'y', 'return x + y;');
// // в конструкторе function последний параметр - тело функции, все остальное - аргументы функции.
// var result = func(10, 25);
//
// alert('результат выполнения функции: ' + result);
//
// var func2 = new Function("alert('hello pidr!')");
// func2();




////////////////////пользовательские конструкторы///////////////////////

//пользовательский конструктор. функция-конструктор для создания объектов Point

function Point(x, y) {
  this.x = x;
  this.y = y;
}


//создание трёх экземпляров класса Point

var leftTop = new Point(0, 0);
var topPoint = new Point(15, 30);
var rightBottom = new Point(30, 30)

//Вывод координат созданных точек

document.write('Координаты треугольника: <br/><br/>');
document.write('Координаты первой точки: ' + leftTop.x + ', ' + leftTop.y + '<br/>');
document.write('Координаты второй точки: ' + topPoint.x + ', ' + topPoint.y + '<br/>');
document.write('Координаты третьей точки: ' + rightBottom.x + ', ' + rightBottom.y + '<br/>');



///////////пользовательский конструктор 2/////////
document.write('<hr/>');

function Human(name) {
  //свойство
  this.firstName = name;

  //метод
  this.sayHello = function() {
    document.write('Hello, my name is ' + this.firstName + '<br/>');
  }
}

//создание двух экземпляров типа Human

var h = new Human('Kekovka');
var l = new Human('Loh');

//вызов метода sayHello() на созданных объектах

h.sayHello();
l.sayHello();


///////////пользовательский конструктор 3/////////

var Friend = function (mood) {
  this.mood = mood;

  if(mood === 'nice') {
    this.talk = function () {
      alert('hello whatsup?');
    };
  }
  else if(mood === 'bad') {
    this.talk = function() {
      alert('sry. gtfo..');
    };
  }
  else {
    this.talk = function () {
      alert('hi');
    };
  }
}

// var friendMood = prompt('Type mood (nice/bad): ');
// var Lol = new Friend(friendMood);
//
// Lol.talk();

//////////Свойства и методы//////////

function Pnt(x, y) {
  //свойства экземпляра
  this.x = x;
  this.y = y;

  //метод экземпляра
  this.print = function () {
    document.write('(' + this.x + ', ' + this.y + ')<br/>');
  }
}

//свойство функции конструктора (аналог статических свойств)
Pnt.MaxPointCount = 100;
//метод функции-конструктора (аналог статического метода)
Pnt.getOrigin = function () {
    return new Pnt(0, 0)
}


//создание экземпляров
var p1 = new Pnt(100, 200);

p1.x = 300;
p1.y = 400;
p1.print();


var p2 = new Pnt(15,45);
p2.print();

Pnt.MaxPointCount = 10;
Pnt.getOrigin().print();


//////////////////////////////ПРОТОТИПЫ///////////////////////
document.write('<hr/>');


// #1
function Rectangle(w, h) {
  //свойства
  this.width = w;
  this.height = h;

  //метод - !!!при создании объектов, этот метод будет дублироваться!!!
  this.getArea = function () {
    return this.width * this.height;
  }
}

var rect = new Rectangle(500, 300);
document.write('площадь прямоугольника ' + rect.getArea() + '<br/>');


// #2 (+ прототип)

function Rectangle2(x, y) {
  this.width = x;
  this.height = y;
}
//матод прототипа будет доступен каждому экземпляру, но храниться будет в прототипе
Rectangle2.prototype.getArea = function () {
  return this.width * this.height;
}

var rect2 = new Rectangle2(20, 25);
document.write('площадь прямоугольника ' + rect2.getArea() + '<br/>' );



document.write('<hr/>');