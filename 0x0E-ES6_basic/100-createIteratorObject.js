export default function createIteratorObject(report) {
  const employees = [];
  const allEmployees = Object.values(report.allEmployees);
  for (const v of allEmployees) {
    for (const e of v) {
      employees.push(e);
    }
  }
  return employees;
}
