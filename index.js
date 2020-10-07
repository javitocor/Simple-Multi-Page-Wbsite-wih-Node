let http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let fileName = q.pathname !== '/' ? '.' + q.pathname + '.html' : './index.html';
  fs.readFile(fileName, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      fs.readFile('./404.html', (err, data) => {
        res.write(data);
        return res.end();
      })
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    }
  });
}).listen(8080);