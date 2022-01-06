const fs = require('fs');

async function readDatabase(file) {
  let data;
  try {
    data = await fs.promises.readFile(file, 'utf8');
  } catch (e) {
    throw new Error('Cannot load the database');
  }

  const s = data.split('\n');
  s.shift();

  const students = s.map((student) => student.split(','));

  const cs = students.filter((student) => student[3] === 'CS').map((student) => student[0]);
  const swe = students.filter((student) => student[3] === 'SWE').map((student) => student[0]);

  const obj = {};

  obj.CS = cs;
  obj.SWE = swe;

  return obj;
}

module.exports = readDatabase;
