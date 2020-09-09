let keypress;
document.addEventListener('keydown', function (event) {
  if(event.code == 'Delete' || event.code == 'Backspace') {
    keypress = event.code;
    //console.log('пидор', keypress);
  }
});


document.getElementById("pan_input").oninput = function () {

  let x;
  x = document.getElementById("pan_input").value;

  document.getElementById("pan_input").value = x.replace(/\D/g, '');
  x = x.replace(/\D/g, '');
  if (x.length > 19) {
    x = x.substr(0, 19);
  }

  document.getElementById("pan_input").value = x;


  let cnt = 3;
  let y = x.length;
  let result = "";


  for (let i = 0; y > i; i++) {

    if (i == cnt){
      result += x[i].concat(" ");
      cnt += 4;
    }
    else {
      result += x[i];
      console.log(result);
    }
  }



  document.getElementById("pan_input").value = result;
};
