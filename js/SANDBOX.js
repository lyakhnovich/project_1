window.onload = function() {
  document.getElementById("input").value = "0004 1117 3333";
};
// // split - разбивает строки ADD ADD ADD ADD ADD ADD ADD ADD ADD ADD ADD ADD
// // lastIndexOf - индекс последнего символа в строке

let input_keyup,
  input_click,
  caret_position,
  key_name;

document.addEventListener('keydown', function (event) {
  if(event.code === 'Delete' || event.code == 'Backspace') {
    key_name = event.code;
  }
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
        break;
      case 'keyup':
        caret_position = input_keyup;
        break;
    }
  }
}

let position = new Position();
document.getElementById("input").addEventListener('click', position);
document.getElementById("input").addEventListener('keyup', position);


document.getElementById("input").oninput = main;

function main() {
  let x;
  x = document.getElementById("input").value;

  let source_value = document.getElementById("input").value;
  let last_symbol = source_value.substr(0, caret_position-1).slice(-1);



  x = onlyNum(x);
  x = cut19(x);
  console.log("1: " + caret_position);
  x = refresh_input(x);
  console.log("2: " + caret_position);
  console.log("last_symbol:" + last_symbol);
  document.getElementById("input").value = x;
  setCaretPosition(document.getElementById("input"), caret_position-1);
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
  document.getElementById("input").value = txt.replace(/\D/g, '');    // при вводе данных все нечисловые символы убираем
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

// function delSpaces(caret_pos) {
//   let source_value = document.getElementById("input").value;
//   let last_symbol = source_value.substr(0, caret_pos-1).slice(-1);
//   let result;
//
//   console.log("last_symbol:" + last_symbol);
//
//   if(last_symbol == " ") {
//     result = onlyNum(source_value);
//     result = cut19(result);
//     result = addSpaces("", result);
//     setCaretPosition(document.getElementById("input"), caret_position - 2);
//     console.log(result);
//   }
//   else {
//     console.log("pidr");
//     result = onlyNum(source_value);
//     result = cut19(result);
//     result = addSpaces("", result)
//   }
//   // if(caret_position < source_value.length) {
//   //   result = onlyNum(source_value);
//   //   result = cut19(result);
//   //   result = addSpaces('', result);
//   //   console.log(result + " " + caret_position + " " + source_value.length);
//   // }
//
//   return result;
// }
