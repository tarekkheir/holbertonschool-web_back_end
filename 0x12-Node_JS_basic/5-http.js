const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const hostname = 'localhost';

const app = http.createServer(async (req, res) => {
  if (req.url === '/' || req.url === '') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
    countStudents(process.argv[2]).then((data) => {
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.cs.length}. List: ${data.cs.join(', ')}\n`);
      res.end(`Number of students in SWE: ${data.swe.length}. List: ${data.swe.join(', ')}\n`);
    }).catch((e) => res.end(e.message));
  }
});

app.listen(port, hostname);

module.exports = app;
