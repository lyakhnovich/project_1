// window.onload = function(){
//   document.getElementById("pan_input").value = "11112222333344445555";
// };

let keypress;
let input_keyup;
let input_click;

document.addEventListener('keydown', function (event) {

  if(event.code === 'Delete' || event.code == 'Backspace') {
    keypress = event.code;
    console.log("loh");
  }
});

document.getElementById("pan_input").addEventListener("keyup", function () {
  input_keyup = this.selectionStart;
});


document.getElementById("pan_input").addEventListener("click", function () {
  input_click = this.selectionStart;
});


class Position {
  handleEvent(event) {
    switch(event.type) {
      case 'click':
        console.log("1111keypress " + keypress, "input_click " + input_click);
        keypress = '';
        break;
      case 'keyup':
        console.log("2222keypress " + keypress, "input_keyup " + input_keyup);
        keypress = '';
        break;
    }
  }
}

let position = new Position();
document.getElementById("pan_input").addEventListener('click', position);
document.getElementById("pan_input").addEventListener('keyup', position);




// console.log("keypress " + keypress, "caretPosition " + caretPosition);


document.getElementById("pan_input").oninput = function () {
  let x;
  x = document.getElementById("pan_input").value;                          // извлекаем данные из поля "номер карты"

  // if (keypress != 'Backspace') {
  //   x = onlyNum(x);
  // }
  // else if (keypress == 'Backspace') {
  // }

  x = onlyNum(x);
  x = cut19(x);
  x = addSpaces(keypress, x);
  document.getElementById("pan_input").value = x;
  input_click = '';
};

function onlyNum(txt) {
  let result;
  document.getElementById("pan_input").value = txt.replace(/\D/g, '');    // при вводе данных все нечисловые символы убираем
  result = txt.replace(/\D/g, '');
  return result;
}

function addSpaces(key, txt) {

  let cnt = 3;
  let result = "";

  for (let i = 0; txt.length > i; i++) {

    if (i == cnt /*&& keypress != 'Backspace'*/){

      result += txt[i].concat(" ");
      cnt += 4;
    }
    else {
      result += txt[i];
    }

  }
  return result;
}

function cut19(txt) {
  let result;

  if (txt.length > 19) {                      // огранчение в 19 символов
    result = txt.substr(0, 19);
  }
  else result = txt;

  return result;
}