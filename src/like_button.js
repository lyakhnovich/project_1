'use strict';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


function getGreeting(user) {
  if (user) {
    return <h1>Здравствуй, {formatName(user)}!</h1>;
  }
  return <h1>Здравствуй, незнакомец.</h1>;
}

const user = {
  firstName: 'LOH',
  lastName: 'KEKOV'
};


const element = (
   getGreeting()
);




ReactDOM.render(
  element,
  document.getElementById('root')
);