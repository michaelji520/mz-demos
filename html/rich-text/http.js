// set web port
var PORT = 9527;

var url=require('url');
var path=require('path');
var fs = require('fs');
var http = require('http');
var documentRoot = './';

var server = http.createServer((req, res) => {
    var url = req.url;
    if (url == '' || url == '/') {
      url += '/index.html';
    }

    var file = documentRoot + url;
    console.log(url);

    fs.readFile(file, function (err, data) {
      if (err) {
        res.writeHeader(404,{
            'content-type': 'text/html;charset="utf-8"'
        });
        res.write('<h1>404 Error</h1>');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
});
server.listen(PORT, '0.0.0.0');
console.log('Server started at port:', PORT);
