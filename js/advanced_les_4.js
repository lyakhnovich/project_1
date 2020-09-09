// //--------------  01 Timers  --------------

// // 01.1 setTimeout. Планирует один запуск указанной функции через определенное количество миллисекунд

// setTimeout(showMessage, 4000);// запуск через 4 сек
//
// function showMessage() {
//   alert("Timeout 1");
// }
// setTimeout(function showMessage() {
//   alert("Timeout 2");
// }, 10000); // запуск через 10 сек


// // 01.2 setInterval

// let cnt = 0;
// function Count() {
//   cnt++;
//   let item = document.createElement('p');
//   item.innerHTML = cnt;
//   document.getElementById("output").appendChild(item);
// }
// //setInterval - планирование запуска указанной функции с заданным интервалом
// setInterval(Count, 1000);

// // 01.3 clearTimeout

// timer = window.setTimeout(showMessage, 5000);
//
// function showMessage() {
//   alert("privet");
// }
//
// function cancel() {
//   clearTimeout(timer);
// }

// // 01.4 clearInterval

// window.onload = function (){
//
//   let counter = 0,
//     intervalHandler;
//
//   function count() {
//     get("output").innerHTML = counter; // подставляем в структуру документа значение из переменной counter
//     counter++;
//   }
//
//   get("startButton").onclick = function () {
//     intervalHandler = setInterval(count, 5);
//   }
//
//   get("stopButton").onclick = function () {
//     clearInterval(intervalHandler);
//   }
// }
//
//   var get = function (id) {
//     return document.getElementById(id);
//   }

// //--------------  02 Location  --------------
// // 02.1 Location
//
// document.write('location = ' + document.location + '<br/>'); //весь url
// document.write('protocol = ' + document.location.protocol + '<br/>'); //протокол
// document.write('host = ' + document.location.host + '<br/>'); //имя хоста
// document.write('pathname = ' + document.location.pathname + '<br/>'); //путь
// document.write('search = ' + document.location.search + '<br/>'); //строка запроса
//
//
// // 02.2 UrlParsing. Функция для чтения данных, которые переданы при GET запросе (в адресной строке).
//
// function getQueryString() {
//
//   let args = {}; //пустой объект
//
//   let query = location.search.substring(1);     //получение строки запроса
//   let pairs = query.split("&");            //разделение строки по амперсанту
//
//   for (let i = 0; i < pairs.length; i++) {
//
//     let pos = pairs[i].indexOf('=');                //проверка пары "name=value"
//     if (pos === -1) {                                //если не найдено - пропустить
//       continue;
//     }
//
//     let argname = pairs[i].substring(0, pos);       //получение имени
//     let value = pairs[i].substring(pos + 1);        //получение значения
//
//     args[argname] = value;
//   }
//   return args;
// }
//
// document.getElementById("query").onclick =
// function  print() {
//   let args = getQueryString();
//   let e = document.createElement("p");
//
//   e.innerHTML = "Login " + args.login + "<br/>" + "Password " + args.password;
//
//   document.body.appendChild(e);
//
//   var test = 'qwerty';
//   test = test.substring(2);
//   alert(test);
// };


// //--------------  03 Navigator  --------------
// //03.1 Сведенья о браузере
//
// // объект Navigator поддерживает пять свойств, по которым можно определить версию браузера
// // appName - название веб браузера
// // appVersion - номер версии или другая информация о браузере
// // userAgent - строка, которую браузер посылает в HTTP заголовке USER-AGENT
// // appCodeName - кодовое имя браузера
// // platform - аппаратная платформа, на которой работает браузер

// var browserInfo = 'Сведениья о браузере \n';
// for (var propname in navigator) {
//   browserInfo += propname + ":" + navigator[propname] + '\n';
// }
// alert(browserInfo);


