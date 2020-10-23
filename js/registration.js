$(document).ready(function () {

  $('.sign_btn').on('click', function () {

    let btn_txt = $('.sign_btn').html();

    if(btn_txt == 'SIGN IN') {
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

});