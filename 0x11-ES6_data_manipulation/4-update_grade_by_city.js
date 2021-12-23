/*eslint-disable*/
export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  let students = [];
  students = listStudents.filter((student) => student.location === city);
  students.map(
    (x) => {
      const ids = newGrades.filter((id) => id.studentId === x.id);
      if (!ids.length) {
        x.grade = 'N/A';
      } else {
        x.grade = ids[0].grade;
      }
      return x;
    },
  );
  return students;
}
