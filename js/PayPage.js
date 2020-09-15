window.onload = function() {
  document.getElementById("pan_input").value = "0000 1111 2222 3333 44";
};

let key_name;
let input_keyup;
let input_click;
let caret_position;

document.addEventListener('keydown', function (event) {
  if(event.code === 'Delete' || event.code == 'Backspace') {
    key_name = event.code;
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
        caret_position = input_click;
        key_name = '';
        console.log(caret_position);
        break;
      case 'keyup':
        caret_position = input_keyup;
        key_name = '';
        console.log(caret_position);
        break;
    }
  }
}

let position = new Position();
document.getElementById("pan_input").addEventListener('click', position);
document.getElementById("pan_input").addEventListener('keyup', position);





document.getElementById("pan_input").oninput = function () {
  //setCaretPosition(document.getElementById("pan_input"), 5);
  let x;
  x = document.getElementById("pan_input").value;                          // извлекаем данные из поля "номер карты"
  x = onlyNum(x);
  x = cut19(x);

  if (key_name != 'Backspace') {
    x = addSpaces(key_name, x);
  } else {
    x = delSpaces(caret_position);
  }

  document.getElementById("pan_input").value = x;
};



function onlyNum(txt) {
  let result;
  document.getElementById("pan_input").value = txt.replace(/\D/g, '');    // при вводе данных все нечисловые символы убираем
  result = txt.replace(/\D/g, '');
  return result;
}

// function addSpaces(key, txt) {
//   let result = "";
//   let cnt = 3;
//
//   for (let i = 0; txt.length > i; i++) {
//     if (i == cnt){
//       result += txt[i].concat(" ");
//       cnt += 4;
//     }
//     else {
//       result += txt[i];
//     }
//   }
//   return result;
// }

function delSpaces(caret_position) {
  let source_value = document.getElementById("pan_input").value;
  let cnt = 3;
  let result = "";

  for (let i = 0; source_value.length > i; i++) {
    if (i == cnt) {
      result += source_value[i].concat(" ");

      console.log("caret_position" + caret_position);

      // document.getElementById("pan_input").setSelectionRange(2,5);
      // setCaretPosition(document.getElementById("pan_input"), 3);

      cnt += 4;
    }
    else {
      result += source_value[i];
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


function setCaretPosition(elem, caretPos) {
if (elem.selectionStart || elem.selectionStart == '0') {
    elem.selectionStart = caretPos;
    elem.selectionEnd = caretPos;
    elem.focus();
    console.log('caretPos:', caretPos);
  }
}

