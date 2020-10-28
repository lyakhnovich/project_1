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

// $(function () {
//   $('p')
//     .add('span') // добавляем к выборке span
//     .css('background-color', 'red');
// });

//----------------------------Find()--------------------------------//
// метод find(selector) - отыскивает дочерние элементы, соотв указанному выражению
// $(function () {
//   $('p').find('span').css('color', 'red');
// });

//----------------------------Contents()--------------------------------//
// метод Contents() - получает потомков каждого элемента в наборе соотв элементов, включая текстовые узлы и узлы комментариев
// $(function () {
//   $('#id_content').contents().filter(function () {
//     console.log(this.nodeType);
//     return this.nodeType === 3;
//   }).wrap("<p></p>");
//
//   $('#id_content p').css('color', 'red');
// });

//----------------------------Children()--------------------------------//
// метод получает набор элементов , содержащих всех прямых потомков для каждого совпавшего элемента
// $(function () {
//   $('.class_1').children('p').css('background-color', 'red');
//
// });

//----------------------------Parent()--------------------------------//
// метод возвращает ссылку на ближайшего родителя
// hover(over, out) - метод имитирует эффект hovering (отслеживание попадания указателя мыши в пределы объекта).
// параметры метода: over - функция при наведении, out - функция при отведении курсора мыши.

// $(function () {
//   $('span').hover(
//     function () {
//       $(this).css('background-color', 'yellow')
//         .parent()
//         .css('background-color', 'red');
//     },
//
//     function () {
//       $(this).css('background-color', 'white')
//         .parent()
//         .css('background-color', 'white');
//     });
// });

//----------------------------Parents()--------------------------------//
// метод выбирает все родительские элементы (узлы) для ранее выбранных элементов. Принимает в качестве аргумента дополнительный фильтр-селектор
// $(function () {
//   $('span').parents('div').css('background-color', 'yellow');
//
//   //$('span').parents().css('background-color', 'yellow');
//
// });


//----------------------------Parents()Example--------------------------------//
function showParents() {
  $('div').css('border-color', 'white');

  let len = $('span.selected') // цэ селектор по классу для span
    .parents('div')
    .css('border', '2px red solid')
    .length;

  $('b').text('уникальных родителей (элементов div): ' + len);
}

//.toggleClass()
// Переключатель классов. Добавляет элементу указанный класс, если его нет. Иначе удаляет.
function customHover() {
  $(this).toggleClass('selected');
  showParents();
}

//метод .hover() связывает один или два обработчика событий для элемента, которые будут выполнены, когда указатель мыши находится на элементе и при его отведении.
$('span').hover(customHover);

//----------------------------Closest()--------------------------------//



//----------------------------Next()--------------------------------//






































