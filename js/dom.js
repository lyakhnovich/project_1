// работа с узлами DOM

// Основные типы узлов
// Интерфейс           | Константа nodeType            | Значение nodeType
// ------------------------------------------------------------------------
// Element             | Node.ELEMENT_NODE             | 1
// Text                | Node.TEXT_NODE                | 3
// Comment             | Node.COMMENT_NODE             | 8
// Document            | Node.DOCUMENT_NODE            | 9
// ------------------------------------------------------------------------

// Свойства для навигации по DOM
// childNodes - массив всех дочерних узлов
// firstChild - первый дочерний узел
// lastChild - последний дочерний узел
// nextSibling - следующий узел расположенный на одном уровне с текущим
// previousSibling - предыдущий узел расположенный на одном уровне с текущим
// parentNode - родительский узел для текущего элемента

window.onload = function () {

// // -------------- childNodes
//   var e = document.getElementById("list");
//   // childNodes - получение всех дочерних узлов
//   for (var i = 0; i < e.childNodes.length; ++i) {
//     e.childNodes[i].style.color = "red";
//   //alert(e.childNodes[i].nodeType); // Element
//   }
//
// // -------------- childNodes 2
//   var elem = document.getElementById("list_2");
//
//   for (var i = 0; i < elem.childNodes.length; ++i) {
//     var temp = elem.childNodes[i];
//
//     // если найденный узел не элемент, то пропустить его
//     if(temp.nodeType != 1) {
//       continue;
//     }
//     elem.childNodes[i].style.color = "yellow";
//   }
//
// // -------------- parentNode
//   var par = document.getElementById("p1");
//   // parentNode - получить родительский узел для узла
//   par.parentNode.style.border = "1px solid red";
//
// // -------------- first last child
//   var flc = document.getElementById("list_3");
//   // firstChild - получить первый дочерний узел
//     flc.firstChild.style.color = "orange";
//   // lastChild - получить последний дочерний узел
//     flc.lastChild.style.color = "blue";
//
// // -------------- next previous Sibling
//
//     var sib = document.getElementsByTagName("li")[11];
//     //alert(sib.nextSibling.innerHTML);
//     // nextSibling - получение следующего узла, который находится на одном уровне с текущим
//     sib.nextSibling.style.color = "red";
//     // previousSibling - получение предыдущего узла, который находится на одном уровне с текущим
//     sib.previousSibling.style.fontSize = "50px";
//
//
//
// // -------------- методы DOM
//     var div1 = document.getElementById("div1");
//
//     var p1 = document.createElement("p"); // создание элемента разметки
//     p1.innerHTML = "Paragraph 1";
//     div1.appendChild(p1);
//
//     var p2 = document.createElement("p");
//     p2.innerHTML = "Paragraph 2";
//     document.body.insertBefore(p2, div1);

//
//   document.getElementById("SelectFirstChild").onclick = function () {
//     var list = document.getElementById("list_5");
//     // Получение первого дочернего элемента в списке.
//     var child = list.firstChild;
//       if (child != null) {
//         var texColor = child.style.color ? child.style.color : 'black';
//         // добавление атрибута style="color:red" для выбранного элемента.
//         //  child.setAttribute("style", "color:black;");
//
//          //alert(texColor);
//         switch (texColor) {
//           case "black": child.setAttribute("style", "color:purple;");
//             break;
//           case "purple": child.setAttribute("style", "color:blue;");
//             break;
//           case "blue": child.setAttribute("style", "color:green;");
//             break;
//           case "green": child.setAttribute("style", "color:red;");
//             break;
//           case "red": child.setAttribute("style", "color:yellow;");
//             break;
//           case "yellow": child.setAttribute("style", "color:grey;");
//             break;
//           case "grey": child.setAttribute("style", "color:black;");
//             break;
//         }
//
//     }
//   };
//
//   document.getElementById("SelectLastChild").onclick = function () {
//     var list = document.getElementById("list_5");
//     // Получение первого дочернего элемента в списке.
//     var child = list.lastChild;
//     if (child != null && child.style.color != "red") {
//       // добавление атрибута style="color:red" для выбранного элемента.
//       child.setAttribute("style", "color:red;");
//     }
//     else if(child.style.color = "red") {
//       //alert("loh");
//       child.setAttribute("style", "color:black;");
//     }
//   }
//
//
//   var node = null;
//
//   document.getElementById("SelectNextNode").onclick = function () {
//     resetColor();
//     if (node == null) {
//       var list = document.getElementById("list_5");
//       node = list.firstChild;
//       node.setAttribute("style", "color:red");
//       return;
//     }
//     // Получение следующего элемента, которые в дереве находиться на одном уровне.
//     node = node.nextSibling;
//     if (node != null) {
//       node.setAttribute("style", "color:red");
//       //alert(node.firstChild.nodeType);
//     }
//   }
//
//   document.getElementById("SelectPrevNode").onclick = function () {
//     resetColor();
//     if (node == null) {
//       var list = document.getElementById("list_5");
//       node = list.lastChild;
//       node.setAttribute("style", "color:blue");
//       return;
//     }
//     // Получение предыдущего элемента, которые в дереве находиться на одном уровне.
//     node = node.previousSibling;
//     if (node != null) {
//       node.setAttribute("style", "color:blue");
//     }
//   }
//
//   function resetColor() {
//     var liList = document.getElementsByTagName("li");
//     for (var i = 0; i < liList.length; i++) {
//       liList[i].setAttribute("style", "color:black");
//     }
//   }
//
//
//   document.getElementById("createNewChild").onclick = function () {
//     var list = document.getElementById("list_5");
//     // создание элемента li
//     var item = document.createElement("li");
//     item.innerHTML = "<H1>ХУЙ</H1>";
//     // добавление созданного элемента в конце.
//     list.appendChild(item);
//   }
//
//   document.getElementById("removeLastChild").onclick = function () {
//     var list = document.getElementById("list_5");
//     var item = list.lastChild;
//     if (item != null) {
//       // удаление выбранного элемента из дерева.
//       list.removeChild(item);
//     }
//   }
//
//
//   document.getElementById("createNewChildAtStart").onclick = function () {
//     var list = document.getElementById("list_5");
//     var item = document.createElement("li");
//     item.innerHTML = "ХУЙ";
//     if (list.firstChild != null) {
//       // вставка элемента перед указанным элементом.
//       list.insertBefore(item, list.firstChild);
//     }
//   }
//
//
//   document.getElementById("yellow").onclick = function () {
//     var liList = document.getElementsByTagName("li");
//     for (var i = 0; i < liList.length; i++) {
//       liList[i].setAttribute("style", "color:yellow");
//     }
//   }
//
//

  document.getElementById("sortChildren").onclick = function () {
  var e = 'mylist';
  if(typeof  e == "string") e = document.getElementById(e);


  //преобразовываем дочерние элементы в массив
  var children = [];
  for (var x = e.firstChild; x != null; x = x.nextSibling)
    if(x.nodeType == 1 /* Node.ELEMENT_nNODE*/) children.push(x);

    //сортировка
  children.sort(function (n, m) { //функция сравнения
    var s = n.firstChild.data;        //текст узла n
    var t = m.firstChild.data;        //текст узла m
    if (s < t) return -1;             //n перед m
    else if (s > t) return 1          //m перед n
    else return  0;                   //n и m равны
  });

  //добавляем дочерние элементы обратно в родительский узел
  //когда добавляется узел, который уже существует в документе, он автоматически удаляется со
  for (var i = 0; i < children.length; i++) e.appendChild(children[i]);
}

}















