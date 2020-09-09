
document.getElementById("pan_input").oninput = function () {

  let x;
  let y;
  x = document.getElementById("pan_input").value;

  document.getElementById("pan_input").value = x.replace(/\D/g, '');
  x = x.replace(/\D/g, '');
  console.log(x);



  if (x.length > 19) {
    x = x.replace(/[0-9]{16,19}/, '')
    console.log("CYKA BLYAT'", x);

  }


  //let per_name =/^[0-9]{16,19}$/;
  // if(!per_name.test(x)){
  //   console.log("кэк", x);
  //   console.log("-----------------");
  //   console.log(x.replace(/\D/g, ''));
  // }
};
