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
}