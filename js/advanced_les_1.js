//пример различий работы переменных и объектов

// var simpleStr = "MyString";
//
// var objectStr = new String("some string object");
//
// function newLine(str) {
//   document.write(str + "<br/>");
//   document.write("============================<br/>");
// }
//
// newLine(simpleStr);
//
// newLine(objectStr);
//
// //добавить новые свойства и методы можно только объектам созданным через опратор new
// objectStr.customProperty = 123;
// document.write(objectStr.customProperty + "<br/>");
//
// //добавить свойство в переменную simpleStr невозможно
// simpleStr.customProperty2 = 123;
// //document.write(simpleStr.customProperty2);
//
//
// //////////////////////////////Конструкторы и прототипы///////////////////////////х////у/////й
//
// //Функция-конструктор - функция создает пустой объект и опр. его свойства и методы.
// //Функции-конструкторы - эквивалент типов данных(классов) в ООП
//
// //Конструктор Object()
// document.write('<hr/>');
//
// var point = new Object();
//
// point.x = 10;
// point.y = 15;
//
// document.write('Значение свойства x: ' + point.x + "<br/>");
// document.write('Значение свойства y: ' + point.y + "<br/>");
//
// //Конструктор Date()
// document.write('<hr/>');
//
// var myDate = new Date();
//
// document.write('Текущая дата и время: ' + myDate + "<br/>");
//
// //Конструктор Array()
// document.write('<hr/>');
//
// var a = Array();
//
// var b = Array(1, 2, 3, 5, 7);
//
// document.write(b + '<br/>');
//
// var c = Array(10);
// document.write(c + '<br/>');
//
//
//
// //Конструктор String()
// document.write('<hr/>');
//
// var simpleStr = 'MyString';
//
// var objectStr = new String('some string object');
//
// function  newLine(str) {
//   document.write(str + '<br/>');
//   document.write('<hr/>');
// }
//
// newLine(simpleStr);
// newLine(objectStr);
//
// //добавлять новые свойства и методы можно только к объектам созданным через оператор NEW
// objectStr.customProperty = 123;
// document.write(objectStr.customProperty + '<br/>');
//
// //ДОБАВИТЬ СВОЙСТВО В simpleStr (тому що это переменная а не объект) НЕВОЗМОЖНО!!!
// simpleStr.customProperty2 = 1234;
// document.write(simpleStr.customProperty2);
// //undefined потому что переменную с просто строковым значением в отличие от переменной типа
// //объект нельзя расширять. При этом при обращении к простой переменной типа строка, целочисленной итд,
// //интерпретатор временно превращает эту переменную в переменную типа объект.
// // (добавление литерала временно преобразуется в ОБЪЕКТ!)
//
//
//
// //Конструктор Function()
// // document.write('<hr/>');
// //
// // var func = new Function ('x', 'y', 'return x + y;');
// // // в конструкторе function последний параметр - тело функции, все остальное - аргументы функции.
// // var result = func(10, 25);
// //
// // alert('результат выполнения функции: ' + result);
// //
// // var func2 = new Function("alert('hello pidr!')");
// // func2();
//
//
//
//
// ////////////////////пользовательские конструкторы///////////////////////
//
// //пользовательский конструктор. функция-конструктор для создания объектов Point
//
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
//
//
// //создание трёх экземпляров класса Point
//
// var leftTop = new Point(0, 0);
// var topPoint = new Point(15, 30);
// var rightBottom = new Point(30, 30)
//
// //Вывод координат созданных точек
//
// document.write('Координаты треугольника: <br/><br/>');
// document.write('Координаты первой точки: ' + leftTop.x + ', ' + leftTop.y + '<br/>');
// document.write('Координаты второй точки: ' + topPoint.x + ', ' + topPoint.y + '<br/>');
// document.write('Координаты третьей точки: ' + rightBottom.x + ', ' + rightBottom.y + '<br/>');
//
//
//
// ///////////пользовательский конструктор 2/////////
// document.write('<hr/>');
//
// function Human(name) {
//   //свойство
//   this.firstName = name;
//
//   //метод
//   this.sayHello = function() {
//     document.write('Hello, my name is ' + this.firstName + '<br/>');
//   }
// }
//
// //создание двух экземпляров типа Human
//
// var h = new Human('Kekovka');
// var l = new Human('Loh');
//
// //вызов метода sayHello() на созданных объектах
//
// h.sayHello();
// l.sayHello();
//
//
// ///////////пользовательский конструктор 3/////////
//
// var Friend = function (mood) {
//   this.mood = mood;
//
//   if(mood === 'nice') {
//     this.talk = function () {
//       alert('hello whatsup?');
//     };
//   }
//   else if(mood === 'bad') {
//     this.talk = function() {
//       alert('sry. gtfo..');
//     };
//   }
//   else {
//     this.talk = function () {
//       alert('hi');
//     };
//   }
// }
//
// // var friendMood = prompt('Type mood (nice/bad): ');
// // var Lol = new Friend(friendMood);
// //
// // Lol.talk();
//
// //////////Свойства и методы//////////
//
// function Pnt(x, y) {
//   //свойства экземпляра
//   this.x = x;
//   this.y = y;
//
//   //метод экземпляра
//   this.print = function () {
//     document.write('(' + this.x + ', ' + this.y + ')<br/>');
//   }
// }
//
// //свойство функции конструктора (аналог статических свойств)
// Pnt.MaxPointCount = 100;
// //метод функции-конструктора (аналог статического метода)
// Pnt.getOrigin = function () {
//     return new Pnt(0, 0)
// }
//
//
// //создание экземпляров
// var p1 = new Pnt(100, 200);
//
// p1.x = 300;
// p1.y = 400;
// p1.print();
//
//
// var p2 = new Pnt(15,45);
// p2.print();
//
// Pnt.MaxPointCount = 10;
// Pnt.getOrigin().print();
//
//
// //////////////////////////////ПРОТОТИПЫ///////////////////////
// document.write('<hr/>');
//
//
// // #1
// function Rectangle(w, h) {
//   //свойства
//   this.width = w;
//   this.height = h;
//
//   //метод - !!!при создании объектов, этот метод будет дублироваться!!!
//   this.getArea = function () {
//     return this.width * this.height;
//   }
// }
//
// var rect = new Rectangle(500, 300);
// document.write('площадь прямоугольника ' + rect.getArea() + '<br/>');
//
//
// // #2 (+ прототип)
//
// function Rectangle2(x, y) {
//   this.width = x;
//   this.height = y;
// }
// //матод прототипа будет доступен каждому экземпляру, но храниться будет в прототипе
// Rectangle2.prototype.getArea = function () {
//   return this.width * this.height;
// }
//
// var rect2 = new Rectangle2(20, 25);
// document.write('площадь прямоугольника ' + rect2.getArea() + '<br/><br/>' );
//
//
//
// // #3 (+ прототип)
//
// function Rectangle3(x, y) {
//   this.width = x;
//   this.height = y;
// }
//
// Rectangle3.prototype.getArea = function(){
//   return this.width * this.height;
// }
//
// //свойство прототипа, будет доступно всем экземплярам
// Rectangle3.prototype.name = 'Rectangle';
//
// var rect1 = new Rectangle3(50, 5);
// var rect2 = new Rectangle3(50, 10);
//
// document.write('площадь прямоугольника 1 - ' + rect1.getArea() + '<br/>');
// document.write('площадь прямоугольника 2 - ' + rect2.getArea() + '<br/><br/>');
//
//
// document.write('имя прямоугольника 1 - ' + rect1.name + '<br/>');
// document.write('имя прямоугольника 2 - ' + rect2.name + '<br/><br/>');
//
// rect1.name = 'test';
// //Rectangle3.prototype.name = 'HUI'
//
//
// document.write('После смены имени объекта rect1 <br/>');
// document.write('имя прямоугольника 1 - ' + rect1.name + '<br/>'); //значение из прототипа перекрыто новым значением на самом экземпляре объекта
// document.write('имя прямоугольника 2 - ' + rect2.name + '<br/><br/>'); //значение берется из прототипа
//
// document.write('<hr/>');
//
//
//
// ///////////Прототипы. Свойство CONSTRUCTOR////////////////
//
// var myArray = new Array(10);
// var myDate = new Date();
// var myString = new String('Some string value');
// var myObj = new Object();
// var myFunc = new Function('x', 'y', 'return x + y;');
//
// var myCtor = function (x, y) {
//   this.x = x;
//   this.y = y;
// }
//
// var myCtorObject = new myCtor(12, 3);
//
// function showCtor(obj, name) {
//   document.write('Конструктор объекта ' + name + ' это ' + obj.constructor + '<br/>');
// }
//
// document.write('=====================================================Значения кострукторов=====================================================<br/>');
// showCtor(myArray, 'myArray');
// showCtor(myDate, 'myDate');
// showCtor(myString, 'myString');
// showCtor(myObj, 'myObj');
// showCtor(myFunc, 'myFunc');
// showCtor(myCtorObject, 'myCtorObject');
// document.write('===============================================================================================================================<br/>');
//
// var someNewObject = new myDate.constructor(); //создание объекта конструктором, который создал myDate!!!!
// document.write('Значение объекта someNewObject: ' + someNewObject);





