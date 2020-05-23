var docum = {
  title: 'заголовок',
  body: 'тело',
  footer: 'подвал',
  date: 'дата',

  app: {
    title: 'заголовок',
    body: 'тело',
    footer: 'подвал',
    date: 'дата'
  },

  add: function () {
    docum.title = prompt('введите заголовок', '');
    docum.body = prompt('введите тело документа', '');
    docum.footer = prompt('введите подвал документа', '');
    docum.date = prompt('введите дату', '');
  },

  show: function () {
    document.write(docum.title + '</br>');
    document.write(docum.body + '</br>');
    document.write(docum.footer + '</br>');
    document.write(docum.date + '</br>');
  }
};

docum.add()
docum.show();
