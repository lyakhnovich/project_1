////// 001 setTimeout - планирует один запуск указанной функции через определенное количество миллисекунд

// setTimeout(showMessage, 4000);// запуск через 4 сек
//
// function showMessage() {
//   alert("Timeout 1");
// }
//
//
// setTimeout(function showMessage() {
//   alert("Timeout 2");
// }, 10000); // запуск через 10 сек
//
//

////// 002 setInterval
// let cnt = 0;
// function Count() {
//   cnt++;
//   let item = document.createElement('p');
//   item.innerHTML = cnt;
//   document.getElementById("output").appendChild(item);
// }
// //setInterval - планирование запуска указанной функции с заданным интервалом
// setInterval(Count, 1000);


////// 003 clearTimeout
// timer = window.setTimeout(showMessage, 5000);
//
// function showMessage() {
//   alert("privet");
// }
//
// function cancel() {
//   clearTimeout(timer);
// }

////// 004 clearInterval

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


// //02 Location
// //001 Location
//
// document.write('location = ' + document.location + '<br/>'); //весь url
// document.write('protocol = ' + document.location.protocol + '<br/>'); //протокол
// document.write('host = ' + document.location.host + '<br/>'); //имя хоста
// document.write('pathname = ' + document.location.pathname + '<br/>'); //путь
// document.write('search = ' + document.location.search + '<br/>'); //строка запроса

//002 UrlParsing
//функция для чтения данных, которые переданы при GET запросе (в адресной строке)

function getQueryString() {

  let args = {}; //пустой объект

  let query = location.search.substring(1);     //получение строки запроса
  let pairs = query.split("&");            //разделение строки по амперсанту

  for (let i = 0; i < pairs.length; i++) {

    let pos = pairs[i].indexOf('=');                //проверка пары "name=value"
    if (pos === -1) {                                //если не найдено - пропустить
      continue;
    }

    let argname = pairs[i].substring(0, pos);       //получение имени
    let value = pairs[i].substring(pos + 1);        //получение значения

    args[argname] = value;
  }
  return args;
}

document.getElementById("query").onclick =
function  print() {
  let args = getQueryString();
  let e = document.createElement("p");

  e.innerHTML = "Login " + args.login + "<br/>" + "Password " + args.password;

  document.body.appendChild(e);
};





