//////////////////////////////Методы прототипа Object///////////////////////
// document.write('<hr/>');

/////////////////////////////////метод toString - объект в строковое представление
function Rectangle4(w, h) {
  this.width = w;
  this.height = h;
}

Rectangle4.prototype.getArea = function() {
  return this.width * this.height;
}

//переопределение метода toString из Object
Rectangle4.prototype.toString = function () {
  return 'Прямоугольник W: ' + this.width + ' H: ' + this.height;
}

var rect1 = new Rectangle4(100, 200);
var rect2 = new Rectangle4(400, 300);

document.write(rect1 + '<br/>');
document.write(rect2.toString() + '<br/>');



document.write('<hr/>');

/////////////////////////////////метод valueOf
function Rectangle5(w, h) {
  this.width = w;
  this.height = h;
}

Rectangle5.prototype.getArea = function () {
  return this.width * this.height
}

//переопределение метода toString из Object
Rectangle5.prototype.toString = function () {
  return "Прямоугольник W: " + this.width + " H: " + this.height
}

//переопределение метода  valueOf из Object
Rectangle5.prototype.valueOf = function () {
  return this.getArea();
}

var rect1 = new Rectangle5(100, 200);
var rect2 = new Rectangle5(400, 300);

document.write(rect1 + "<br/>"); //по умолчанию вызывается метод valueOf
document.write(rect2.toString() + "<br/>");

