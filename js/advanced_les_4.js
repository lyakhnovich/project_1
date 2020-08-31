// setTimeout - планирует один запуск указанной функции через определенное количество миллисекунд

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

let cnt = 0;
function Count() {
  cnt++;
  let item = document.createElement('p');
  item.innerHTML = cnt;
  document.getElementById("output").appendChild(item);
}
//setInterval - планирование запуска указанной функции с заданным интервалом
setInterval(Count, 1000);