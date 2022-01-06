const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((data) => {
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      response.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
      response.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}\n`);
    }).catch((e) => {
      response.statusCode = 500;
      response.write(e.message);
    }).finally(() => response.end());
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;

    if (major !== 'SWE' && major !== 'CS') {
      response.statusCode = 500;
      return response.end('Major must be CS or SWE');
    }

    readDatabase(process.argv[2]).then((data) => {
      response.statusCode = 200;
      response.write(`List: ${data[major].join(', ')}`)
    }).catch((e) => {
      response.write(e.message);
    }).finally(() => response.end());
  }
}

module.exports = StudentsController;