// //--------------  04 Windows  --------------
// // 04.1 Window Geometry. Определение параметров окна
//
// let geometry = {};
//
// if (window.screenLeft || window.screenLeft == 0) {                                                    // для IE
//   geometry.getWindowX = function () { return window.screenLeft; };
//   geometry.getWindowY = function () { return window.screenTop; };
// }
// else if (window.screenX || window.screenX == 0) {                                                     // для Firefox
//   geometry.getWindowY = function () { return window.screenX; };
//   geometry.getWindowY = function () { return window.screenY; };
// }
//
// if (window.innerWidth) {
//   geometry.gitViewportWidth = function () { return window.innerWidth; };
//   geometry.gitViewportHeight = function () { return window.innerHeight; };
// }
// else if (document.documentElement && document.documentElement.clientWidth) {                          // для IE6
//   geometry.gitViewportWidth = function () { return document.documentElement.clientWidth; };
//   geometry.gitViewportHeight = function () { return document.documentElement.clientHeight; };
// }
//
// document.write("X position " + geometry.getWindowX() + "<br/>");
// document.write("Y position " + geometry.getWindowX() + "<br/>");
// document.write("Height " + geometry.gitViewportHeight() + "<br/>");
// document.write("Width " + geometry.gitViewportWidth() + "<br/>");

// // 04.2 Screen. Определение высоты и ширины экрана
//
// window.onload = function () {
//   alert("Width " + screen.width + "; Height = " + screen.height);
// }

// // 04.03 WindowOpen
//
// window.onload = function () {
//
//   document.getElementById("openButton").onclick = openButtonHandler;
//   document.getElementById("closeButton").onclick = closeButtonHandler;
//
//   var w;
//
//   function openButtonHandler() {
//     w = window.open("window.html", "Window Name", "width=400, height=400, status=yes, resizable=no")
//   }
//
//   function closeButtonHandler() {
//     w.close();
//   }
// }


// //--------------  05 String  --------------
// // 05.1 StringObject
//
// let a = 'my string',
//   b = "my string",
//   c = new String("my string"),
//   d = String("my string");
//
// let str = "\u1234";
// document.write(str + "<br/>");
//
// document.write(typeof a);
// document.write("<br/>");
// document.write(typeof d + "<br/>");
//
// // 05.2 StringMethods
//
// // split - разбивает строки
// let str2 = "для тестирования",
//   substr = str2.split(" ");
// document.write(str2 + "<br/>");
// document.write(substr.join("<br/>"));
//
// // charAt - символ на указанной позиции
// let firstChar = str2.charAt(0),
//   lastChar = str2.charAt(str2.length - 1);
// document.write("<br/> первый символ - " + firstChar + " последний символ " + lastChar + "<br/>");
//
// // indexOf - индекс первого символа в строке
// str2 = "ab-cd-ef-gh-ij";
// let firstDash = str2.indexOf("-");
// document.write("Индекс первого символа '-' в строке " + str2 + " = " + firstDash + "<br/>");
//
// // lastIndexOf - индекс последнего символа в строке
// str2 = "ab-cd-ef-gh-ij";
// let lastDash = str2.lastIndexOf("-");
// document.write("Индекс последнего символа '-' в строке " + str2 + " = " + lastDash + "<br/>");
//
// // toLowerCase() - символы в нижний регистр, toUpperCase() - в верхний регистр
// str2 = "Hello world!!!";
// str2 = str2.toLowerCase();
// document.write(str2);
//
// str2 = str2.toUpperCase();
// document.write(str2);
// document.write(str2.toLowerCase());
//
// // substring - возвращает строку между указанными индексами, не включая индексы
// str2 = "Hello world!!"
// substr = str2.substring(6, 12);
// document.write("<br/>" + substr);
//
// // substr - возвращает строку начиая с указанного индекса, указанной длинны
// str2 = "Hello world!!"
// substr = str2.substr(6, 5);
// document.write("<br/>" + substr);

//--------------  06 Regular Expressions  --------------

// 06.1 Simple Regexp

