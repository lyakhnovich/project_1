//Объекты
// вроде бы хуйней хуйня, а в адвэнсд без ней нельзя

//объект "Документ" с методами заполнения и отображения документа.
// var docum = {
//   title: 'заголовок',
//   body: 'тело',
//   footer: 'подвал',
//   date: 'дата',
//
//   app: {
//     title: 'заголовок',
//     body: 'тело',
//     footer: 'подвал',
//     date: 'дата'
//   },
//
//   add: function () {
//     docum.title = prompt('введите заголовок', '');
//     docum.body = prompt('введите тело документа', '');
//     docum.footer = prompt('введите подвал документа', '');
//     docum.date = prompt('введите дату', '');
//   },
//
//   show: function () {
//     document.write(docum.title + '</br>');
//     document.write(docum.body + '</br>');
//     document.write(docum.footer + '</br>');
//     document.write(docum.date + '</br>');
//   }
// };
// docum.add()
// docum.show();


var person = {
  firstName: 'Kekovich',
  lastName: 'Virus',
  age: 30,
  occupation: 'rerired'
};

// Обращения к свойствам объекта
document.write('<p>' + person.firstName + ' ' + person.lastName);

//Изменение свойств объекта
person.age = 25;
document.write('<p>Age: ' + person.age + ' years old.')



document.write('<hr/>');
//ВЛОЖЕННЫЕ ОБЪЕКТЫ

var human = {
  firtName: 'Hlamidioz',
  secondName: 'Rodriguez',
  age: 27,
  //вложение
  occupation: {
    company: 'Joint Stock Ofes',
    position: 'standing near the cooler'
  }
};

document.write('<p>First Name: ' + human.firtName);
document.write('<p>Second Name: ' + human.secondName);
document.write('<p>Age: ' + human.age);
//обращение ко вложению
document.write('<p>Company: ' + human.occupation.company);
document.write('<p>Position: ' + human.occupation.position);


document.write('<hr/>');
//СОЗДАНИЕ ВЛОЖЕННЫХ ОБЪЕКТОВ ЧЕРЕЗ КОНСТРУКТОР

var human2 = new Object();

human2.firstName = 'Korona';
human2.secondName = 'Virus';
human2.age = 29;

// создание вложенного объекта

human2.occupation = new Object();

human2.occupation.company = 'Apple';
human2.occupation.position = 'Your lanch';

document.write('<p>First Name: ' + human2.firtName);
document.write('<p>Second Name: ' + human2.secondName);
document.write('<p>Age: ' + human2.age);
//обращение ко вложению
document.write('<p>Company: ' + human2.occupation.company);
document.write('<p>Position: ' + human2.occupation.position);


document.write('<hr/>');
// МЕТОДЫ (функция принадлежащая объекту) - в блоке инициализации объекта (внутри т е)

var human3 = {
  firstName: 'Alex',
  secondName: 'Loh',
  age: 23,
  occupation: "<img src = './img/MS.jpg' width = '152' height = '50'/>",

  // метод show() в блоке инициализации объекта

  show: function () {
    document.write('<p>First Name: ' + human3.firstName);
    document.write('<p>Second Name: ' + human3.secondName);
    document.write('<p>Age: ' + human3.age + '</br>');
    document.write(this.occupation + '</hr>');
  },
  // метод SayGoodbye() в блоке инициализации объекта
  SayGoodbye: function (occupation) {
    this.occupation = occupation;
  }
}

human3.show();
human3.SayGoodbye("<img src = './img/mak.jpg' width = '152' height = '100'/>");
human3.show();



document.write('<hr/>');
// PANELKA - создание методов за блоком инициализации объекта

var builder = new Object();

builder.createFirstFloor = function () {
  document.write("<img src = './img/first_floor.jpg' /></br>");
};

builder.createFloor = function () {
  document.write("<img src = './img/another_floor.jpg'/></br>");
};

builder.createFloor2 = function () {
  document.write("<img src = './img/another_floor_2.jpg'/></br>");
};

builder.createFloor3 = function () {
  document.write("<img src = './img/another_floor_3.jpg' /></br>");
};

// строим панельку
builder.createFloor();
builder.createFloor2();
builder.createFloor2();
builder.createFloor3();
builder.createFloor2();
builder.createFloor2();
builder.createFloor3();
builder.createFloor2();
builder.createFloor();
builder.createFirstFloor();

/////////////////////////////////////////////////////////////////////
document.write('<hr/>');
// FOR IN - используется для перебора элементов массива или

var house = {
  anotherFloor: "<img src = './img/another_floor.jpg'/></br>",
  anotherFloor2: "<img src = './img/another_floor_2.jpg'/></br>",
  anotherFloor3: "<img src = './img/another_floor_3.jpg'/></br>",
  firstFloor: "<img src = './img/first_floor.jpg'/></br>",
  address: "<p style = 'color: green'> UK. London. Muswell Hill. N10"
}

for (property in house) {
  document.write(property + ' - ' + house[property] + "<br/>");
}
// * ОБЪЕКТ NAVIGATOR дает информацию об используемом браузере


document.write('<hr/>');
// Проверка существования свойства
var house2 = {
  anotherFloor: "<img src = './img/another_floor.jpg'/></br>",
  anotherFloor2: "<img src = './img/another_floor_2.jpg'/></br>",
  anotherFloor3: "<img src = './img/another_floor_3.jpg'/></br>",
  firstFloor: "<img src = './img/first_floor.jpg'/></br>",
  address: "<p style = 'color: green'> UK. London. Muswell Hill. N10<hr/>"
}

  //строительство

  document.write(house2.anotherFloor);
  if ("anotherFloor3" in house2) { //TO: строим 3й вариант этажа
    document.write(house2["anotherFloor3"]);
  }
  else { // Иначе строим 2й вариант этажа
    document.write(house2["anotherFloor2"]);
  }
  document.write(house2.anotherFloor3);
  document.write(house2.firstFloor);


  /////////////////////////////////
document.write('<hr/>');
// Delete - способен удалять свойство в объекте (delete имя_объекта.имя_свойства)

var house3 = {
  anotherFloor: "<img src = './img/another_floor.jpg'/></br>",
  anotherFloor2: "<img src = './img/another_floor_2.jpg'/></br>",
  anotherFloor3: "<img src = './img/another_floor_3.jpg'/></br>",
  firstFloor: "<img src = './img/first_floor.jpg'/></br>"
}

if("firstFloor" in house3) {
  delete house3.firstFloor;
}

for (element in house3) {
  document.write(house3[element]);
}

/////////////////////////////////
document.write('<hr/>');
// delete в массивах

var array = new Array(0, 1, 2, 3, 4, 5, 6, 7);

document.write("<p>Массив до удаления: " + array.join(", "));
var index = prompt("Выберите массив для удаления: " + array.join(", "));

//УДОЛЕНИЕ по указанному массиву
delete array[index];

document.write("<p>Массив после удаления: " + array.join(", "));

/////////////////////////////////
document.write('<hr/>');
// Оператор with - создает новую область видимости и представляет свойства объекта "object" как локальные переменные (with - старье)

var house4 = {
  anotherFloor: "<img src = './img/another_floor.jpg'/></br>",
  anotherFloor2: "<img src = './img/another_floor_2.jpg'/></br>",
  anotherFloor3: "<img src = './img/another_floor_3.jpg'/></br>",
  firstFloor: "<img src = './img/first_floor.jpg'/></br>"
}

with (house4) {
  document.write(anotherFloor);
  document.write(anotherFloor2);
  document.write(anotherFloor3);
  document.write(firstFloor);
}







