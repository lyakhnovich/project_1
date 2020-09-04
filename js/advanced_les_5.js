window.onload = function () {
  let button = document.getElementsByTagName("input")[0];

  button.onclick = function () {
    let div = document.getElementsByTagName("div")[0];

    div.style.backgroundColor = "green"
  }


  document.getElementById("first").onclick = firstButtonHandler;
  document.getElementById("second").onclick = secondButtonHandler;
  div = document.getElementById("testDiv");
};
let div;
function firstButtonHandler() {
  div.className = "class1";
}

function secondButtonHandler() {
  div.className = "class2";
}