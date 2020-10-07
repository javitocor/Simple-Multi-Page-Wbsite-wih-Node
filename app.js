const express = require('express')
const app = express();
const port = 8000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + '/contact-me.html');
});

app.use(function(req, res) {
  res.sendFile(__dirname + '/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});