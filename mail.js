var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');


app.use(bodyParser.urlencoded({ extended: false })); app.use(bodyParser.json())

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'waaggghhhh@gmail.com',
    pass: '4709German',
  },
});

app.post('/send-email', function(req, res) {
  var mailOptions = {
    from: '"KEK" <waaggghhhh@gmail.com>', // sender address
    to: "waaggghhhh@gmail.com", // list of receivers
    subject: 'Request ', // Subject line
    text: req.body.to // plaintext body

  };
  smtpTransport.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });

  res.redirect("/index.html");
});