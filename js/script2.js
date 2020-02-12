$(document).ready(function () {
  var i = 1;

  $('#formTable').on('submit', function (e) {
    //
    e.preventDefault();

    // объявление переменных (через запятую кстати!)
    var inputName = $('#formTable [name="name"]').val(),
      inputPhone = $('#formTable [name="phone"]').val(),
      inputAddress = $('#formTable [name="address"]').val();

    // условие для заполнения всех полей
    if (inputName && inputPhone && inputAddress) {
      //
      $('#table1 tbody').append('<tr><td>' + i + '</td><td>' + inputName + '</td><td>' + inputPhone + '</td><td>' + inputAddress + '</td></tr>');

      // очистка полей от предыдущих значений, после их добавления в таблицу
      $('#formTable [name="name"]').val('');
      $('#formTable [name="phone"]').val('')
      $('#formTable [name="address"]').val('');
      i++;
    } else {
      // ошибка при незаполненных полях
      alert('Заполнены не все поля!');
    }
  });


});