document.write("<br/>values<br/>");

document.write(rect1.valueOf() + "<br/>");
document.write(rect2.valueOf() + "<br/>");
document.write(rect1 + rect2);


document.write('<hr/>');

/////////////////////////////////метод hasOwnProperty
function Rectangle6(w, h) {
  this.width = w;
  this.height = h;
}

Rectangle6.prototype.getArea = function () {
  return this.width * this.height
}

Rectangle6.prototype.name = 'Rectangle666';

var rect1 = new Rectangle6(100, 200);

//hasOwnProperty метод из Object с его помощью можно проверить существует ли свойство у конкретного объекта
document.write("hasOwnProperty('width') " + rect1.hasOwnProperty("width") + "<br/>");
document.write("hasOwnProperty('name') " + rect1.hasOwnProperty("name") + "<br/>");

//с помощью ключевого слова in можно проверить наличие свойства и в объекте и в прототипах
document.write("'width' in rect1 " + ("width" in rect1) + "<br/>");
document.write("'name' in rect1 " + ("name" in rect1) + "<br/>");



document.write('<hr/>');
/////////////////////////////////метод equals_method_before
function Rectangle7(w, h) {
  this.width = w;
  this.height = h;
}

Rectangle7.prototype.getArea = function () {
  return this.width * this.height
}

//переопределение метода toString из Object
Rectangle7.prototype.toString = function () {
  return "Прямоугольник W: " + this.width + " H: " + this.height
}

//переопределение метода  valueOf из Object
Rectangle7.prototype.valueOf = function () {
  return this.getArea();
}

// объекты имеют одинаковые значения!!!
var rect1 = new Rectangle7(100, 200);
var rect2 = new Rectangle7(100, 200);

// оператор сравнения проверяет равенство ссылок(!!!) а не равенство значений свойств объектов
var res = rect1 == rect2;
document.write("rect1 == rect2 -> " + res);

var rect3 = rect1; //rect1 и rect3 ссылки на один и тот же объект в памяти
res = rect3 == rect1;
document.write("<br/><br/>rect3 == rect1 -> " + res);



document.write('<hr/>');
/////////////////////////////////метод equals_method_after
function Rectangle8(w, h) {
  this.width = w;
  this.height = h;
}

Rectangle8.prototype.getArea = function () {
  return this.width * this.height
}

//переопределение метода toString из Object
Rectangle8.prototype.toString = function () {
  return "Прямоугольник W: " + this.width + " H: " + this.height
}

//переопределение метода  valueOf из Object
Rectangle8.prototype.valueOf = function () {
  return this.getArea();
}

//метод для проверки равенства объектов

Rectangle8.prototype.equals = function (otherObj) {
  if (this.width === otherObj.width && this.height === otherObj.height) {
    return true;
  }
  return false;
}

// объекты имеют одинаковые значения!!!
var rect1 = new Rectangle8(100, 200);
var rect2 = new Rectangle8(100, 200);

// проверка равенства объектов с помощью метода equals
var res = rect1.equals(rect2);
document.write("rect1 == rect2 -> " + res);

var rect3 = rect1; //rect1 и rect3 ссылки на один и тот же объект в памяти
res = rect3 == rect1;
document.write("<br/><br/>rect3 == rect1 -> " + res);

document.write('<hr/>');


/////////////////////////////////метод compareTo
function Rectangle9(w, h) {
  this.width = w;
  this.height = h;
}

Rectangle9.prototype.getArea = function () {
  return this.width * this.height
}

//переопределение метода toString из Object
Rectangle9.prototype.toString = function () {
  return "Прямоугольник W: " + this.width + " H: " + this.height
}

//переопределение метода  valueOf из Object
Rectangle9.prototype.valueOf = function () {
  return this.getArea();
}

//метод для проверки равенства объектов

Rectangle9.prototype.equals = function (otherObj) {
  if (this.width === otherObj.width && this.height === otherObj.height) {
    return true;
  }
  return false;
}

// метод для сравнения объектов
// если текущий объект больше чем тот который передан в параметр - возвращаем значение > 0
// если текущий объект меньше чем тот который передан в параметр - возвращаем значение > 0
// если объекты равны возвращаем 0

Rectangle9.prototype.compareTo = function(otherObject) {
  if(this.getArea() > otherObject.getArea()) {
    return 1;
  }
  else {
    return 0;
  }

  return this.getArea() - otherObject.getArea();
}

// объекты имеют одинаковые значения!!!
var rect1 = new Rectangle9(100, 200);
var rect2 = new Rectangle9(100, 200);

//при наличии метода valueOf, который возвращает простое значение




document.write('<hr/>');


