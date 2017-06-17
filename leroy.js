var http = require('http');

http.createServer(function (req, result) {
    result.writeHead(200, {'Content-Type': 'text/plain'});
    result.end('Hello World!');
}).listen(8080);