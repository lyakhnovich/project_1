console.log('123');
console.warn('123');

$(document).ready(function () {

  $('input').on('input', function () {
    console.log($(this).val());
  });


})(jQuery);