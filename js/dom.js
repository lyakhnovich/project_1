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


  document.getElementById("FirstChild").onclick = function () {
    var list = document.getElementById("list_5");
    // Получение первого дочернего элемента в списке.
    var child = list.firstChild;
      if (child != null) {
        var texColor = child.style.color ? child.style.color : 'black';
        // добавление атрибута style="color:red" для выбранного элемента.
        //  child.setAttribute("style", "color:black;");

         //alert(texColor);
        switch (texColor) {
          case "black": child.setAttribute("style", "color:purple;");
            break;
          case "purple": child.setAttribute("style", "color:blue;");
            break;
          case "blue": child.setAttribute("style", "color:green;");
            break;
          case "green": child.setAttribute("style", "color:red;");
            break;
          case "red": child.setAttribute("style", "color:yellow;");
            break;
          case "yellow": child.setAttribute("style", "color:grey;");
            break;
          case "grey": child.setAttribute("style", "color:black;");
            break;
        }

    }
  };

  document.getElementById("LastChild").onclick = function () {
    var list = document.getElementById("list_5");
    // Получение первого дочернего элемента в списке.
    var child = list.lastChild;
    if (child != null && child.style.color != "red") {
      // добавление атрибута style="color:red" для выбранного элемента.
      child.setAttribute("style", "color:red;");
    }
    else if(child.style.color = "red") {
      //alert("loh");
      child.setAttribute("style", "color:black;");
    }
  }


}


















