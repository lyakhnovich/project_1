//------------------------------ getElementsByName

window.onload = function () {
  // обработчик на событие нажатие по кнопке
  document.getElementById("answerButton").onclick = function () {

    // получение массива элементов с атрибутом name со значением answer
    var radioButtons = document.getElementsByName("answer");
    var res = "";
    for (var i = 0; i < radioButtons.length; i++) {
      res += radioButtons[i].value + " " + radioButtons[i].checked + "\r\n"
    }
    alert(res);
  }



//------------------------------ getElementsByTagName
  // получение всех элементов <p>
  var paragraphs = document.getElementsByTagName("p");

  for(var i = 0; i < paragraphs.length; i++) {
    // смена CSS атрибута color для всех параграфов
    paragraphs[i].style.color = "red";
  }
}

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

