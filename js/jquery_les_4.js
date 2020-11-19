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

let isTunnel = true;

window.addEventListener('load', function () {

  let e1 = document.getElementById('first');
  let e2 = document.getElementById('second');
  let e3 = document.getElementById('third');

  e1.addEventListener('click',
    function () {
      this.style.backgroundColor = 'green';
      console.log('обработчик div 1');
    },
    isTunnel);


});



















