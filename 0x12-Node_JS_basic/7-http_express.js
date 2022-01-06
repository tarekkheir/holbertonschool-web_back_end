const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const hostname = 'localhost';

app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/palin');
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-type', 'text/palin');
  res.write('This is the list of our students\n');
  countStudents(process.argv[2]).then((data) => {
    res.write(`Number of students: ${data.students.length}\n`);
    res.write(`Number of students in CS: ${data.cs.length}. List: ${data.cs.join(', ')}\n`);
    res.end(`Number of students in SWE: ${data.swe.length}. List: ${data.swe.join(', ')}`);
  }).catch((e) => {
    res.end(e.message);
  });
});

app.listen(port, hostname);

module.exports = app;
