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