window.onload = function() {
  document.getElementById("pan_input").value = "5220 3119 9585 2146";
};

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
});

document.getElementById("pan_input").addEventListener("keydown", function () {
  input_keyup = this.selectionStart;
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
        last_symbol = document.getElementById("pan_input").value.substr(0, caret_position-1).slice(-1);
        break;
      case 'keyup':
        caret_position = input_keyup;
        last_symbol = document.getElementById("pan_input").value.substr(0, caret_position-1).slice(-1);
        break;
      case 'keydown':
        caret_position = input_keyup;
        last_symbol = document.getElementById("pan_input").value.substr(0, caret_position-1).slice(-1);
        break;
    }
    left_symbol = document.getElementById("pan_input").value[caret_position-1];
    right_symbol = document.getElementById("pan_input").value[caret_position];
  }
}

let position = new Position();
document.getElementById("pan_input").addEventListener('click', position);
document.getElementById("pan_input").addEventListener('keyup', position);
document.getElementById("pan_input").addEventListener('keydown', position);

document.getElementById("pan_input").oninput = main;

function main() {
  let x = document.getElementById("pan_input").value;
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

  if (x.length >= 16) {
    if (!luhnAlgorithm(x)) {
      console.log("PIZDEC");
    }
    else {
      console.log("NORM");
    };
  }


  x = refresh_input(x);
  document.getElementById("pan_input").value = x;

// проставляем положение каретки
  if(key_name == "Backspace" && left_symbol == " ") {
    setCaretPosition(document.getElementById("pan_input"), caret_position-2);
  }
  else if(key_name == "Backspace" && last_symbol != " ") {
    setCaretPosition(document.getElementById("pan_input"), caret_position-1);
  }
  else if (key_name == "Backspace" && last_symbol == " ") {
    setCaretPosition(document.getElementById("pan_input"), caret_position-2);
  }
  if(key_name == "Delete" && right_symbol == " ") {
    setCaretPosition(document.getElementById("pan_input"), caret_position+1);
  }
  else if (key_name == "Delete" && right_symbol != " "){
    setCaretPosition(document.getElementById("pan_input"), caret_position);
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
  document.getElementById("pan_input").value = txt.replace(/\D/g, '');    // при вводе данных все нечисловые символы убираем
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
  if (elem.selectionStart || elem.selectionStart == '0') {
    elem.selectionStart = caretPos;
    elem.selectionEnd = caretPos;
    elem.focus();
  }
}

function luhnAlgorithm(digits) {
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let cardNum = parseInt(digits[i]);

    if ((digits.length - i) % 2 === 0) {
      cardNum = cardNum * 2;

      if (cardNum > 9) {
        cardNum = cardNum - 9;
      }
    }
    sum += cardNum;
  }
  return sum % 10 === 0;
}
