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

// $('div:not(.func_div, .test_div)').attr({
//                 style: "color:red; font-size:22pt;",
//                 title: "jquery attr test"
//               });
//
//
// $('.func_div').attr(
//                     "style", CalculateValue()
//                     );
//
// function CalculateValue() {
//   return "color:blue";
// }
//
// $('.test_div').attr("style", "background-color:yellow");


//----------------------------removeAttr()--------------------------------//

// $('div').removeAttr("align");


//----------------------------Prop()--------------------------------//
// Метод prop() - возвращает или изменяет значение свойств выбранных элементов страницы
// .prop(propName, value) - во всех выбранных элементах, свойство propName прмет значение value.
// .prop({propName1:value, propName2:value, ....}) - во всех выбранных элементах изменит значения группы свойств
// propName1, propName2, .... сделав их равными value1, value2, .... соответственно.
// .prop(propName, function(index, value)) - свойству propName будет присвоено значение, возвращенное пользовательской функцией
// (если она ничего не вернет, то свойство просто не изменит своего значения). Функция вызывается отдельно, для каждого из выбранных элементов.
// При вызове ей передаются следующие параметры: index - позиция элемнта в наборе, value - текущее значение свойства propName у элемента.

// метод html() - получает HTML-содержимое первого элемента в наборе соответствующих элементов или устанавливает HTML-разметку
// для каждого совпавшего элемента.


$(function () {

  $('input').change(function () {

    let input = $(this);
    $('p').html(
      ".attr( \"checked\" ): <b>" + input.attr("checked") + "</b><br>" +
      ".prop( \"checked\" ): <b>" + input.prop("checked") + "</b><br>") + "</br>";

      }).change();
});










