const http = require('http');

const port = process.env.port || 1245;
const hostname = 'localhost';

const app = http.createServer(
  (req, res) => {
    res.end('Hello Holberton School!');
  },
);

app.listen(port, hostname);
