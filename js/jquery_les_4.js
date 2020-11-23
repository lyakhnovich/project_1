//----------------------------событие ready--------------------------------//
// ready - определяет функцию, которая будет запущена после полной загрузки DOM
// 1
// $(document).ready(function () {
//   console.log('page loaded 1');
// });
//
// // 2
// $(document).ready(after_ready);
// function after_ready() {
//   console.log('page loaded 2');
// }
//
// // 3 (сокращенный вариант с анонимной функцией)
// $(function () {
//   console.log('page loaded 3');
// });


//----------------------------click--------------------------------//

// $(function () {
//
//   $('p').on('click', function () {
//     console.log('click');
//   });
//
//   $('#button').on('click', function () {
//     console.log('click btn');
//     $('p').click();
//   });
// });


//----------------------------FocusAndBlur--------------------------------//

// $(function () {
//
//   $("input").focus(function () {
//     $(this).val('focus');
//   });
//
//   $('input').blur(function () {
//     $(this).val('blur');
//   });
//
// });

//----------------------------Load--------------------------------//

// $(document).ready(function () {
//   console.log('document hui');
// });
//
// $(window).load(function () {
//   console.log('window hui');
// });


//----------------------------KeyDown--------------------------------//

// $(window).keydown(function (event) {
//
//   switch (event.keyCode) {
//     case 37: {
//       console.log('left pushed');
//     }
//       break;
//     case 38: {
//       console.log('up pushed');
//     }
//       break;
//     case 39: {
//       console.log('right pushed');
//     }
//       break;
//     case 40: {
//       console.log('down pushed');
//     }
//       break;
//   }
//
// });


//----------------------------KeyUp--------------------------------//

// $(window).keyup(function (event) {
//
//   switch (event.keyCode) {
//     case 37: {
//       console.log('left poped');
//     }
//       break;
//     case 38: {
//       console.log('up poped');
//     }
//       break;
//     case 39: {
//       console.log('right poped');
//     }
//       break;
//     case 40: {
//       console.log('down poped');
//     }
//       break;
//   }
//
// });


//----------------------------KeyPress--------------------------------//

// $(window).keypress(function (event) {
//   console.log(String.fromCharCode(event.charCode) + '(' + event.charCode + ')');
// });


//----------------------------MouseEvents--------------------------------//

// let overCount = 0,
//   outCount = 0;
//
// $(function () {
//
//   $('div:first').mouseover(function () { overCount++; Update();})
//   $('div:last').mouseout(function () { outCount++; Update();})
// });
//
// function Update() {
//
//   $('#over').text('MouseOver ' + overCount);
//   $('#out').text('MouseOut ' + outCount);
// }

//----------------------------Hover--------------------------------//

// $(function () {
//
//   $('div').hover(onIn, onOut);
// });
//
// function onIn() {
//   $('div').html('IN');
// }
//
// function onOut() {
//   $('div').html('OUT');
// }

//----------------------------MouseMove--------------------------------//

// $(function () {
//
//   $('div').mousemove(function (e) {
//
//     let pageCoord = '(' + e.pageX + ', ' + e.pageY + ' )';
//     $('span').text('Page coords ' + pageCoord);
//   });
// });


//----------------------------AddEventListener--------------------------------//

// window.addEventListener('load', function () {
//
//   function show_msg() {
//     console.log('hey');
//   }
//
//   let div = document.getElementById('test');
//   div.addEventListener('mouseover', show_msg, false)
// }, false);

//----------------------------removeEventListener--------------------------------//

// window.addEventListener('load', function () {
//
//   let div = document.getElementById('test');
//   let del = document.getElementById('del');
//
//   function show_msg() {
//     console.log('hello');
//   }
//   div.addEventListener('mouseover', show_msg, false);
//
//   del.addEventListener('click', function () {
//     div.removeEventListener('mouseover', show_msg, false);
//   }, false)
// }, false);


//----------------------------EventRouts--------------------------------//
// в модели DOM level 2 события распространяются по следующему принципу:
// на этапе перехвата событие распространяется от Document вниз до целевого элемента управления
// второй этап - событие в целевом узле
// на третьем этапе событие всплывает от целевого элемента обратно вверх до корневого элемента

// последний параметр addEventListener - true - обработать событие на этапе ПЕРЕХВАТА,
// false - на этапе ВСПЛЫВАНИЕ

// let isTunnel = true;
//
// window.addEventListener('load', function () {
//
//   let e1 = document.getElementById('first');
//   let e2 = document.getElementById('second');
//   let e3 = document.getElementById('third');
//
//   e1.addEventListener('click',
//     function () {
//       this.style.backgroundColor = 'green';
//       alert('обработчик div 1');
//       // console.log('обработчик div 1');
//     },
//     isTunnel);
//
//   e2.addEventListener('click',
//     function () {
//       this.style.backgroundColor = 'yellow';
//       alert('обработчик div 2');
//       // console.log('обработчик div 2');
//     },
//     isTunnel);
//
//   e3.addEventListener('click',
//     function () {
//       this.style.backgroundColor = 'red';
//       alert('обработчик div 3');
//       // console.log('обработчик div 3');
//     },
//     isTunnel);
//
// }, false);


//----------------------------PreventDefault--------------------------------//

// window.addEventListener('load', function () {
//
//   document.forms[0].addEventListener('submit', function (e) {
//
//     if (document.getElementById('nameInput').value.length === 0) {
//
//       e.preventDefault();
//       alert('Введите имя');
//     }
//   }, false);
//
// }, false);


//----------------------------stopPropagation--------------------------------//
// let isTunnel = false;
//
// window.onload = function () {
//
//   let e1 = document.getElementById('first');
//   let e2 = document.getElementById('second');
//   let e3 = document.getElementById('third');
//
//   e1.addEventListener('click',
//     function (e) {
//
//     this.style.backgroundColor = 'green';
//     alert('Обработчик div 1');
//     e.stopPropagation();
//     },
//     isTunnel);
//
//   e2.addEventListener('click',
//     function (e) {
//
//       this.style.backgroundColor = 'yellow';
//       alert('Обработчик div 2');
//       e.stopPropagation();
//     },
//     isTunnel);
//
//   e3.addEventListener('click',
//     function (e) {
//
//       this.style.backgroundColor = 'red';
//       alert('Обработчик div 3');
//       e.stopPropagation();
//     },
//     isTunnel);
//
// };

//----------------------------DOM_Level_2--------------------------------//

// window.addEventListener('load', function () {
//   let guard = document.getElementById('guard');
//
//   guard.addEventListener('keypress', function (e) {
//
//     if(String.fromCharCode(e.charCode) !== '1'
//     && String.fromCharCode(e.charCode) !== '0') {
//       e.preventDefault();
//     }
//   }, true)
// }, false);


//----------------------------on--------------------------------//
$(function () {

  $('ul').on('click', function (event) {

    $(event.target).css('background', 'red')
    console.log(event.target);
  });
});

//----------------------------on--------------------------------//
$(function () {

  function user_info(event) {
    $('#out').html('login: ' + event.data.login + '<br />' + 'password: ' + event.data.password);
  }

  let access = {login: 'admin', password: '12345'};

  $('#button').on('click', access, user_info);
});






















