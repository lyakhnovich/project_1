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
        //console.log("key_name " + key_name, "input_click " + input_click);
        caret_position = input_click;
        key_name = '';

        break;
      case 'keyup':
        //console.log("key_name " + key_name, "input_keyup " + input_keyup);
        caret_position = input_keyup;
        key_name = '';

        break;
    }
  }
}

let position = new Position();
document.getElementById("pan_input").addEventListener('click', position);
document.getElementById("pan_input").addEventListener('keyup', position);







document.getElementById("pan_input").oninput = function () {

  let x;
  x = document.getElementById("pan_input").value;                          // извлекаем данные из поля "номер карты"
  x = onlyNum(x);
  x = cut19(x);

  if (key_name != 'Backspace'/* || key_name != 'Delete'*/) {
    x = addSpaces(key_name, x);
  }
  else {
    delSpaces(caret_position, key_name);
  }

  document.getElementById("pan_input").value = x;
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


function delSpaces(car_pos, key_nm) {
  car_pos -= 1;
  console.log("car_pos " + car_pos + " " + key_nm);
}



function cut19(txt) {
  let result;

  if (txt.length > 19) {                      // огранчение в 19 символов
    result = txt.substr(0, 19);
  }
  else result = txt;

  return result;
}