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

// -------------- childNodes
  var e = document.getElementById("list");
  // childNodes - получение всех дочерних узлов
  for (var i = 0; i < e.childNodes.length; ++i) {
    e.childNodes[i].style.color = "red";
    alert(e.childNodes[i].nodeType); // Element
  }

// -------------- childNodes 2
  var elem = document.getElementById("list_2");

  for (var i = 0; i < elem.childNodes.length; ++i) {
    var temp = elem.childNodes[i];

    // если найденный узел не элемент, то пропустить его
    if(temp.nodeType != 1) {
      continue;
    }
    elem.childNodes[i].style.color = "yellow";
  }

}