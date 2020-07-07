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
// МЕТОДЫ (функция принадлежащая объекту)

var human3 = {
  firstName: 'Alex',
  secondName: 'Loh',
  age: 23,
  occupation: "<img src = 'C:\Users\lygy\Desktop\koronavirus\project_1\img.jpeg' width = '152' height = '38'/>",

  // метод show() в блоке инициализации объекта

  show: function () {
    document.write('<p>First Name: ' + human3.firtName);
    document.write('<p>Second Name: ' + human3.secondName);
    document.write('<p>Age: ' + human3.age);
    document.write(this.occupation + '</hr>');
  }
}










