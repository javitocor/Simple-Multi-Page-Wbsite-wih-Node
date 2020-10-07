let http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

const PORT = 8080;
const TEXT_HTML = { 'Content-Type': 'text/html' };

http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let fileName = q.pathname !== '/' ? '.' + q.pathname + '.html' : './index.html';
  fs.readFile(fileName, function (err, data) {
    if (err) {
      res.writeHead(404, TEXT_HTML);
      fs.readFile('./404.html', (err, data) => {
        res.write(data);
        return res.end();
      })
    } else {
      res.writeHead(200, TEXT_HTML);
      res.write(data);
      return res.end();
    }
  });
}).listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});