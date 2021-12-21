export default function getStudentsByLocation(arr, city) {
  let students = [];
  if (arr instanceof Array) {
    students = arr.filter((student) => student.location === city);
  }
  return students;
}
