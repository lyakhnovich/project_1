// function validate() {
//   alert('validate');
// }
//
// $('#clickme').on('click', function () {
//
//   $('#clickme').css({color: 'red'});
//   console.log('lol');
// })
//
// $('a').on('click', function(e) {
//   e.preventDefault();
//   console.log('lol');
//   return false;
// });

// window.onload =loadHandler;
//
// function loadHandler() {
//   let p1 = document.getElementById('p1');
//   let p2 = document.getElementById('p2');
//
//   p1.onclick = function () {
//     console.log('hello');
//   }
//
//   p2.onclick = clickHandler;
// }
//
// function clickHandler() {
//   console.log('hello 2!');
// }


// window.onload = loadHandler2;
//
// function loadHandler2() {
//   let e = document.getElementById('input1');
//
//   e.onclick = function () {
//     this.value = 'clicked2!';
//     $('#input1').css({color: 'red'});
//   }
// }

// window.onload = function () {
//
//   let pArr = document.getElementsByTagName('p');
//
//   for (let i = 0; i < pArr.length; i++) {
//     pArr[i].onclick = function () {
//       this.style.backgroundColor = "red";
//     }
//   }
//
// }

//DOM level2
//addEventListener
// window.onload = function () {
//
//   let btn1 = document.getElementById('button1');
//
//   if (btn1.addEventListener){
//     btn1.addEventListener('mousemove', function () {
//       console.log('обработчик события нажатия кнопки')
//     },false);
//   }
//
// }

//removeEventListener
// window.onload = function () {
//
//   let btn1 = document.getElementById('button1');
//   let btn2 = document.getElementById('button2');
//
//   if(btn1.addEventListener) {
//     btn1.addEventListener('click', handler, false);
//     btn2.addEventListener('click', removeHandler, false)
//   }
//
//   function handler() {
//     console.log('обработчик события нажатия кнопки');
//   }
//
//   function removeHandler() {
//     btn1.removeEventListener('click', handler, false)
//   }
//
//   let test = document.getElementById('testBtn');
//
//   // test.onclick = function () {
//   //   console.log('1'); //это не отработает!!
//   // }
//   // test.onclick = function () {
//   //   console.log('2'); //отрабатывает только это!!!
//   // }
//
//
//   // обработчиков может быть несколько
//   test.addEventListener('click', function () {
//     console.log('1');
//   })
//
//   test.addEventListener('click', function () {
//     console.log('2');
//   })
//
// }

//EventRouts

// в модели DOM level 2 события распространяются по следующему принципу:
// на этапе ПЕРЕХВАТА событие распространяется от Document вниз до целевого элемента управления
// второй этап - СОБЫТИЕ В ЦЕЛЕВОМ УЗЛЕ
// на третьем этапе событие ВСПЛЫВАЕТ от целевого элемента обратно вверх до корневого элемента

// последний параметр в методе addEventListener -
// true - обработать событие на этапе ПЕРЕХВАТА
// false - обработать событие на этапе ВСПЛЫВАНИЕ

// let isTunnel = true; //true - на этапе перехвата
//
// window.onload = function () {
//   let e1 = document.getElementById('first');
//   let e2 = document.getElementById('second');
//   let e3 = document.getElementById('third');
//
//   e1.addEventListener('click',
//     function () {
//       this.style.backgroundColor = 'green';
//       alert('Обработчик div1');
//     },
//     isTunnel)
//
//   e2.addEventListener('click',
//     function () {
//       this.style.backgroundColor = 'yellow';
//       alert('Обработчик div2');
//     },
//     isTunnel)
//
//   e3.addEventListener('click',
//     function () {
//       this.style.backgroundColor = 'red';
//       alert('Обработчик div3');
//     },
//     isTunnel)
// }

// preventDefault
// window.addEventListener('load', function () {
//
//   document.forms[0].addEventListener('submit', function (e) {
//
//     if(document.getElementById('nameInput').value.length === 0) {
//       e.preventDefault();
//       alert('введите имя!');
//     }
//   }, false);
// })

// stopPropagation
// let isTunnel = false;
//
// window.onload = function () {
//   let e1 = document.getElementById('first');
//   let e2 = document.getElementById('second');
//   let e3 = document.getElementById('third');
//
//   e1.addEventListener('click',
//     function (e) {
//
//     this.style.backgroundColor = 'green';
//     alert('обработчик div 1');
//     e.stopPropagation();
//     }, isTunnel)
//
//   e2.addEventListener('click',
//     function (e) {
//
//       this.style.backgroundColor = 'yellow';
//       alert('обработчик div 2');
//       e.stopPropagation();
//     }, isTunnel)
//
//   e3.addEventListener('click',
//     function (e) {
//
//       this.style.backgroundColor = 'red';
//       alert('обработчик div 3');
//       e.stopPropagation();
//     }, isTunnel)
// }


// Sample
// window.addEventListener('load', function () {
//
//   let guard = document.getElementById('guard');
//
//   guard.addEventListener('keypress', function (e) {
//
//     if(String.fromCharCode(e.charCode) != 1
//         && String.fromCharCode(e.charCode) != 0) {
//       e.preventDefault();
//     }
//   }, true);
// }, false);

// Sample 2
window.addEventListener('load', function () {

  let wrapper = document.getElementById('wrapper');

  wrapper.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'red';
    console.log(e.target);
  }, false);
}, false);





