// let pattern1 = /\d\d\d/;
//
// //let pattern2 = new RegExp("\d\d\d");
//
// // 06.2 String Methods. Search
// let text = "строка 123 для тестирования";
// let pattern = /\d\d\d/;
// let firstIndex = text.search(pattern);
// document.write("Подстройка найдена по индексу " + firstIndex + "<br/>");
//
// // 06.3 String Methods. Replace
// let text3 = "строка для 123тести456рования при789мера";
// let pattern3 = /\d\d\d/g;                                   // g - глобальный поиска
// let result3 = text3.replace(pattern3, "");
// document.write(result3 + "<br/>");
//
// // 06.4 String Methods. Match
// text4 = "1 плюс 2 равно 3";
// result4 = text4.match(/\d/g);
// document.write(result4[2] + "<br/>");
//
// let text5 = "Текст 123 для тестирования примера";
// let result5 = text5.match(/\d\d\d/);
// document.write("result5[0] = " + result5[0] + "<br/>");
//
// // 06.5 Split
// let text6 = "test-A123test-B123test-C111test-D567";
// let result6 = text.split(/\d\d\d/g)
// document.write(result6 + "<br/>");
//
// // 06.6 Exec
// let test7 = "Строка №2 для тестирования примера с регулярными выражениями в файле 6_RegExMethods_exec.html"
// let pattern7 = /\d/g;
//
// let result7;
// while ((result7 = pattern7.exec(test7)) != null) {
//   alert("Найдено " + result7 + " в позиции " + result7.index + ". Следующий поиск начнется с индкса " + pattern7.lastIndex);
// }

// 06.7 Test
// let pattern8 = /\d\d\d/;
//
// let input = "hello world";
// if(pattern8.test(input)) {
//   document.write("Строка " + input + " соответствует шаблону<br/>");
// }
// else {
//   document.write("Строка " + input + " НЕ соответствует шаблону<br/>");
// }
//
// input = "123";
// if(pattern8.test(input)) {
//   document.write("Строка " + input + " соответствует шаблону<br/>");
// }
// else {
//   document.write("Строка " + input + " НЕ соответствует шаблону<br/>");
// }

//--------------  07 Метасимволы  --------------

// \w Любой алфавитно-цифровой символ в верхнем и нижнем регистре и символ подчеркивания
// \W Любой символ не являющийся подчеркиванием и не относящийся к алфавитно-цифровым
// \s Любой пробельный символ (тоже самое, что [\r\n\f\v\t])
// \S Любой не пробельный символ (тоже самое, что [^\r\n\f\v\t])
// \d Любая цифра (digit)
// \D Любой не цифровой символ (тоже самое, что [^0-9])

// \v (вертикальная табуляция)
// \t (табуляция)
// \r (перевод каретки)
// \n (перевод строки)
// \f (перевод страницы)

// Наборы символов
// [RrGgBb] - соответствие указанным
// [a-z] Соответствие символам английского алфавита в нижнем регистре
// [0-9] Соответствие указанным цифрам
// [^0-9] Соответствие с чем угодно кроме цифр указанного диапазона

// Квантификатор (Кванторы)
// + Один или несколько символов
// * Ноль или более символов
// ? Ноль или одно вхождение

// Интервалы
// {3} точное количество совпадений
// {2,3} диапазон
// {3,} не менее
// {,3} не более

// Якорные символы
// ^ Начало строки
// $ Конец строки
// \b соответствует границе слова

// Флаги
// i Выполнение поиска не чувствительного к регистру
// g Выполнение глобального поиска
// m Многострочный режим

//--------------  08 Примеры регулярных выражений  --------------

// let pattern = /\d{1,2}-\d{1,2}-\d{4}/;
// let text = "21-12-1999";
// document.write(text + " -> " + pattern.test(text) + "<br/>");
//
// pattern = /\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
// text = "+38 (098) 223-23-23";
// document.write(text + " -> " + pattern.test(text) + "<br/>");
//
// pattern = /[а-яА-Я]+ [а-яА-Я]+ [а-яА-Я]/;
// text = "Иванов Иван Иваныч";
// document.write(text + " -> " + pattern.test(text) + "<br/>");
//
// pattern = /\b[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,4}\b/i;
// text = "ivanov.ivan@example.com";
// document.write(text + " -> " + pattern.test(text) + "<br/>");
//
// pattern = /\w+\.html/;
// text = "hello.html";
// document.write(text + " -> " + pattern.test(text) + "<br/>");
//
//
// pattern = /https?:\/\/[\w\d:\.:\?\&]+/g;
// text = "https://yandex.ru/ https://www.google.com/";
// let res;
// while ((res = pattern.exec(text)) != null) {
//   document.write("Найдено " + res + " по индексу " + res.index + "<br/>");
// }




let pattern = /[0-9]{16,19}/;
let text = "1234567890123456к";
document.write(text + " -> " + pattern.test(text) + "<br/>");








