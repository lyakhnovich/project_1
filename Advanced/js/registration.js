$(document).ready(function () {

  // определение элемента с фокусом
  $(document).click(function(e){
    if(e.target.tagName === 'INPUT') {
      console.log(e.target.className);}
  });

  // SIGN IN
  $('#sign_btn').on('click', function () {
    let btn_txt = $('.sign_btn').html();

    if(btn_txt === 'SIGN IN') {
      $('.sign_btn').text('SIGN ON');
    }
    else {
      $('.sign_btn').text('SIGN IN');
    }
  });

  // SIGN IN
  $( function() {
    $( "#sign_btn" ).on( 'click', function(e) {
      e.preventDefault();
      $( "#hide_div, #hide_div2" ).toggle( 'blind', {}, 500 );
    });
  });


  $('.login_inp').on('input', function () {
    let regex = /[0-9]/;

    // LOG IN
    $( function() {
      $( "#log_in" ).on( 'click', function(e) {
        e.preventDefault();

        if (regex.test($('.login_inp').val().substr(0,1))) {
          $('.login_inp').css("background-color", "#FF5B73");
        }
        else {
          $('.login_inp').css("background-color", "");
        }
      });
    });
    if($('.login_inp').val() === '') {
      $('.login_inp').css("background-color", "");
    }

  });

  // проверка правильности ввода email
  $('.email_inp').on('input', function () {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // LOG IN
    $( function() {
      $( "#log_in" ).on( 'click', function(e) {
        e.preventDefault();

        if(!regex.test($('.email_inp').val())) {
          $('.email_inp').css("background-color", "#FF5B73");
        }
        else {
          $('.email_inp').css("background-color", "");
        }
      });
    });
    if($('.email_inp').val() === '') {
      $('.email_inp').css("background-color", "");
    }


  });




  $( function() {
    let tooltips = $("[title]").tooltip({
      position: {
        my: "left top",
        at: "right+10 top-0",
        collision: "none"
      }
    });

    $( "<button>" ).text( "ЛУЛ" ).button().on( "click", function() {
        tooltips.tooltip( "open" );
      })
      .insertAfter( "form" );
  } );

});

