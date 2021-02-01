function validate() {
  alert('validate');
}


$('#clickme').on('click', function () {

  $('#clickme').css({color: 'red'});
  console.log('lol');
})


$('a').on('click', function(e) {
  // e.preventDefault();
  console.log('lol');
  return false;
});





