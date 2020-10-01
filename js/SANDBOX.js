let input_keyup,
  input_click,
  caret_position = 0,
  key_name,
  last_symbol,
  left_symbol,
  right_symbol;


//------------------Функциональность поля PAN------------------//
document.getElementById("pan").oninput = function () {
  main("pan", " ");
};

//------------------Функциональность поля MMYYYY------------------//
document.getElementById("mmyyyy").oninput = function () {
  main("mmyyyy", "/");
};

function main(id_elem, separator) {
  key_info(id_elem);

  let x = document.getElementById(id_elem).value;
  let arr = [];

  for (let i = 0; i < x.length ; i++) {
    arr.push(x[i]);
  }

  if(key_name === "Backspace" && left_symbol === separator) {
    arr.splice(caret_position-2, 1);
    arr = arr.join("");
    x = arr.toString();
  }
  if(key_name === "Delete" && right_symbol === separator) {
    arr.splice(caret_position, 1);
    arr = arr.join("");
    x = arr.toString();
  }

  if(id_elem === "mmyyyy") {
    x = onlyNum(x, id_elem);
    x = cut_num(x, 6);
    x = refresh_input(x, separator, 2);
  }
  else if (id_elem === "pan") {
    x = onlyNum(x, "pan");
    x = cut_num(x, 19);
    if (!luhnAlgorithm(x)) {
      console.log("non valid Luhn");
    }
    x = refresh_input(x, " ", 4);
  }
  document.getElementById(id_elem).value = x;

  if(key_name === "Backspace" && left_symbol === separator) {
    setCaretPosition(document.getElementById(id_elem), caret_position-2);
  }
  else if(key_name === "Backspace" && last_symbol !== separator) {
    setCaretPosition(document.getElementById(id_elem), caret_position-1);
  }
  else if (key_name === "Backspace" && last_symbol === separator) {
    setCaretPosition(document.getElementById(id_elem), caret_position-2);
  }

  if(key_name === "Delete" && right_symbol === separator) {
    setCaretPosition(document.getElementById(id_elem), caret_position+1);
  }
  else if (key_name === "Delete" && right_symbol !== separator){
    setCaretPosition(document.getElementById(id_elem), caret_position);
  }

  key_name = "";

  console.log(" |input_keyup " + input_keyup +
    " |input_click " + input_click +
    " |caret_position " + caret_position +
    " |key_name " + key_name +
    " |last_symbol " + last_symbol +
    " |left_symbol " + left_symbol +
    " |right_symbol " + right_symbol
  );
}


function key_info(id_elem) {
  document.addEventListener('keydown', function (event) {
    if(event.code === 'Delete' || event.code === 'Backspace') {
      key_name = event.code;
    }
  });

  document.getElementById(id_elem).addEventListener("keydown", function () {
    input_keyup = this.selectionStart;
  });

  document.getElementById(id_elem).addEventListener("keyup", function () {
    input_keyup = this.selectionStart;
  });

  document.getElementById(id_elem).addEventListener("click", function () {
    input_click = this.selectionStart;
    console.log(input_click);
  });

  class Position {
    handleEvent(event) {
      switch(event.type) {
        case 'click':
          caret_position = input_click;
          last_symbol = document.getElementById(id_elem).value.substr(0, caret_position-1).slice(-1);
          break;
        case 'keyup':
          caret_position = input_keyup;
          last_symbol = document.getElementById(id_elem).value.substr(0, caret_position-1).slice(-1);
          break;
        case 'keydown':
          caret_position = input_keyup;
          last_symbol = document.getElementById(id_elem).value.substr(0, caret_position-1).slice(-1);
          break;
      }
      left_symbol = document.getElementById(id_elem).value[caret_position-1];
      right_symbol = document.getElementById(id_elem).value[caret_position];
    }
  }

  let position = new Position();

  document.getElementById(id_elem).addEventListener('click', position);
  document.getElementById(id_elem).addEventListener('keyup', position);
  document.getElementById(id_elem).addEventListener('keydown', position);
}

function refresh_input(txt, separator, interval) {
  let result = "";
  let cnt = interval-1;

  for (let i = 0; txt.length > i; i++) {
    if (i === cnt){
      result += txt[i].concat(separator);

      if (separator === " ") {
        cnt += 4;
      }
      else if (separator === "/") {
        cnt += 5;
      }
    }
    else {
      result += txt[i];
    }
  }
  return result;
}

function onlyNum(txt, id_elem) {
  let result;
  document.getElementById(id_elem).value = txt.replace(/\D/g, '');    // при вводе данных все нечисловые символы убираем
  result = txt.replace(/\D/g, '');
  return result;
}

function cut_num(txt, num) {
  let result;
  if (txt.length > num) {
    result = txt.substr(0, num);
  }
  else result = txt;
  return result;
}

function setCaretPosition(elem, caretPos) {
  if (elem.selectionStart || elem.selectionStart === '0') {
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



