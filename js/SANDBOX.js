//----------------------------1--------------------------------//

// window.addEventListener("load", JavaScriptSelection, true);
//
// function JavaScriptSelection() {
//   document.getElementsByTagName("p")[0].innerHTML = "<u>getElementByClassName</u> - выборка по имени тега."
//   document.getElementsByName("input_back")[0].style.background = "yellow";
//   document.getElementsByClassName("bold_p")[0].style.fontWeight = "bold";
//   document.getElementById("red_p").style.color = "red";
// }

// $(window).ready(function () {
//   $("p").eq(2).text("$('p') - выборка по имени тега");
//   $('[name="input_back"]').css('background', 'yellow');
//   $('.bold_p').css('fontWeight', 'bold');
//   $('#red_p').css('color', 'red');
// });


//----------------------------2--------------------------------//

// window.addEventListener("load", function () {
//
//   let paragraph = document.querySelector("p");
//   paragraph.style.fontSize = "30px";
//
//   let list = document.querySelectorAll(".list > li");
//
//   for(var i = 0; i < list.length; i++) {
//     list[i].style.color = "blue";
//   }
// });


//----------------------------3--------------------------------//

// window.addEventListener("load", function () {
//   document.getElementById("first").onclick = firstButtonHandler;
//   document.getElementById("second").onclick = secondButtonHandler;
//   div = document.getElementById("testDiv");
// });
//
// function firstButtonHandler() {
//   div.className = "class_1";
// }
// function secondButtonHandler() {
//   div.className = "class_2";
// }

$(document).ready(function () {

  $('#first').on('click', firstButtonHandler);
  $('#second').on('click', secondButtonHandler);
  let div = $('#testDiv');

  function firstButtonHandler() {
    div.removeClass();
    div.addClass("class_1");
  }
  function secondButtonHandler() {
    div.removeClass();
    div.addClass("class_2");
}

});











