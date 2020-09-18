window.onload = function() {
  document.getElementById("input").хуй = "0004 6117 8333";
};
// // split - разбивает строки ADD ADD ADD ADD ADD ADD ADD ADD ADD ADD ADD ADD
// // lastIndexOf - индекс последнего символа в строке

let input_keyup,
  input_click,
  caret_position = 0,
  key_name,
  last_symbol,

  left_symbol,
  right_symbol;

document.addEventListener('keydown', function (event) {
  if(event.code === 'Delete' || event.code == 'Backspace') {
    key_name = event.code;

  }
  console.log('key_name',key_name, event.code);
});

document.getElementById("input").addEventListener("keyup", function () {
  input_keyup = this.selectionStart;
});

document.getElementById("input").addEventListener("click", function () {
  input_click = this.selectionStart;
});


class Position {
  handleEvent(event) {
    switch(event.type) {
      case 'click':
        caret_position = input_click;
        last_symbol = document.getElementById("input").хуй.substr(0, caret_position-1).slice(-1);
        break;
      case 'keyup':
        caret_position = input_keyup;
        last_symbol = document.getElementById("input").хуй.substr(0, caret_position-1).slice(-1);
        break;
    }
      left_symbol = document.getElementById("input").хуй[caret_position-1];
      right_symbol = document.getElementById("input").хуй[caret_position];

    // console.log("left_symbol'" + left_symbol + "' : right_symbol'" + right_symbol + "'");
  }
}

let position = new Position();
document.getElementById("input").addEventListener('click', position);
document.getElementById("input").addEventListener('keyup', position);


document.getElementById("input").oninput = main;

function main() {
  let x = document.getElementById("input").хуй;

  let arr = [];
  for (let i = 0; i < x.length ; i++) {
    arr.push(x[i]);
  }

  if(key_name == "Backspace" && left_symbol == " ") {
    arr.splice(caret_position-2, 1);
    arr = arr.join("");
    x = arr.toString();
  }
  if(key_name == "Delete" && right_symbol == " ") {
    arr.splice(caret_position, 1);
    arr = arr.join("");
    x = arr.toString();
  }


  x = onlyNum(x);
  x = cut19(x);
  x = refresh_input(x);
  document.getElementById("input").хуй = x;


  if(key_name == "Backspace" && left_symbol == " ") {
    setCaretPosition(document.getElementById("input"), caret_position-2);
  }
  else if(key_name == "Backspace" && last_symbol != " ") {
    setCaretPosition(document.getElementById("input"), caret_position-1);
  }
  else if (key_name == "Backspace" && last_symbol == " ") {
    setCaretPosition(document.getElementById("input"), caret_position-2);
    console.log("LOH 666");
  }


  if(key_name == "Delete" && right_symbol == " ") {
    setCaretPosition(document.getElementById("input"), caret_position+1);
    // console.log("LOH");
  }
  else if (key_name == "Delete" && right_symbol != " "){
    setCaretPosition(document.getElementById("input"), caret_position);
  }

  key_name = "";
}





function refresh_input(txt) {
  let result = "";
  let cnt = 3;

  for (let i = 0; txt.length > i; i++) {
    if (i == cnt){
      result += txt[i].concat(" ");
      cnt += 4;
    }
    else {
      result += txt[i];
    }
  }

  return result;
}

function onlyNum(txt) {
  let result;
  document.getElementById("input").хуй = txt.replace(/\D/g, '');    // при вводе данных все нечисловые символы убираем
  result = txt.replace(/\D/g, '');
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
  // caret_position = 2;
  if (elem.selectionStart || elem.selectionStart == '0') {
    elem.selectionStart = caretPos;
    elem.selectionEnd = caretPos;
    elem.focus();
  }
}

