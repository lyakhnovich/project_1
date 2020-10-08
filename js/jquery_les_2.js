//  ФИЛЬТРЫ В JQUERY
//----------------------------Even Odd--------------------------------//

// Even - выбор четных
// Odd - выбор нечетных

// $(function () {
//   // $("p:even").css("background-color", "red");
//   $("p:odd").css("background-color", "red");
// });


//----------------------------First Last--------------------------------//

// $(function () {
//   $("li:first").css("color", "red");
//   $("li:last").css("color", "red");
// });


//----------------------------First-child Last-child--------------------------------//

// $(function () {
//   $("ul li:first-child").css("color", "red");
//   // $("ul li:last-child").css("color", "red");
// });


//----------------------------Only-child--------------------------------//

// Only-child - выбор ЕДИНСТВЕННЫХ дочерних элементов

// $(function () {
//   $("div p:only-child").css("color", "blue");
// });


//----------------------------Nth-child--------------------------------//

/* Nth-child - выборка элементов на основе нумерации в DOM-дереве

  :nth-child(n) - n-ый дочерний элемент
  :nth-child(even) - четные дочерние элементы
  :nth-child(odd) - нечетные дочерние элементы
  :nth-child(an+b) - a и b целые числа, n - счетчик, который автоматически принимает значения 0,1,2....
 */

// $(function () {
//   $(".one tr:nth-child(2)").css("background-color", "lightblue");
//   $(".two tr:nth-child(even)").css("background-color", "lightblue");
//   $(".three tr:nth-child(odd)").css("background-color", "lightblue");
//   $(".four tr:nth-child(3n+1)").css("background-color", "lightblue");
// });


//----------------------------Eq Gt Lt--------------------------------//

// :eq(индекс) - выбор элемента по индексу
// :gt(индекс) - все элементы, индекс котрых больше указанного
// :lt(индекс) - все элементы, индекс котрых меньше указанного

// $(function () {
//   // $("p").css("background-color", "#4dea4d");
//   // $("p:eq(3)").css("background-color", "#4dea4d");
//   // $("p:gt(4)").css("background-color", "#4dea4d");
//   $("p:lt(4)").css("background-color", "#4dea4d");
// });


//----------------------------Eq example--------------------------------//

// let i = 0;
//
// $(function () {
//   let timer = setInterval(choose, 1500);
// });
//
// function choose() {
//   i++;
//
//   $("li:eq(" + (i - 1) + ")")
//     .css("background-color", "white");
//
//   $("li:eq(" + i + ")")
//     .css("background-color", "yellow");
// }


//----------------------------Not--------------------------------//

// $(function () {
//   $("li:not(li:eq(3))").css("background-color", "red")
// })


//----------------------------Header--------------------------------//

// $(function () {
//   // $("h1, h2, h3, h4, h5, h6").css("background-color", "4dea4d")
//   $(":header").css("background-color", "#4dea4d");
//   // $( ":header" ).css({ background: "#ccc", color: "blue" });
// });


//----------------------------Animated--------------------------------//

// $(function () {
//   $(".last").hide(3000);
//   $(":animated").css("background", "red")
// })





//----------------------------ФИЛЬТРЫ КОНТЕНТА--------------------------------//

//----------------------------Contains--------------------------------//

// $(function () {
//   // $("p:contains('JavaScript')").css("background-color", "red");
//   $("p:contains('HTML')").css("background-color", "red");
// })

// :empty
// :parent
// :has


//----------------------------ФИЛЬТРЫ ФОРМ--------------------------------//
// :input
// :text
// :password
// :radio
// :checkbox
// :submit
// :image
// :reset
// :button
// :file


//  МАНИПУЛЯЦИЯ СВОЙСТВАМИ, АТРИБУТАМИ И СТИЛЯМИ

//----------------------------attr()--------------------------------//

$('div:not(.func_div)').attr({
                style: "color:red; font-size:22pt;",
                title: "jquery attr test"
              });


$('.func_div').attr(
                    "style", CalculateValue()
                    );

function CalculateValue() {
  return "color:blue";
}





















