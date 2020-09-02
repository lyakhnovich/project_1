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

// 04.03 WindowOpen

window.onload = function () {

  document.getElementById("openButton").onclick = openButtonHandler;
  document.getElementById("closeButton").onclick = closeButtonHandler;

  var w;

  function openButtonHandler() {
    w = window.open("window.html", "Window Name", "width=400, height=400, status=yes, resizable=no")
  }

  function closeButtonHandler() {
    w.close();
  }
}
















