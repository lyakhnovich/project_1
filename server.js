const http = require('http');
const server =  http.createServer();

server.on('request', (req, res) => {


  function User(name) {
    this.name = name;
  }

  User.prototype.hello = function (who) {
    console.log('привет, ' + who.name);
  };

  let loh = new User('лох');
  let pidr = new User('пидр');

  pidr.hello(loh);



  res.end('server run blyat!!!'); });

server.listen(8000, () => console.log('server run blyat!'));
