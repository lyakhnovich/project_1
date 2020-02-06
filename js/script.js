$(document).ready(function() {
  // Комментарий надо написать
  $('#email').on('keyup', function() {
    var emailInput = $(this),
        emailValue = emailInput.val();
    if (emailValue.length > 3) {
      emailInput.addClass('valid').removeClass('invalid');
    } else {
      emailInput.addClass('invalid').removeClass('valid');
    }
  });
});