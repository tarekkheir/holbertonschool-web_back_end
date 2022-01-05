const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (e) {
    throw new Error('Cannot load the database');
  }

  const s = data.split('\n');
  s.shift();

  const students = s.map((student) => student.split(',')).filter((student) => student.length === 4);
  const cs = students.filter((student) => student[3] === 'CS').map((student) => student[0]);
  const swe = students.filter((student) => student[3] === 'SWE').map((student) => student[0]);

  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
  console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);

  return { students, cs, swe };
}

module.exports = countStudents;
