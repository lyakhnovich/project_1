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

$(function () {

  $("input").focus(function () {
    $(this).val('focus');
  });

  $('input').blur(function () {
    $(this).val('blur');
  });

});















