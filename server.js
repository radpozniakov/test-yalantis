var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(8081, function () {
  console.log('Express server is up on port 8081');
});


var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, function () {
  console.log('JSON Server is running')
});
