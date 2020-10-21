$(document).ready(function () {

  // $('.enter, .registration').hide();

  $('.input_enter').on('click', function () {
    console.log('lol');
    $('.enter').show();
    $('.registration').hide();
  });

  $('.input_registration').on('click', function () {
    $('.enter').hide();
    $('.registration').show();
  })



});