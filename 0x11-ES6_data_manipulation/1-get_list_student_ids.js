export default function getListStudentIds(arr) {
  const ids = [];
  if (arr instanceof Array) {
    arr.map((student) => ids.push(student.id));
    return ids;
  }
  return [];
}
