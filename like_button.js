'use strict';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return React.createElement(
      'h1',
      null,
      '\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, ',
      formatName(user),
      '!'
    );
  }
  return React.createElement(
    'h1',
    null,
    '\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, \u043D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u0435\u0446.'
  );
}

var user = {
  firstName: 'LOH',
  lastName: 'KEKOV'
};

var element = getGreeting();

ReactDOM.render(element, document.getElementById('root'));