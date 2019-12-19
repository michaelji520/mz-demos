/**
 * Copyright (c) 2014-2018 NighthawkStudio, All rights reserved.
 * @fileoverview
 * @author Michael Zhang | michaelji520@gmail.com
 * @version 1.0 | 2019-12-19 | initial version
 */

var app = require('express')();
var server = require('http').createServer(app);

const url = require('url');
const WebSocket = require('ws');

app.use(function (req, res) {
  res.send({msg: "hello"});
});

const wss = new WebSocket.Server({server});

wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);
  const ip = req.connection.remoteAddress;
  const port = req.connection.remotePort;
  console.log(ip + " " + port);

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('msg received');
  });

  ws.on('close', function (message) {
    console.log('params: %s', message);
  });

  ws.send('something');
});

server.listen(9999, function listening() {
  console.log('WebSocket Listening on %d', server.address().port);
});
