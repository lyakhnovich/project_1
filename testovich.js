let http = require('http');
let url = require('url');
let querystring = require('querystring');
let fs = require('fs');

let server = http.createServer();

let userStoredInMemory = {};

// listening requests from clients
server.on('request', function (request, response) {
  let currentRoute = url.format(request.url);
  let currentMethod = request.method;
  let requestBody = '';

  switch (currentRoute) {
    case '/':
      fs.readFile(__dirname + '/testovich.html', function (err, data) {
        let headers = {
          'Content-Type': 'text/html'
        };

        response.writeHead(200, headers);
        response.end(data);
      });
      break;

    case '/api/user':
      if (currentMethod === 'POST') {
        request.on('data', function (chunk) {
          requestBody += chunk.toString();
        });
        request.on('end', function () {

          // saving the user sent on the request body
          userStoredInMemory = querystring.parse(requestBody);

          // responding to the user
          let headers = {
            'Content-Type': 'text/plain'
          };
          response.writeHead(200, headers);
          // возвращаяет DATA
          response.end('Testovich');
        });
      }

        // if request is a GET, then the client is requesting
      // to see the user stored.
      else if (currentMethod === 'GET') {
        let headers = {
          'Content-Type': 'application/json'
        };

        response.writeHead(200, headers);
        response.end(JSON.stringify(userStoredInMemory));
      }
      break;
  }
});



server.listen(7080, function () {
  console.log('server up and running at 7080 port blyat');
});