const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const s = data.split('\n');

  let studentsNumber = 0;
  const swe = [];
  const cs = [];

  for (let i = 1; i < s.length; i += 1) {
    if (s[i]) {
      studentsNumber += 1;

      const student = s[i].split(',');

      if (student[student.length - 1] === 'SWE') {
        swe.push(student[0]);
      } else {
        cs.push(student[0]);
      }
    }
  }
  console.log(`Number of students: ${studentsNumber}`);
  console.log(`Number of students in CS: ${cs.length}. List: ${cs[0]}, ${cs[1]}, ${cs[2]}, ${cs[3]}, ${cs[4]}, ${cs[5]}`);
  console.log(`Number of students in SWE: ${swe.length}. List: ${swe[0]}, ${swe[1]}, ${swe[2]}, ${swe[3]}`);
}

module.exports = countStudents;
