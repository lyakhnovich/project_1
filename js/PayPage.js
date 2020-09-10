let keypress;
document.addEventListener('keydown', function (event) {
  if(event.code == 'Delete' || event.code == 'Backspace') {
    keypress = event.code;
    //console.log('пидор', keypress);
  }
});


let input = document.getElementById("pan_input");
input.addEventListener("input", function () {
  console.log("Caret position INPUT: " + this.selectionStart);
});



let input2 = document.getElementById("pan_input").addEventListener("keyup", function () {
  console.log("Caret position KEYUP: " + this.selectionStart);
});

let input3 = document.getElementById("pan_input").addEventListener("keydown", function () {
  console.log("Caret position keydown: " + this.selectionStart);
});

let input4 = document.getElementById("pan_input").addEventListener("keypress", function () {
  console.log("Caret position keypress: " + this.selectionStart);
});

let input5 = document.getElementById("pan_input").addEventListener("click", function () {
  console.log("Caret position CLICK: " + this.selectionStart);
});




document.getElementById("pan_input").oninput = function () {

  let x;
  x = document.getElementById("pan_input").value;                          // извлекаем данные за поля "номер карты"



  if (keypress != 'Backspace') {
    x = onlyNum(x);
  }
  else if (keypress == 'Backspace') {
  }

  x = cut19(x);

  x = addSpaces(keypress, x);


  document.getElementById("pan_input").value = x;
  keypress = '';
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

    if (i == cnt && keypress != 'Backspace'){
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


// window.addEventListener ("load", function () {
//   let input = document.getElementById("pan_input");
//   console.log(input);
//   input[0].addEventListener ("keydown", function () {
//     console.log("Caret position: " + this.selectionStart);
//
//     // You can also set the caret: this.selectionStart = 2;
//   });
// });



