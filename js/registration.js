$(document).ready(function () {

  $('.sign_btn').on('click', function () {
    let btn_txt = $('.sign_btn').html();

    if(btn_txt === 'SIGN IN') {
      $('.sign_btn').text('SIGN ON');
    }
    else {
      $('.sign_btn').text('SIGN IN');
    }
  });


  $( function() {
    $( "#sign_btn" ).on( 'click', function() {
      $( "#hide_div, #hide_div2" ).toggle( 'blind', {}, 500 );
    });
  });



  // определение элемента с фокусом
  $(document).click(function(e){
    if(e.target.tagName === 'INPUT') {
      console.log(e.target.className);}
  });

  // проверка правильности ввода email
  $('.email_inp').on('input', function () {
    console.log(isEmail($('.email_inp').val()));
  });

  // pattern = /\b[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,4}\b/i;
  function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    return regex.test(email);
  }





});