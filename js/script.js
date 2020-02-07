$(document).ready(function () {

  inputShow();


// TODO написать комментарий
  function inputShow() {
    $('#formAuth').on('input', '.pole-vvoda', function (event) {
      var pole = $(event.target);
      var value = pole.val();
      var newValue = value.replace(/[0-9]+/g, '');

      console.log(pole, value,  newValue);

      $('.log').append('<br> - ' + newValue );
    });
  }
  /*
  .on()
  .text()
  .html()
  .addClass()
  .removeClass()

  if () {}
  if ()  {}else {}

   */


  /*
  $('#email').on('keyup input keydown', function(e) {
    console.log(e.type);
    var emailInput = $(this),
        emailValue = emailInput.val();
    if (emailValue.length > 3) {
      emailInput.addClass('valid').removeClass('invalid');
    } else {
      emailInput.addClass('invalid').removeClass('valid');
    }
  });

   */
});