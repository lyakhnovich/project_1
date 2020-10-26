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
      console.log('lol');
    });
  });





  // определение элемента с фокусом
  $(document).click(function(e){
    if(e.target.tagName === 'INPUT') {
      console.log(e.target.className);}
  });


  $('.login_inp').on('input', function () {
    let regex = /[0-9]/;

    if (regex.test($('.login_inp').val().substr(0,1))) {
      $('.login_inp').css("background-color", "#FF5B73");
    }
    else {
      $('.login_inp').css("background-color", "");
    }

  });


  // проверка правильности ввода email
  $('.email_inp').on('input', function () {

    if(!isEmail($('.email_inp').val())) {
      $('.email_inp').css("background-color", "#FF5B73");
    }
    else {
      $('.email_inp').css("background-color", "");
    }
  });


  function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }





});