console.log('123');
console.warn('123');

$(document).ready(function () {

  $('#email').on('input', function () {
    console.log($(this).val());
  });


});

$(function()
{
  $('#email').keyup(function()
  {

    var email=$(this).val();
    if (email.length > 3) {
      alert('соси жепу');
    }
  })
})