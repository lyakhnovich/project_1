//----------------------------eq()--------------------------------//
// метод eq(n) - возвращает элемент, идущий под индексом 'n' в наборе выбранных элементов

// $(function () {
//   $('div').not(3).addClass("blue");
//
//   $("div:eq(3)").css("background-color", "#4dea4d");
// });


//----------------------------Not()--------------------------------//
// $(function () {
//   $('li').not(':eq(2)').css('color', 'red');
// });

//----------------------------Is()--------------------------------//
// $(function () {
//   $("div").on('click', function () {
//     if($(this).is(":first-child")) {
//       $('p').text("гэта первый div");
//     }
//     else if ($(this).is(".blue, .red")) {
//       $('p').text("гэта красный или синий div");
//     }
//     else if ($(this).is(":contains('Test')")) {
//       $('p').text("содержит текст Test");
//     }
//     else {
//       $('p').text("нэма нехуя");
//     }
//   })
// });

//----------------------------Filter()--------------------------------//
// $(function () {
//   let paragraphs = $('p');
//   paragraphs.filter(".test").css("background-color", "red");
//   paragraphs.filter(".odd").css("background-color", "green");
// });

//----------------------------Filter(function)--------------------------------//
// $(function () {
//
//   $("p").filter(function (index) {
//     if ($(this).attr("align") && index ==0) {
//       return true;
//     }
//   }).css("background-color", "red");
//
// });

//----------------------------Slice()--------------------------------//
// $(function () {
//   $('#btn1').click(function () {
//     $('p').css("background-color", "green");
//     $('p')
//       .slice(0, 3)
//       .css("background-color", "red");
//   });
//
//   $('#btn2').click(function () {
//     $('p').css("background-color", "green");
//     $('p')
//       .slice(2, 4)
//       .css("background-color", "red");
//   });
//
//   $('#btn3').click(function () {
//     $('p').css("background-color", "green");
//     $('p')
//       .slice(3)
//       .css("background-color", "red");
//   });
//
//   $('#btn4').click(function () {
//     $('p').css("background-color", "green");
//     $('p')
//       .slice(3, -3)
//       .css("background-color", "red");
//   });
// });


//----------------------------Add()--------------------------------//
// метод add() - добавляет в уже существующий набор доп элементы, которые соответствуют указанному выражению

$(function () {
  $('p')
    .add('span') // добавляем к выборке span
    .css('background-color', 'red');
});







































