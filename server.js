const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 8082;

const httpServer = http.createServer(httpHandler);

httpServer.listen(port, host, () => {
  console.log(`HTTP server running at http://${host}:${port}/`);
});

function httpHandler(req, res) {
  console.log(req.url);
  fs.readFile('./' + req.url, function (err, data) {

    if (err == null) {

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
}