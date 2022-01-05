const http = require('http');

const port = process.env.port || 1245;

const app = http.createServer(
  (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello Holberton School!');
  },
);

app.listen(port);
