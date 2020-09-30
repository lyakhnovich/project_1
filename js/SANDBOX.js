// window.onload = function() {
//   document.getElementById("mmyyyy").value = "221990";
// };


//------------------Функциональность поля PAN------------------//
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

document.getElementById("pan").addEventListener("keydown", function () {
  input_keyup = this.selectionStart;
});

document.getElementById("pan").addEventListener("keyup", function () {
  input_keyup = this.selectionStart;
});

document.getElementById("pan").addEventListener("click", function () {
  input_click = this.selectionStart;
});

class Position {
  handleEvent(event) {
    switch(event.type) {
      case 'click':
        caret_position = input_click;
        last_symbol = document.getElementById("pan").value.substr(0, caret_position-1).slice(-1);
        break;
      case 'keyup':
        caret_position = input_keyup;
        last_symbol = document.getElementById("pan").value.substr(0, caret_position-1).slice(-1);
        break;
      case 'keydown':
        caret_position = input_keyup;
        last_symbol = document.getElementById("pan").value.substr(0, caret_position-1).slice(-1);
        break;
    }
      left_symbol = document.getElementById("pan").value[caret_position-1];
      right_symbol = document.getElementById("pan").value[caret_position];
  }
}

let position = new Position();

document.getElementById("pan").addEventListener('click', position);
document.getElementById("pan").addEventListener('keyup', position);
document.getElementById("pan").addEventListener('keydown', position);

document.getElementById("pan").oninput = main_pan;

function main_pan() {
  let x = document.getElementById("pan").value;
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

  x = onlyNum(x, "pan");
  x = cut19(x);
  if (!luhnAlgorithm(x)) {
    console.log("PIZDEC");
  };
  x = refresh_input(x);
  document.getElementById("pan").value = x;

  if(key_name == "Backspace" && left_symbol == " ") {
    setCaretPosition(document.getElementById("pan"), caret_position-2);
  }
  else if(key_name == "Backspace" && last_symbol != " ") {
    setCaretPosition(document.getElementById("pan"), caret_position-1);
  }
  else if (key_name == "Backspace" && last_symbol == " ") {
    setCaretPosition(document.getElementById("pan"), caret_position-2);
  }

  if(key_name == "Delete" && right_symbol == " ") {
    setCaretPosition(document.getElementById("pan"), caret_position+1);
  }
  else if (key_name == "Delete" && right_symbol != " "){
    setCaretPosition(document.getElementById("pan"), caret_position);
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

function onlyNum(txt, id_elem) {
  let result;
  document.getElementById(id_elem).value = txt.replace(/\D/g, '');    // при вводе данных все нечисловые символы убираем
  result = txt.replace(/\D/g, '');
  return result;
}

function cut19(txt) {
  let result;
  if (txt.length > 19) {
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







//------------------Функциональность поля MMYYYY------------------//

document.getElementById("mmyyyy").oninput = main_mmyyyy;


let mm = "",
  yyyy = "";

function main_mmyyyy() {
  let temp = document.getElementById("mmyyyy").value;
  let y = document.getElementById("mmyyyy").value;

  y = onlyNum(y, "mmyyyy");
  y = cut_6(y);
  // console.log("START " + y);


  for (let i = 0; y.length > i; i++) {
    console.log("ты дебил? " + y.length + " " + y);
    if(y.length <= 2) {
      if(mm > 12) {
        mm = 12;
        break;
      }
      mm = y;
    }
    else {
      yyyy = y.slice(2, );
    }
  }


  //console.log("mm: " + mm + " yyyy: " + yyyy + " (temp: " + temp + ")");
  document.getElementById("mmyyyy").value = mm + "/" + yyyy;
}





function cut_6(mm_yyyy) {
  let result;
  if (mm_yyyy.length > 6) {
    result = mm_yyyy.substr(0, 6);
  }
  else result = mm_yyyy;
  return result;
}






// //----------------------------------------------------------//
//
// window.onload = function () {
//   var div1 = document.getElementById("first"),
//     div2 = document.getElementById("second");
//
//   document.getElementById("btn1").onclick = function () {
//     console.log("first div style - " + div1.style.backgroundColor);
//   }
//
//   document.getElementById("btn2").onclick = function () {
//     console.log("second div style - " + div2.style.backgroundColor);
//   }
//
//
//
// };
//
// //----------------------------------------------------------//
//



